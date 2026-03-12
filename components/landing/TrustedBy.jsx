/**
 * TrustedBy Section Component
 * Displays key stats and value propositions
 * Supports both light and dark themes
 */

import React from 'react';

const stats = [
  { value: '15s', label: 'Average review time' },
  { value: '20+', label: 'Languages supported' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '0', label: 'Code stored' },
];

export const TrustedBy = () => {
  return (
    <section className="py-16 px-6 border-y border-gray-200 dark:border-[#27272A] bg-gray-50 dark:bg-[#0F0F12]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-500 uppercase mb-10">
          Built for developers who care about code quality
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                <span className="gradient-text">{stat.value}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TrustedBy.displayName = 'TrustedBy';
