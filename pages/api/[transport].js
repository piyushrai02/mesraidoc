import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";

export const config = { api: { bodyParser: false } };

let cachedIndex = null;

function buildDocIndex() {
    if (cachedIndex) return cachedIndex;

    const pagesDir = path.join(process.cwd(), "pages");
    const out = [];

    const walk = (dir, prefix) => {
        let entries;
        try {
            entries = fs.readdirSync(dir, { withFileTypes: true });
        } catch {
            return;
        }
        for (const e of entries) {
            const full = path.join(dir, e.name);
            if (e.isDirectory()) {
                if (e.name === "api" || e.name.startsWith("_")) continue;
                walk(full, prefix ? `${prefix}/${e.name}` : e.name);
                continue;
            }
            if (!/\.(mdx|md)$/.test(e.name)) continue;
            if (e.name.startsWith("_")) continue;
            const bareName = e.name.replace(/\.(mdx|md)$/, "");
            const slug =
                bareName === "index"
                    ? prefix || ""
                    : prefix
                      ? `${prefix}/${bareName}`
                      : bareName;
            const raw = fs.readFileSync(full, "utf8");
            const title = extractTitle(raw) || bareName;
            const normalizedSlug = slug ? `/${slug}` : "/";
            out.push({
                slug: normalizedSlug.replace(/\/+/g, "/"),
                title,
                content: raw,
            });
        }
    };

    walk(pagesDir, "");
    cachedIndex = out;
    return out;
}

function extractTitle(content) {
    const fm = /^---\n([\s\S]*?)\n---/m.exec(content);
    if (fm) {
        const titleLine = /(^|\n)title:\s*["']?([^"'\n]+)["']?/i.exec(fm[1]);
        if (titleLine) return titleLine[2].trim();
    }
    const h1 = /^#\s+(.+)$/m.exec(content);
    return h1 ? h1[1].trim() : null;
}

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function snippet(content, query, len = 240) {
    const lowerContent = content.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const i = lowerContent.indexOf(lowerQuery);
    if (i === -1) return content.slice(0, len).replace(/\s+/g, " ").trim();
    const start = Math.max(0, i - 80);
    return content.slice(start, start + len).replace(/\s+/g, " ").trim();
}

const handler = createMcpHandler(
    (server) => {
        server.tool(
            "search_docs",
            "Search Mesrai documentation by keyword. Returns matching pages with title, slug, and a short snippet.",
            {
                query: z.string().min(1),
                limit: z.number().int().min(1).max(25).optional(),
            },
            async ({ query, limit }) => {
                const index = buildDocIndex();
                const q = query.toLowerCase();
                const hits = index
                    .map((p) => {
                        const titleMatch = p.title.toLowerCase().includes(q)
                            ? 5
                            : 0;
                        const contentMatches = (
                            p.content
                                .toLowerCase()
                                .match(new RegExp(escapeRegex(q), "g")) || []
                        ).length;
                        return { page: p, score: titleMatch + contentMatches };
                    })
                    .filter((r) => r.score > 0)
                    .sort((a, b) => b.score - a.score)
                    .slice(0, limit ?? 10);
                if (hits.length === 0) {
                    return {
                        content: [
                            {
                                type: "text",
                                text: `No matches for "${query}".`,
                            },
                        ],
                    };
                }
                const lines = hits.map(
                    (h) =>
                        `• ${h.page.title} (slug: ${h.page.slug})\n  ${snippet(h.page.content, query)}`,
                );
                return {
                    content: [{ type: "text", text: lines.join("\n\n") }],
                };
            },
        );

        server.tool(
            "read_doc",
            "Fetch the full Markdown/MDX content of a Mesrai documentation page by slug (e.g. /guides/overview).",
            { slug: z.string().min(1) },
            async ({ slug }) => {
                const index = buildDocIndex();
                const normalized = slug.startsWith("/") ? slug : `/${slug}`;
                const page = index.find((p) => p.slug === normalized);
                if (!page) {
                    return {
                        content: [
                            {
                                type: "text",
                                text: `No page at slug "${normalized}". Use list_docs to see all slugs.`,
                            },
                        ],
                    };
                }
                return {
                    content: [
                        {
                            type: "text",
                            text: `# ${page.title}\n\n${page.content}`,
                        },
                    ],
                };
            },
        );

        server.tool(
            "list_docs",
            "List every Mesrai documentation page as title + slug.",
            {},
            async () => {
                const index = buildDocIndex();
                const lines = index
                    .map((p) => `• ${p.title} — ${p.slug}`)
                    .sort();
                return {
                    content: [{ type: "text", text: lines.join("\n") }],
                };
            },
        );
    },
    {
        serverInfo: {
            name: "mesrai-docs",
            version: "1.0.0",
        },
    },
    {
        basePath: "/api",
        verboseLogs: false,
    },
);

export default async function pagesHandler(req, res) {
    // Force the URL passed to `createMcpHandler` to match the handler's
    // expected base path. Next.js rewrites (e.g. `/mcp` → `/api/mcp`)
    // can leave `req.url` pointing at the *external* path (`/mcp`) when
    // the request reaches the page handler, which makes the MCP router
    // miss its `/api/<transport>` endpoint match and 404. Rebuilding
    // from `req.query.transport` is reliable for both direct
    // (`/api/mcp`) and rewritten (`/mcp` → `/api/mcp`) hits.
    const transport = Array.isArray(req.query.transport)
        ? req.query.transport[0]
        : req.query.transport || "mcp";
    const incoming = new URL(req.url, `http://${req.headers.host}`);
    const url = new URL(
        `/api/${transport}${incoming.search}`,
        `http://${req.headers.host}`,
    );
    const init = {
        method: req.method,
        headers: req.headers,
    };
    if (req.method !== "GET" && req.method !== "HEAD") {
        const chunks = [];
        for await (const chunk of req) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        }
        init.body = Buffer.concat(chunks);
    }
    const fetchReq = new Request(url.toString(), init);
    const response = await handler(fetchReq);
    res.status(response.status);
    response.headers.forEach((v, k) => res.setHeader(k, v));
    if (response.body) {
        const reader = response.body.getReader();
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(Buffer.from(value));
        }
    }
    res.end();
}
