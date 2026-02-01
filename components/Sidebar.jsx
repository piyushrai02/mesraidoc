/**
 * Custom Sidebar Component for Mesrai Documentation
 *
 * Features:
 * - Section groupings with headers
 * - Icons for each menu item
 * - NEW/BETA badges
 * - Collapsible sections
 * - Active state highlighting
 * - Dark/Light theme support
 * - Smooth animations
 */

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Icon components
const Icons = {
  Home: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Book: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Setup: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Cpu: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Puzzle: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  Code: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  CreditCard: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Question: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Newspaper: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  Map: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  GitHub: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  GitLab: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Cube: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Terminal: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Webhook: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
};

// Badge component
const Badge = ({ type }) => {
  const styles = {
    NEW: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
    BETA: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  };

  return (
    <span className={`ml-auto px-1.5 py-0.5 text-[10px] font-semibold rounded ${styles[type]}`}>
      {type}
    </span>
  );
};

// Menu item component
const MenuItem = ({ href, icon: Icon, label, badge, isActive, hasChildren, isOpen, onClick, children, depth = 0 }) => {
  const router = useRouter();
  const active = isActive || router.asPath === href || router.asPath.startsWith(href + '/');

  if (hasChildren) {
    return (
      <div className="mb-0.5">
        <button
          onClick={onClick}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium
            transition-all duration-200 group
            ${active
              ? 'bg-indigo-500/10 text-indigo-400'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }
          `}
          style={{ paddingLeft: `${12 + depth * 12}px` }}
        >
          {Icon && <Icon />}
          <span className="flex-1 text-left">{label}</span>
          {badge && <Badge type={badge} />}
          <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <Icons.ChevronDown />
          </span>
        </button>
        {isOpen && (
          <div className="mt-0.5 ml-3 pl-3 border-l border-zinc-800">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium mb-0.5
        transition-all duration-200 group
        ${active
          ? 'bg-indigo-500/10 text-indigo-400 border-l-2 border-indigo-500 -ml-[2px] pl-[14px]'
          : 'text-zinc-400 hover:text-white hover:bg-white/5'
        }
      `}
      style={{ paddingLeft: depth > 0 ? `${12 + depth * 12}px` : undefined }}
    >
      {Icon && (
        <span className={`${active ? 'text-indigo-400' : 'text-zinc-500 group-hover:text-zinc-300'} transition-colors`}>
          <Icon />
        </span>
      )}
      <span className="flex-1">{label}</span>
      {badge && <Badge type={badge} />}
    </Link>
  );
};

// Section header component
const SectionHeader = ({ title }) => (
  <div className="px-3 pt-5 pb-2 first:pt-0">
    <h3 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
      {title}
    </h3>
  </div>
);

// Collapsible section component
const CollapsibleSection = ({ icon: Icon, label, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-0.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
      >
        {Icon && <Icon />}
        <span className="flex-1 text-left">{label}</span>
        <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <Icons.ChevronDown />
        </span>
      </button>
      {isOpen && (
        <div className="mt-0.5 ml-3 pl-3 border-l border-zinc-800">
          {children}
        </div>
      )}
    </div>
  );
};

// Main Sidebar component
export const Sidebar = () => {
  const router = useRouter();
  const [openSections, setOpenSections] = useState({
    introduction: true,
    features: true,
    integrations: true,
    'api-reference': true,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="sidebar-custom fixed left-0 top-16 bottom-0 w-64 bg-zinc-950/80 dark:bg-zinc-950/80 backdrop-blur-xl border-r border-zinc-800/50 dark:border-zinc-800/50 overflow-y-auto z-40">
      <nav className="p-4">
        {/* Getting Started */}
        <SectionHeader title="Getting Started" />

        <MenuItem
          href="/introduction/what-is-mesrai"
          icon={Icons.Book}
          label="Introduction"
        />
        <MenuItem
          href="/setup/installation"
          icon={Icons.Setup}
          label="Quick Start"
        />

        {/* Core Concepts */}
        <SectionHeader title="Core Concepts" />

        <CollapsibleSection icon={Icons.Sparkles} label="Features" defaultOpen>
          <MenuItem href="/features/ai-review-engine" label="AI Review Engine" depth={1} />
          <MenuItem href="/features/context-awareness" label="Context Awareness" depth={1} />
          <MenuItem href="/features/architectural-analysis" label="Architectural Analysis" badge="NEW" depth={1} />
          <MenuItem href="/features/privacy-security" icon={Icons.Shield} label="Privacy & Security" depth={1} />
        </CollapsibleSection>

        <MenuItem
          href="/ai-review/overview"
          icon={Icons.Cpu}
          label="AI Review"
        />
        <MenuItem
          href="/performance/overview"
          icon={Icons.Zap}
          label="Performance"
        />

        {/* Integrations */}
        <SectionHeader title="Integrations" />

        <CollapsibleSection icon={Icons.Puzzle} label="Integrations" defaultOpen>
          <MenuItem href="/integrations/github" icon={Icons.GitHub} label="GitHub" depth={1} />
          <MenuItem href="/integrations/gitlab" icon={Icons.GitLab} label="GitLab" depth={1} />
          <MenuItem href="/integrations/bitbucket" icon={Icons.Cube} label="Bitbucket" badge="BETA" depth={1} />
          <MenuItem href="/integrations/cicd-pipelines" icon={Icons.Terminal} label="CI/CD Pipelines" depth={1} />
        </CollapsibleSection>

        {/* API Reference */}
        <SectionHeader title="API Reference" />

        <CollapsibleSection icon={Icons.Code} label="API Reference" defaultOpen>
          <MenuItem href="/api-reference/overview" label="Overview" depth={1} />
          <MenuItem href="/api-reference/auth-api" label="Authentication" depth={1} />
          <MenuItem href="/api-reference/reviews" label="Reviews" depth={1} />
          <MenuItem href="/api-reference/webhooks" icon={Icons.Webhook} label="Webhooks" depth={1} />
          <MenuItem href="/api-reference/sdks" label="SDKs" depth={1} />
        </CollapsibleSection>

        {/* Resources */}
        <SectionHeader title="Resources" />

        <MenuItem
          href="/billing/subscription-model"
          icon={Icons.CreditCard}
          label="Billing"
        />
        <MenuItem
          href="/faq"
          icon={Icons.Question}
          label="FAQ"
        />
        <MenuItem
          href="/blog/superhuman-context"
          icon={Icons.Newspaper}
          label="Blog"
        />
        <MenuItem
          href="/roadmap"
          icon={Icons.Map}
          label="Roadmap"
        />
        <MenuItem
          href="/changelog"
          icon={Icons.Clock}
          label="Changelog"
        />
      </nav>

      {/* Bottom section - Version info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>Mesrai Docs</span>
          <span className="px-2 py-0.5 bg-zinc-800 rounded text-zinc-400">v2.0.0</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
