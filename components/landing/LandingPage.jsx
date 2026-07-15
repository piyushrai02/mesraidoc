import Head from 'next/head';
import { Card, CardGroup } from '@/components/mdx';

const FEED = [
  { sev: 'warn', dot: 'bg-amber-500', label: 'text-amber-500', rule: 'security/sql-injection', file: 'api/users.ts', msg: 'User input concatenated into raw SQL query' },
  { sev: 'info', dot: 'bg-blue-500', label: 'text-blue-500', rule: 'perf/n-plus-one', file: 'services/orders.ts', msg: 'DB call inside .map loop — batch via WHERE IN' },
  { sev: 'pass', dot: 'bg-green-500', label: 'text-green-500', rule: 'arch/layer-boundary', file: 'ui/dashboard.tsx', msg: 'Component does not import from infra layer' },
  { sev: 'pass', dot: 'bg-green-500', label: 'text-green-500', rule: 'style/naming', file: 'core/auth.ts', msg: 'Identifier conventions match repo rules' },
];

const CHIPS = [
  'Multi-agent review',
  'Architecture-aware (AST graph)',
  'Bring your own key',
  'Rules you write',
];

export function LandingPage() {
  return (
    <>
      <Head>
        <title>Mesrai Documentation</title>
        <meta name="description" content="Documentation for Mesrai — multi-agent AI code review built for engineering teams in India and beyond." />
      </Head>
      <div className="landing-page -mx-6 md:-mx-8 lg:-mx-12">
        {/* HERO */}
        <section className="relative isolate w-full overflow-hidden px-6 pt-20 pb-20 md:pt-28 md:pb-24 bg-white dark:bg-[#09090B]">
          {/* Decorative background — brand glow + faint grid, both masked to fade */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute -right-40 -top-48 h-[620px] w-[620px] rounded-full blur-3xl opacity-70 dark:opacity-100"
              style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.16), transparent 62%)' }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(130,130,140,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(130,130,140,0.06) 1px, transparent 1px)',
                backgroundSize: '46px 46px',
                WebkitMaskImage: 'radial-gradient(120% 100% at 30% 10%, black, transparent 72%)',
                maskImage: 'radial-gradient(120% 100% at 30% 10%, black, transparent 72%)',
              }}
            />
          </div>

          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-20">
            <article className="flex flex-col gap-7">
              <header className="flex flex-col gap-5">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 dark:border-[#27272A] bg-gray-50 dark:bg-[#101014] px-3 py-1">
                  <span className="inline-block size-1.5 rounded-full bg-[#FF6B35]" />
                  <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-gray-600 dark:text-gray-400">
                    Mesrai Docs · AI code review
                  </span>
                </div>

                <h1 className="font-serif text-5xl leading-[1.04] font-normal tracking-tight md:text-6xl text-gray-900 dark:text-white">
                  AI code review that <em className="text-[#FF6B35] font-normal italic">understands your architecture</em>.
                </h1>

                <p className="max-w-[56ch] text-base leading-[1.6] md:text-lg text-gray-600 dark:text-gray-400">
                  Multi-agent reviewer reads your repo as a graph — not just the diff. Catches bugs, security risks, and design issues on every PR, with rules you write and the model you pick.
                </p>
              </header>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://app.mesrai.com/login"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF6B35] text-white font-medium text-sm no-underline hover:bg-[#C2400A] transition-colors"
                >
                  Start free
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a
                  href="/guides/quickstart"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium text-sm no-underline hover:border-[#FF6B35] transition-colors"
                >
                  Quickstart
                </a>
              </div>

              {/* Feature chips */}
              <ul className="flex flex-wrap gap-2">
                {CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-gray-200 dark:border-[#27272A] bg-white dark:bg-[#0F0F12] px-3 py-1 text-[12px] text-gray-600 dark:text-gray-400"
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <footer className="border-t border-gray-200 dark:border-gray-800 mt-3 pt-5 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-wider uppercase text-gray-500 dark:text-gray-400">
                <span className="inline-block size-1.5 shrink-0 rounded-full bg-green-500" />
                <span>github · gitlab · bitbucket · azure repos</span>
              </footer>
            </article>

            {/* EXAMPLE PR REVIEW PANEL */}
            <div className="relative hidden lg:block">
              {/* soft glow behind the panel */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl blur-2xl opacity-60"
                style={{ background: 'radial-gradient(60% 60% at 70% 30%, rgba(255,107,53,0.14), transparent 70%)' }}
              />
              <aside
                className="flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-[#27272A] bg-white dark:bg-[#0F0F12] shadow-xl shadow-black/5 dark:shadow-black/40 lg:sticky lg:top-32"
                aria-label="Example Mesrai review"
              >
                <header className="border-b border-gray-200 dark:border-[#27272A] flex items-center justify-between gap-3 px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] tracking-[0.14em] uppercase text-gray-900 dark:text-white font-medium">
                      Mesrai review
                    </span>
                    <span className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-gray-500">
                      example · pull request #42
                    </span>
                  </div>
                  <span className="rounded border border-gray-300 dark:border-gray-700 px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase text-gray-500">
                    demo
                  </span>
                </header>

                <ul className="flex flex-col">
                  {FEED.map((row, i) => (
                    <li key={i} className="border-b border-gray-200 dark:border-[#27272A] flex flex-col gap-1.5 px-4 py-3 last:border-0 transition-colors hover:bg-gray-50 dark:hover:bg-[#141418]">
                      <div className="flex items-center gap-3">
                        <span className={`inline-block size-1.5 shrink-0 rounded-full ${row.dot}`} />
                        <span className={`shrink-0 font-mono text-[10px] tracking-[0.1em] uppercase ${row.label}`}>
                          {row.sev}
                        </span>
                        <span className="text-gray-900 dark:text-white truncate font-mono text-[11px]">
                          {row.rule}
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 truncate pl-[22px] text-[12px] leading-snug">
                        <span className="text-gray-500 font-mono text-[10px]">{row.file}</span> — {row.msg}
                      </div>
                    </li>
                  ))}
                </ul>

                <footer className="border-t border-gray-200 dark:border-[#27272A] flex items-center justify-between px-4 py-2 font-mono text-[10px] tracking-[0.12em] uppercase text-gray-500">
                  <span>4 findings · 2 pass · 1 warn · 1 info</span>
                  <span className="text-[#FF6B35]">illustration</span>
                </footer>
              </aside>
            </div>
          </div>
        </section>

        {/* DOC SECTIONS */}
        <section className="px-6 py-16 md:py-24 border-t border-gray-200 dark:border-[#18181B] bg-gray-50 dark:bg-[#0B0B0E]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#FF6B35]">
                // explore the docs
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900 dark:text-white">
                Pick where you want to start
              </h2>
              <p className="mt-3 max-w-[58ch] text-gray-600 dark:text-gray-400 leading-relaxed">
                From your first review to writing rules, bringing your own key, and running Mesrai in CI — jump straight to what you need.
              </p>
            </div>

            <CardGroup cols={3}>
              <Card title="Quickstart" icon="rocket" href="/guides/quickstart">
                Connect a repo and see your first AI review in minutes.
              </Card>
              <Card title="How code review works" icon="sparkles" href="/guides/code_review/flow">
                Multi-agent flow over an AST graph of your repo.
              </Card>
              <Card title="Mesrai Playbook" icon="sliders" href="/guides/code_review/configs/mesrai_rules">
                Plain-English or YAML rules. Apply per-org, per-repo, per-directory.
              </Card>
              <Card title="BYOK" icon="hand-holding-dollar" href="/guides/byok">
                Bring your own OpenAI, Anthropic, Vertex, Bedrock, or any compatible key.
              </Card>
              <Card title="Pricing" icon="money-bill-wave" href="/guides/pricing">
                Free ₹0, Pro ₹499 / $6 BYOK, Enterprise custom.
              </Card>
              <Card title="CLI" icon="terminal" href="/guides/cli/introduction">
                Run Mesrai reviews from your terminal or CI agent.
              </Card>
            </CardGroup>
          </div>
        </section>

        {/* LLM PROVIDERS */}
        <section className="px-6 py-16 md:py-24 bg-white dark:bg-[#09090B]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#FF6B35]">
                // bring your own model
              </span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900 dark:text-white">
                Works with any LLM provider
              </h2>
              <p className="mt-4 max-w-[60ch] text-gray-600 dark:text-gray-400 leading-relaxed">
                Mesrai is provider-agnostic. Plug in OpenAI or Anthropic for the default catalog, or wire any OpenAI-compatible endpoint. Token bills land on your provider — Mesrai never adds margin.
              </p>
            </div>

            <CardGroup cols={4}>
              <Card title="Z.ai" icon="bolt" href="/kb/how-to-use-z-ai-with-mesrai">
                GLM-4.6 + reasoning models from Zhipu.
              </Card>
              <Card title="Groq" icon="bolt" href="/kb/how-to-use-groq-with-mesrai">
                Ultra-fast inference on Llama 3, Mixtral, and more.
              </Card>
              <Card title="Together AI" icon="globe" href="/kb/how-to-use-together-ai-with-mesrai">
                Open-source models at competitive prices.
              </Card>
              <Card title="Fireworks" icon="flask" href="/kb/how-to-use-fireworks-with-mesrai">
                Production-grade hosted open models.
              </Card>
              <Card title="Moonshot" icon="moon" href="/kb/how-to-use-moonshot-with-mesrai">
                Kimi models with long-context support.
              </Card>
              <Card title="Novita" icon="globe" href="/kb/how-to-use-novita-with-mesrai">
                Serverless GPU inference platform.
              </Card>
              <Card title="Chutes" icon="bolt" href="/kb/how-to-use-chutes-with-mesrai">
                Frontier models on shared infrastructure.
              </Card>
              <Card title="Synthetic" icon="sparkles" href="/kb/how-to-use-synthetic-with-mesrai">
                Specialized inference endpoints.
              </Card>
            </CardGroup>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
              Also supported: OpenAI · Anthropic · Vertex · Bedrock · Ollama · vLLM · any OpenAI-compatible endpoint. See the{' '}
              <a href="/guides/byok" className="text-[#FF6B35] no-underline hover:underline">BYOK guide</a>.
            </p>
          </div>
        </section>

        {/* GET STARTED CTA */}
        <section className="relative overflow-hidden px-6 py-20 md:py-24 border-t border-gray-200 dark:border-[#27272A] bg-gray-50 dark:bg-[#0B0B0E]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-70"
            style={{ background: 'radial-gradient(50% 80% at 50% 0%, rgba(255,107,53,0.10), transparent 70%)' }}
          />
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white">
              Start reviewing with Mesrai
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Free forever for individuals. INR billing + GST invoices on Pro and Enterprise.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://app.mesrai.com/login"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FF6B35] text-white font-medium text-sm no-underline hover:bg-[#C2400A] transition-colors"
              >
                Start free
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a
                href="/guides/pricing"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium text-sm no-underline hover:border-[#FF6B35] transition-colors"
              >
                See pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
