/**
 * Professional Navbar Extra Content Component
 * Supports both light and dark themes
 *
 * Provides navigation links, GitHub stars, Install CTA, and theme toggle
 */

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const NavLink = ({ href, children, external = false }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
  >
    {children}
  </a>
);

const NavDropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to allow moving to dropdown
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2">
        {label}
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 pt-2 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-56 py-2 bg-white dark:bg-[#141517] border border-gray-200 dark:border-[#27272A] rounded-xl shadow-xl">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1A1A1A] transition-colors"
                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.icon && (
                  <span className="flex-shrink-0 w-5 h-5 text-orange-500">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavIconLink = ({ href, label, icon }) => (
  <div className="relative group">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors bg-gray-100 dark:bg-[#1A1A1A] hover:bg-gray-200 dark:hover:bg-[#252525] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      aria-label={label}
    >
      {icon}
    </a>
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50 shadow-lg">
      {label}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
    </div>
  </div>
);

const GitHubStars = () => (
  <a
    href="https://github.com/mesraiofficial"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-[#1A1A1A] hover:bg-gray-200 dark:hover:bg-[#252525] border border-gray-200 dark:border-[#27272A] rounded-lg transition-colors"
  >
    <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
    </svg>
    <span className="text-sm font-medium text-gray-900 dark:text-white">1.4k</span>
    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  </a>
);

const InstallButton = () => (
  <a
    href="https://github.com/apps/mesraipilot"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:inline-flex items-center gap-2 text-sm font-semibold tracking-wide rounded-xl transition-all duration-200 no-underline"
    style={{
      padding: '8px 20px',
      backgroundColor: '#FF6B35',
      color: '#ffffff',
      border: '1px solid #FF6B35',
      boxShadow: '0 2px 8px rgba(255,107,53,0.2)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#C2400A';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,107,53,0.3)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = '#FF6B35';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,107,53,0.2)';
    }}
  >
    Install Mesrai
    <svg className="w-4 h-4" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors bg-gray-100 dark:bg-[#1A1A1A] hover:bg-gray-200 dark:hover:bg-[#252525] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export const NavbarExtra = () => {
  return (
    <div className="flex items-center gap-6">
      {/* Navigation links - hidden on mobile */}
      <nav className="hidden lg:flex items-center gap-6">
        <NavLink href="https://mesrai.com" external>
          Product
        </NavLink>
        <NavLink href="/guides/quickstart">
          Quick Setup
        </NavLink>
        <NavLink href="/guides/pricing">
          Pricing
        </NavLink>
      </nav>

      {/* App links - icon only with tooltips */}
      <div className="hidden md:flex items-center gap-1.5">
        <NavIconLink
          href="https://marketplace.visualstudio.com/items?itemName=MesraiDev.mesrai-vscode"
          label="Get VS Code Extension"
          icon={
            <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
              <path d="M74.616 0.34L96.226 10.975c2.26 1.093 3.699 3.39 3.699 5.925v66.2c0 2.535-1.44 4.832-3.699 5.925L74.616 99.66a6.226 6.226 0 01-7.108-1.1L28.127 63.04 12.193 74.93a4.163 4.163 0 01-5.318-.261L1.222 69.4a4.168 4.168 0 01-.003-6.167L15.86 50 1.22 36.767a4.168 4.168 0 01.003-6.167l5.653-5.269a4.163 4.163 0 015.318-.261L28.127 36.96 67.508 1.44a6.226 6.226 0 017.108-1.1z" fill="#007ACC"/>
              <path d="M96.226 89.025c2.26-1.093 3.699-3.39 3.699-5.925V16.9c0-2.535-1.44-4.832-3.699-5.925L74.616.34a6.226 6.226 0 00-7.108 1.1L28.127 36.96 12.193 25.07a4.163 4.163 0 00-5.318.261L1.222 30.6a4.168 4.168 0 00-.003 6.167L15.86 50 1.22 63.233a4.168 4.168 0 00.003 6.167l5.653 5.269a4.163 4.163 0 005.318.261L28.127 63.04l39.381 35.52a6.226 6.226 0 007.108 1.1l21.61-10.635z" fill="#0065A9"/>
              <path d="M74.616 99.66a6.226 6.226 0 01-7.108-1.1L28.127 63.04 12.193 74.93a4.163 4.163 0 01-5.318-.261L1.222 69.4a4.168 4.168 0 01-.003-6.167L15.86 50 1.22 36.767a4.168 4.168 0 01.003-6.167l5.653-5.269a4.163 4.163 0 015.318-.261L28.127 36.96 67.508 1.44a6.226 6.226 0 017.108 1.1" fill="#007ACC"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M75.024 27.47L45.178 50l29.846 22.53V27.47z" fill="#fff" fillOpacity=".4"/>
            </svg>
          }
        />
        <NavIconLink
          href="https://github.com/apps/mesraipilot"
          label="Install GitHub App"
          icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
          }
        />
      </div>

      {/* Theme toggle */}
      <ThemeToggle />
    </div>
  );
};

NavbarExtra.displayName = 'NavbarExtra';
