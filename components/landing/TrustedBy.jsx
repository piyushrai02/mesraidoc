/**
 * TrustedBy Section Component
 * Displays company names as styled text placeholders
 * Supports both light and dark themes
 */

import React from 'react';

const companies = [
  'Open-Source',
  'Developer-First',
  'Privacy-Safe',
  'AI-Native',
  'Early-Access',
];

export const TrustedBy = () => {
  return (
    <section className="py-16 px-6 border-y border-gray-200 dark:border-[#27272A] bg-gray-50 dark:bg-[#0F0F12]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-500 uppercase mb-8">
           Built for developers who care about code quality
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <span
              key={company}
              className="text-lg md:text-xl font-semibold text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

TrustedBy.displayName = 'TrustedBy';
