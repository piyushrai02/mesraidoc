import React, { Children } from 'react';

/**
 * Mintlify-compatible <Steps> and <Step>.
 * Renders a numbered vertical list with brand-orange step circles.
 */
export function Steps({ children }) {
  const steps = Children.toArray(children).filter(Boolean);
  return (
    <ol className="mesrai-steps">
      {steps.map((child, i) => (
        <li className="mesrai-step" key={i}>
          <span className="mesrai-step-number">{i + 1}</span>
          <div className="mesrai-step-body">{child}</div>
        </li>
      ))}
    </ol>
  );
}

export function Step({ title, children }) {
  return (
    <div>
      {title && <h4 className="mesrai-step-title">{title}</h4>}
      <div className="mesrai-step-content">{children}</div>
    </div>
  );
}
