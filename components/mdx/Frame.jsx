import React from 'react';

/**
 * Mintlify-compatible <Frame> — image wrapper with caption.
 * After image stripping in mesrai-engine docs, mostly used for misc content blocks.
 */
export function Frame({ caption, children }) {
  return (
    <figure className="mesrai-frame">
      <div className="mesrai-frame-inner">{children}</div>
      {caption && <figcaption className="mesrai-frame-caption">{caption}</figcaption>}
    </figure>
  );
}

/**
 * Snippet — placeholder for shared content blocks. In Mintlify, /_snippets/* are
 * pulled by file ref. Here, Snippet renders children inline (any prop is ignored).
 * If file= is supplied, render a neutral fallback.
 */
export function Snippet({ file, children }) {
  if (file && !children) {
    return <div className="mesrai-snippet-fallback" />;
  }
  return <div className="mesrai-snippet">{children}</div>;
}

/**
 * Icon shim — Mintlify's <Icon> tag for inline icons. Just renders a small dot.
 * Most usages are decorative.
 */
export function Icon({ icon, ...props }) {
  return <span className="mesrai-icon" aria-hidden="true" {...props}>●</span>;
}

/**
 * Columns — Mintlify multi-column layout. Renders children in CSS grid.
 */
export function Columns({ cols = 2, children }) {
  return (
    <div
      className="mesrai-columns"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: '1rem',
        margin: '1.25rem 0',
      }}
    >
      {children}
    </div>
  );
}
