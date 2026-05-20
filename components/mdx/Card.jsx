import React from 'react';

/**
 * Mintlify-compatible <Card> for Nextra.
 * Usage:
 *   <Card title="Quickstart" icon="rocket" href="/guides/quickstart">
 *     Connect a repo and see your first AI review in minutes.
 *   </Card>
 */
export function Card({ title, icon, href, children, ...props }) {
  const inner = (
    <div className="mesrai-card group">
      {icon && (
        <div className="mesrai-card-icon">
          <CardIcon name={icon} />
        </div>
      )}
      {title && <h3 className="mesrai-card-title">{title}</h3>}
      {children && <div className="mesrai-card-body">{children}</div>}
    </div>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="mesrai-card-link no-underline"
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

/**
 * Lightweight icon shim — accepts Mintlify icon names (mostly Font Awesome).
 * Maps the most common ones to inline SVG. Unknown names render a small dot.
 */
function CardIcon({ name }) {
  const icons = {
    rocket: 'M13.13 22.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1zM5.64 12.5l-3.83-1.63 6.1-2.77c-.91 1.36-1.69 2.83-2.27 4.4zM21.61 2.39S16.66.269 11 5.93c-2.19 2.19-3.5 4.6-4.35 6.71-.28.75-.09 1.57.46 2.13l2.13 2.12c.55.56 1.37.75 2.12.47C13.47 16.5 15.88 15.19 18.07 13c5.66-5.66 3.54-10.61 3.54-10.61z',
    sparkles: 'M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm7 10l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z',
    bolt: 'M11 21h-1l1-7H6l8-13h1l-1 7h5l-8 13z',
    code: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    'code-branch': 'M17 16.5v-3l-5-3-5 3v3M12 6v4',
    sliders: 'M4 18h7v-2H4v2zm0-5h13v-2H4v2zm0-7v2h16V6H4z',
    brain: 'M13 3a3 3 0 00-3 3v.18A3 3 0 007 9v.18A3 3 0 005 12v6a3 3 0 003 3h8a3 3 0 003-3v-6a3 3 0 00-2-2.82V9a3 3 0 00-3-3V3z',
    lock: 'M12 1a5 5 0 00-5 5v3H6a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-8a3 3 0 00-3-3h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 016 0v3H9z',
    'hand-holding-dollar': 'M19 8h-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v8h18v-8c0-1.1-.9-2-2-2z',
    'wand-magic-sparkles': 'M2 12l3-3 4 4 9-9 4 4-13 13-4-4z',
    'magnifying-glass': 'M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z',
    github: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    users: 'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    'money-bill-wave': 'M21 5H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM12 16a4 4 0 110-8 4 4 0 010 8z',
    'life-ring': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z',
    'shield-halved': 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
    'shield-check': 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
    server: 'M4 1h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 13h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z',
    plug: 'M14 11l-2-2v3l4 4v-3l-2-2zm-9 7a2 2 0 002 2h10a2 2 0 002-2v-4H5v4z',
    flask: 'M9 2v6L4 18a3 3 0 003 3h10a3 3 0 003-3l-5-10V2H9z',
    compass: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z',
    lightbulb: 'M9 21h6v-1H9v1zm3-19a7 7 0 00-4 12.74V18a1 1 0 001 1h6a1 1 0 001-1v-3.26A7 7 0 0012 2z',
    book: 'M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
    'book-open': 'M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 14h-7V7h7v11zM11 7v11H4V7h7z',
    fire: 'M13.5 0c-2.5 2.5-3.5 5.5-3.5 8 0 1.4.7 2.5 1.5 3.2C10.4 12.1 9 13.5 9 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.5-3-7-7.5-15z',
    scale: 'M12 3l8 5-3 7H7L4 8l8-5z',
    'scale-balanced': 'M12 3l8 5-3 7H7L4 8l8-5z',
    'triangle-exclamation': 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
    'gamepad-modern': 'M16 6H8a6 6 0 00-6 6v3a3 3 0 006 0v-1h8v1a3 3 0 006 0v-3a6 6 0 00-6-6z',
    moon: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
    sun: 'M12 7a5 5 0 100 10 5 5 0 000-10zm0-5v3m0 16v3M5 12H2m20 0h-3M5.6 5.6L3.5 3.5m17 17l-2.1-2.1M5.6 18.4L3.5 20.5m17-17l-2.1 2.1',
    globe: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93A8 8 0 014 12c0-.62.08-1.21.21-1.79L9 15v1a2 2 0 002 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3a1 1 0 00-1-1H8v-2h2a1 1 0 001-1V7h2a2 2 0 002-2v-.41C17.86 5.51 20 8.51 20 12c0 2.17-.83 4.14-2.1 5.39z',
    robot: 'M12 2a2 2 0 012 2v2h2a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V9a3 3 0 013-3h2V4a2 2 0 012-2zM9 12a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z',
    terminal: 'M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm2 4l3 3-3 3 1 1 4-4-4-4-1 1zm6 6h6v1h-6v-1z',
    xmark: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  };
  const path = icons[name] || icons['sparkles'];
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

/**
 * Mintlify-compatible <CardGroup cols={N}>
 */
export function CardGroup({ cols = 2, children }) {
  const colClass = {
    1: 'mesrai-cardgroup-1',
    2: 'mesrai-cardgroup-2',
    3: 'mesrai-cardgroup-3',
    4: 'mesrai-cardgroup-4',
  }[cols] || 'mesrai-cardgroup-2';
  return <div className={`mesrai-cardgroup ${colClass}`}>{children}</div>;
}
