import React from 'react';

/**
 * Mintlify-compatible callouts: Note, Info, Tip, Warning, Check.
 * Inline-block rendering with brand-orange / semantic accent.
 */

function Box({ kind, icon, children }) {
  return (
    <div className={`mesrai-callout mesrai-callout-${kind}`} role="note">
      <div className="mesrai-callout-icon" aria-hidden="true">
        {icon}
      </div>
      <div className="mesrai-callout-body">{children}</div>
    </div>
  );
}

const IconInfo = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
);
const IconNote = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 17.25V21h3.75L18.81 8.94l-3.75-3.75L3 17.25zM21 7l-4-4-2.34 2.34 4 4L21 7z"/></svg>
);
const IconTip = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a7 7 0 00-4 12.74V18a1 1 0 001 1h6a1 1 0 001-1v-3.26A7 7 0 0012 2zm-3 19h6v-1H9v1z"/></svg>
);
const IconWarn = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
);
const IconCheck = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 16.17l-4.17-4.17L3 13.41l6 6 12-12-1.41-1.41z"/></svg>
);

export function Note({ children }) {
  return <Box kind="note" icon={IconNote}>{children}</Box>;
}
export function Info({ children }) {
  return <Box kind="info" icon={IconInfo}>{children}</Box>;
}
export function Tip({ children }) {
  return <Box kind="tip" icon={IconTip}>{children}</Box>;
}
export function Warning({ children }) {
  return <Box kind="warning" icon={IconWarn}>{children}</Box>;
}
export function Check({ children }) {
  return <Box kind="check" icon={IconCheck}>{children}</Box>;
}
