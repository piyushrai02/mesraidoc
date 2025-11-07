/**
 * Mesrai Logo Constants
 * Centralized SVG configuration for consistent branding across the app.
 * Used by the <Logo /> component for both light and dark themes.
 */

// SVG viewBox dimensions
export const LOGO_VIEWBOX = {
  full: "0 0 280 65",
  iconOnly: "0 0 64 64",
};

// Default dimensions
export const LOGO_DIMENSIONS = {
  full: { width: 280, height: 65 },
  icon: { size: 64 },
};

// Circle base (background shape)
export const LOGO_CIRCLE = {
  cx: 32,
  cy: 32,
  r: 25,
};

// Main organic icon path (the “leaf-like” Mesrai shape)
export const LOGO_ICON_PATH = `M -12 -10
  C -12 -10, -8 -6, -8 0
  C -8 6, -12 10, -12 10
  C -12 10, -4 6, 0 0
  C 4 6, 12 10, 12 10
  C 12 10, 8 6, 8 0
  C 8 -6, 12 -10, 12 -10
  C 12 -10, 4 -6, 0 0
  C -4 -6, -12 -10, -12 -10 Z`;

// Logo text
export const LOGO_TEXT = {
  content: "Mesrai",
  x: 68,
  y: 44,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  fontSize: "36",
  fontWeight: "700",
  letterSpacing: "0.5",
};

// Brand colors
export const LOGO_COLORS = {
  light: {
    circle: "#0A0A0A", // black circle for light theme
    icon: "#FFFFFF",   // white leaf icon for contrast
    text: "#1F2937",   // dark text for light theme
    iconOpacity: 1,
  },
  dark: {
    circle: "#FFFFFF", // white circle for dark theme
    icon: "#0A0A0A",   // black leaf icon
    text: "#FFFFFF",   // white text for dark theme
    iconOpacity: 1,
  },
};

// Stroke styling for better visibility (optional)
export const LOGO_ICON_STROKE = {
  width: 2,
  color: "#000000",
  opacity: 0.8,
};

// CSS class names (for scoped styling)
export const LOGO_CLASSES = {
  circle: "logo-circle",
  icon: "logo-icon",
  text: "logo-text",
  iconCircle: "logo-icon-circle",
  iconPath: "logo-icon-path",
};

// Injected CSS (theme-aware styles)
export const LOGO_DARK_MODE_CSS = `
  /* Light theme (default) */
  .${LOGO_CLASSES.circle},
  .${LOGO_CLASSES.iconCircle} {
    fill: ${LOGO_COLORS.light.circle} !important;
  }
  .${LOGO_CLASSES.icon},
  .${LOGO_CLASSES.iconPath} {
    fill: ${LOGO_COLORS.light.icon} !important;
  }
  .${LOGO_CLASSES.text} {
    fill: ${LOGO_COLORS.light.text} !important;
  }

  /* Dark theme */
  :root.dark .${LOGO_CLASSES.circle},
  :root.dark .${LOGO_CLASSES.iconCircle} {
    fill: ${LOGO_COLORS.dark.circle} !important;
  }
  :root.dark .${LOGO_CLASSES.icon},
  :root.dark .${LOGO_CLASSES.iconPath} {
    fill: ${LOGO_COLORS.dark.icon} !important;
  }
  :root.dark .${LOGO_CLASSES.text} {
    fill: ${LOGO_COLORS.dark.text} !important;
  }
`;

// SVG transform for centering the icon
export const LOGO_ICON_TRANSFORM = "translate(32, 32)";