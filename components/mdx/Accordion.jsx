import React, { useState } from 'react';

/**
 * Mintlify-compatible <Accordion> + <AccordionGroup>.
 */
export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <details
      className="mesrai-accordion"
      open={open}
      onToggle={e => setOpen(e.currentTarget.open)}
    >
      <summary className="mesrai-accordion-summary">
        <span>{title}</span>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
          className={`mesrai-accordion-chevron ${open ? 'is-open' : ''}`}
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </summary>
      <div className="mesrai-accordion-body">{children}</div>
    </details>
  );
}

export function AccordionGroup({ children }) {
  return <div className="mesrai-accordion-group">{children}</div>;
}
