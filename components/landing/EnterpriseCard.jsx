/**
 * EnterpriseCard Component
 * Purple gradient border effect enterprise CTA card
 * Supports both light and dark themes
 */

import React from 'react';

export const EnterpriseCard = () => {
  return (
    <div className="relative p-8 rounded-2xl bg-white dark:bg-[#141517] border border-gray-200 dark:border-transparent overflow-hidden">
      {/* Gradient border effect for dark mode */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 -z-10 opacity-0 dark:opacity-100" />
      <div className="absolute inset-[1px] rounded-2xl bg-[#141517] -z-10 hidden dark:block" />

      <div className="relative z-10">
        {/* Badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4">
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
        <ul className="space-y-2 mb-6">
          {[
            'Security-First Architecture',
            'Privacy-Respecting by Default',
            'Deployment Flexibility (Planned)',
            'Team-Ready Foundations',
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://mesrai.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-white transition-colors font-medium"
        >
          Contact Sales
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

EnterpriseCard.displayName = 'EnterpriseCard';
