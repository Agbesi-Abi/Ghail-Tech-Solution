/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#ff8c5a',
          500: '#FF6B35',
          600: '#e55a2b',
        },
        blue: {
          500: '#1B6CA8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        navy: {
          900: '#0C1B33',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 1s ease-out 0.2s forwards',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        'sm': '4px',
      },
    },
  },
  plugins: [],
};