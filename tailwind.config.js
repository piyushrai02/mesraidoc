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
        accent: {
          DEFAULT: '#E8772E',
          light: '#F0944D',
        },
        background: {
          DEFAULT: '#0B0C0E',
          card: '#141517',
          elevated: '#1A1B1E',
          light: '#FAFAFA',
          dark: '#0B0C0E',
        },
        surface: {
          DEFAULT: '#1A1A1A',
          hover: '#252525',
        },
        muted: {
          DEFAULT: '#71717A',
          light: '#A1A1AA',
        },
        border: {
          DEFAULT: '#27272A',
          light: '#3F3F46',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#E8772E',
              '&:hover': {
                color: '#F0944D',
              },
            },
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #E8772E 0%, #F0944D 50%, #D4651F 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(232, 119, 46, 0.1) 0%, rgba(232, 119, 46, 0) 100%)',
        'border-gradient': 'linear-gradient(135deg, #E8772E, #F0944D, #D4651F)',
      },
    },
  },
  plugins: [],
}
