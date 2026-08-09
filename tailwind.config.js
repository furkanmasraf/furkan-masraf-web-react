/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080C14',
          card: '#0F1623',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        brand: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(16, 185, 129, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
