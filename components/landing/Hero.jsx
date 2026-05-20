/**
 * Hero Section Component
 * Landing page hero with announcement badge, gradient text heading, and CTAs
 * Consistent orange button design matching main Mesrai website
 * Supports both light and dark themes
 */

import React from 'react';

export const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-white dark:bg-[#09090B]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-orange-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Announcement badge */}
        <a
          href="/roadmap"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm hover:bg-orange-500/15 hover:border-orange-500/30 transition-all duration-300 mb-8 group no-underline"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFAF80] text-white text-xs font-bold tracking-wide uppercase">
            AI Code Review
          </span>
          <span className="text-gray-700 dark:text-gray-300 font-medium">Context-Aware AI Code Reviews</span>
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-gray-900 dark:text-white">Ship better code</span>
          <br />
          <span className="gradient-text-animated">on every PR</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          AI that <strong className="text-gray-900 dark:text-white">understands your architecture</strong>. Catch bugs, security flaws, and design issues before they reach production.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            paddingBottom: '8px',
          }}
        >
          {/* Primary CTA - Orange solid button */}
          <a
            href="https://app.mesrai.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#FF6B35',
              color: '#ffffff',
              padding: '16px 32px',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(255,107,53,0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '0.025em',
              border: 'none',
            }}
            className="group transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#C2400A';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,107,53,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#FF6B35';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,107,53,0.3)';
            }}
          >
            <span style={{ color: '#ffffff' }}>Get Started Free</span>
            <svg width="20" height="20" style={{ color: '#ffffff' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Secondary CTA - Watch Demo outline button */}
          <a
            href="https://www.youtube.com/@mesrai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: '2px solid #9CA3AF',
              padding: '16px 32px',
              borderRadius: '12px',
              backgroundColor: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '0.025em',
              boxSizing: 'border-box',
            }}
            className="group transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FF6B35';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#9CA3AF';
            }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="text-gray-900 dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-900 dark:text-white">Watch Demo</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
          {['Free forever', 'No credit card', 'GitHub · GitLab · Bitbucket'].map((text) => (
            <div key={text} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="w-5 h-5 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-[#FF6B35]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
