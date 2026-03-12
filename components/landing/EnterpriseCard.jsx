/**
 * EnterpriseCard Component
 * Orange gradient border effect enterprise CTA card
 * Supports both light and dark themes
 */

import React from 'react';

export const EnterpriseCard = () => {
  return (
    <div className="relative p-8 rounded-2xl bg-white dark:bg-[#141517] border border-gray-200 dark:border-[#27272A]">
      {/* Badge */}
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-4">
        Enterprise
      </span>

      {/* Heading */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Enterprise Ready
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        Mesrai is built with enterprise expectations in mind — even while in early access.
        We prioritize security, control, and scalability from day one.
      </p>

      {/* Features list */}
      <ul className="space-y-2 mb-8" style={{ listStyle: 'none', paddingLeft: 0 }}>
        {[
          'Security-First Architecture',
          'Privacy-Respecting by Default',
          'Deployment Flexibility (Planned)',
          'Team-Ready Foundations',
        ].map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400" style={{ margin: 0 }}>
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#E8772E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA - Orange outlined button */}
      <a
        href="https://mesrai.com/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 font-semibold text-sm tracking-wide rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 no-underline"
        style={{
          padding: '12px 24px',
          border: '2px solid #E8772E',
          color: '#E8772E',
          backgroundColor: 'transparent',
          display: 'inline-flex',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#E8772E';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#E8772E';
        }}
      >
        Contact Sales
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
};

EnterpriseCard.displayName = 'EnterpriseCard';
