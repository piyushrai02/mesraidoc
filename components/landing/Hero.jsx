/**
 * Hero Section Component
 * Landing page hero with announcement badge, gradient text heading, and CTAs
 * Supports both light and dark themes
 */

import React from 'react';

export const Hero = () => {
  return (
    <section className="relative py-12 md:py-20 px-6 overflow-hidden bg-white dark:bg-[#09090B]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-violet-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Announcement badge */}
        <a
          href="/features/architectural-analysis"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm hover:bg-violet-500/15 hover:border-violet-500/30 transition-all duration-300 mb-8 group"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold tracking-wide uppercase">
            New
          </span>
          <span className="text-gray-700 dark:text-gray-300 font-medium">Architectural Analysis v2.0 is live</span>
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-gray-900 dark:text-white">Your AI code review</span>
          <br />
          <span className="gradient-text-animated">copilot</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Mesrai analyzes your entire codebase, spots architectural issues, and provides intelligent feedback—not just pattern matching. Ship code 3x faster with AI-powered reviews.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA - Vibrant gradient button */}
          <a
            href="https://app.mesrai.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)',
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.35), 0 4px 12px rgba(219, 39, 119, 0.25)'
            }}
          >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative text-base tracking-wide">Get Started Free</span>
            <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Secondary CTA - Outline style */}
          <a
            href="/introduction/what-is-mesrai"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            <span className="text-base tracking-wide">Read Documentation</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">Free to start</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">No credit card</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">Setup in 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
