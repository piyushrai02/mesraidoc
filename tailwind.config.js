/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.jsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#101820',
        accent: '#007AFF',
        background: {
          light: '#FAFAFA',
          dark: '#0B0C0E',
        },
        mesrai: {
          bg: '#020617', // Slate 950 for deep background
          primary: '#6366f1', // Indigo 500
          secondary: '#ec4899', // Pink 500
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#007AFF',
              '&:hover': {
                color: '#0051D5',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}
