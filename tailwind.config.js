/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        athenia: {
          50: '#E6EEF4',
          100: '#D2DFEB',
          200: '#7D98B2',
          300: '#406683',
          400: '#1B2A41',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        slideInfinite: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-infinite': 'slideInfinite 40s linear infinite',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
      },
      boxShadow: {
        subtle: '0 2px 12px rgba(0,0,0,0.05)',
      },
      spacing: {
        'hero-padding': '7rem',
        'section-gap': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
