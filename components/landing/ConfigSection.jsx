/**
 * ConfigSection Component
 * Shows VS Code Extension and GitHub App install options
 * Supports both light and dark themes
 */

import React from 'react';

const AppCard = ({ href, icon, title, subtitle, description, badge, badgeColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block p-6 rounded-2xl border border-gray-200 dark:border-[#27272A] bg-white dark:bg-[#0B0C0E] hover:border-orange-400/50 dark:hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 no-underline"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-[#1A1A1A] group-hover:bg-orange-500/10 transition-colors">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white m-0">{title}</h3>
          {badge && (
            <span
              className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full tracking-wide"
              style={{
                background: badgeColor === 'green'
                  ? 'rgba(34,197,94,0.15)'
                  : 'rgba(255,107,53,0.15)',
                color: badgeColor === 'green' ? '#22C55E' : '#FF6B35',
                border: `1px solid ${badgeColor === 'green' ? 'rgba(34,197,94,0.3)' : 'rgba(255,107,53,0.3)'}`,
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-3 m-0">{subtitle}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed m-0">{description}</p>
      </div>
    </div>
    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-500 group-hover:text-orange-400 transition-colors">
      <span>Install now</span>
      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </a>
);

export const ConfigSection = () => {
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
              Install Mesrai where you work — in your IDE or on GitHub. Get AI-powered code reviews in real-time as you code, and automatic reviews on every pull request.
            </p>
            <ul className="space-y-3">
              {[
                'Real-time inline suggestions in VS Code',
                'Automatic PR reviews on GitHub',
                'One-click fixes for security & performance issues',
                'Works with your existing workflow — zero config',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* App cards */}
          <div className="flex flex-col gap-4">
            <AppCard
              href="https://marketplace.visualstudio.com/items?itemName=MesraiDev.mesrai-vscode"
              title="VS Code Extension"
              subtitle="Visual Studio Code Marketplace"
              description="Get AI-powered code review directly in your editor. Inline suggestions, quick fixes, and security scanning — all in real-time as you type."
              badge="New"
              badgeColor="orange"
              icon={
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.583 2.214L12.02 7.018 7.47 3.819 3.825 5.476v13.048l3.645 1.657 4.55-3.2 5.563 4.805 2.592-1.24V3.454l-2.592-1.24zM7.47 14.98l-1.645-.95V9.97l1.645-.95 3.12 2.98-3.12 2.98zm10.113 1.6l-1.645.95-3.12-2.98 3.12-2.98 1.645.95v4.06z"/>
                </svg>
              }
            />
            <AppCard
              href="https://github.com/apps/mesraipilot"
              title="GitHub App"
              subtitle="GitHub Marketplace"
              description="Automatic code reviews on every pull request. Mesrai analyzes your changes, posts inline comments, and suggests fixes — all in under 15 seconds."
              badge="Available"
              badgeColor="green"
              icon={
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ConfigSection.displayName = 'ConfigSection';
