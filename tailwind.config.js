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
