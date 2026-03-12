/**
 * StepCard Component
 * Numbered card with icon, title, and description
 * Supports both light and dark themes
 */

import React from 'react';

export const StepCard = ({ number, icon, title, description }) => {
  return (
    <div className="relative p-6 rounded-xl bg-white dark:bg-[#141517] border border-gray-200 dark:border-[#27272A] hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-orange-500/5">
      {/* Step number */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
        <span className="text-sm font-bold text-white">{number}</span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

StepCard.displayName = 'StepCard';
