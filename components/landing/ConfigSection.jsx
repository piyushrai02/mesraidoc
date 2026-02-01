/**
 * ConfigSection Component
 * YAML code block display with terminal-style header
 * Supports both light and dark themes
 */

import React, { useState } from 'react';

const configCode = `# mesrai.config.yaml
version: 2.0

review:
  auto_review: true
  languages:
    - javascript
    - typescript
    - python
    - go

rules:
  security: strict
  performance: moderate
  architecture: enabled

notifications:
  slack: "#code-reviews"
  email: team@company.com`;

export const ConfigSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(configCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-[#141517]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Configure once, review forever
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Customize Mesrai to match your team's coding standards. Define review rules, set up notifications, and integrate with your existing workflow.
            </p>
            <ul className="space-y-3">
              {[
                'Language-specific rules and patterns',
                'Security and performance checks',
                'Slack and email notifications',
                'CI/CD pipeline integration',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Code block */}
          <div className="relative">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-[#1A1B1E] rounded-t-lg border border-b-0 border-gray-200 dark:border-[#27272A]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">mesrai.config.yaml</span>
              <button
                onClick={handleCopy}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Copy code"
              >
                {copied ? (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Code content */}
            <pre className="p-4 bg-white dark:bg-[#0B0C0E] rounded-b-lg border border-t-0 border-gray-200 dark:border-[#27272A] overflow-x-auto">
              <code className="text-sm font-mono text-gray-700 dark:text-gray-400">
                {configCode}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

ConfigSection.displayName = 'ConfigSection';
