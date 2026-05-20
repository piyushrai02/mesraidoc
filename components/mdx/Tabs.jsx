import React, { Children, useState } from 'react';

/**
 * Mintlify-compatible <Tabs> + <Tab>.
 * Tab uses `title` prop.
 */
export function Tabs({ children }) {
  const tabs = Children.toArray(children).filter(Boolean);
  const [active, setActive] = useState(0);
  return (
    <div className="mesrai-tabs">
      <div className="mesrai-tabs-header" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={`mesrai-tab-btn ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
            type="button"
          >
            {tab.props.title || `Tab ${i + 1}`}
          </button>
        ))}
      </div>
      <div className="mesrai-tabs-body">{tabs[active]}</div>
    </div>
  );
}

export function Tab({ children }) {
  return <div className="mesrai-tab-panel">{children}</div>;
}
