/**
 * Mesrai Logo Component
 *
 * Reusable SVG logo component with configurable size and styling.
 * Supports dark mode and accessibility features.
 * Uses centralized SVG constants for maintainability.
 * Includes "DOCS" suffix for documentation site branding.
 */

import React from 'react';
import {
  LOGO_VIEWBOX,
  LOGO_DIMENSIONS,
  LOGO_CIRCLE,
  LOGO_ICON_PATH,
  LOGO_TEXT,
  LOGO_COLORS,
  LOGO_CLASSES,
  LOGO_DARK_MODE_CSS,
  LOGO_ICON_TRANSFORM,
  LOGO_ICON_STROKE,
} from '@/constants/logoSvg';

/**
 * Mesrai Logo SVG Component with DOCS suffix
 * Zero external dependencies, inline SVG for optimal performance
 */
export const Logo = ({
  width = LOGO_DIMENSIONS.full.width,
  height = LOGO_DIMENSIONS.full.height,
  className = '',
  enableHover = true,
  ariaLabel = 'Mesrai Documentation Logo',
  showDocs = true,
}) => {
  const hoverClass = enableHover ? 'transition-transform hover:scale-105 duration-300 ease-out' : '';
  const combinedClassName = `${hoverClass} ${className}`.trim();

  // Adjust viewBox width to accommodate DOCS suffix
  const adjustedViewBox = showDocs ? "0 0 360 65" : LOGO_VIEWBOX.full;
  const adjustedWidth = showDocs ? width * 1.3 : width;

  return (
    <svg
      width={adjustedWidth}
      height={height}
      viewBox={adjustedViewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={combinedClassName}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <style>{LOGO_DARK_MODE_CSS}</style>
      </defs>

      <g>
        {/* Circular background with off-white */}
        <circle
          cx={LOGO_CIRCLE.cx}
          cy={LOGO_CIRCLE.cy}
          r={LOGO_CIRCLE.r}
          fill={LOGO_COLORS.light.circle}
          className={LOGO_CLASSES.circle}
        />

        {/* Dark black icon - organic curved design */}
        <g transform={LOGO_ICON_TRANSFORM}>
          <path
            d={LOGO_ICON_PATH}
            fill={LOGO_COLORS.light.icon}
            opacity={LOGO_COLORS.light.iconOpacity}
            stroke={LOGO_ICON_STROKE.color}
            strokeWidth={LOGO_ICON_STROKE.width}
            strokeOpacity={LOGO_ICON_STROKE.opacity}
            className={LOGO_CLASSES.icon}
          />
        </g>

        {/* Mesrai text */}
        <text
          x={LOGO_TEXT.x}
          y={LOGO_TEXT.y}
          fontFamily={LOGO_TEXT.fontFamily}
          fontSize={LOGO_TEXT.fontSize}
          fontWeight={LOGO_TEXT.fontWeight}
          fill={LOGO_COLORS.light.text}
          letterSpacing={LOGO_TEXT.letterSpacing}
          className={LOGO_CLASSES.text}
        >
          {LOGO_TEXT.content}
        </text>

        {/* DOCS suffix */}
        {showDocs && (
          <>
            {/* Separator line */}
            <line
              x1="200"
              y1="18"
              x2="200"
              y2="48"
              stroke="#FF6B35"
              strokeWidth="2"
              opacity="0.5"
            />
            {/* DOCS text */}
            <text
              x="216"
              y={LOGO_TEXT.y}
              fontFamily={LOGO_TEXT.fontFamily}
              fontSize="24"
              fontWeight="600"
              fill="#FF6B35"
              letterSpacing="2"
            >
              DOCS
            </text>
          </>
        )}
      </g>
    </svg>
  );
};

Logo.displayName = 'Logo';

/**
 * Logo Icon Only (without text)
 * Useful for compact spaces like mobile navigation or favicons
 */
export const LogoIcon = ({
  size = LOGO_DIMENSIONS.icon.size,
  className = '',
  enableHover = true,
  ariaLabel = 'Mesrai Icon'
}) => {
  const hoverClass = enableHover ? 'transition-transform hover:scale-105 duration-300 ease-out' : '';
  const combinedClassName = `${hoverClass} ${className}`.trim();

  return (
    <svg
      width={size}
      height={size}
      viewBox={LOGO_VIEWBOX.iconOnly}
      xmlns="http://www.w3.org/2000/svg"
      className={combinedClassName}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <style>{LOGO_DARK_MODE_CSS}</style>
      </defs>

      <g>
        {/* Circular background */}
        <circle
          cx={LOGO_CIRCLE.cx}
          cy={LOGO_CIRCLE.cy}
          r={LOGO_CIRCLE.r}
          fill={LOGO_COLORS.light.circle}
          className={LOGO_CLASSES.iconCircle}
        />

        {/* Icon only */}
        <g transform={LOGO_ICON_TRANSFORM}>
          <path
            d={LOGO_ICON_PATH}
            fill={LOGO_COLORS.light.icon}
            opacity={LOGO_COLORS.light.iconOpacity}
            stroke={LOGO_ICON_STROKE.color}
            strokeWidth={LOGO_ICON_STROKE.width}
            strokeOpacity={LOGO_ICON_STROKE.opacity}
            className={LOGO_CLASSES.iconPath}
          />
        </g>
      </g>
    </svg>
  );
};

LogoIcon.displayName = 'LogoIcon';
