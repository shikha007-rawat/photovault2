/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-y': {
          '0%, 50%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate3d(0, -100%, 0)',
          },
          '75%': {
            transform: 'translate3d(0, 100%, 0)',
          },
        },
        'gradient-x': {
          '0%, 50%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate3d(-100%, 0, 0)',
          },
          '75%': {
            transform: 'translate3d(100%, 0, 0)',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate3d(100%, -100%, 0)',
          },
          '50%': {
            transform: 'translate3d(-100%, 100%, 0)',
          },
          '75%': {
            transform: 'translate3d(-100%, -100%, 0)',
          },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};