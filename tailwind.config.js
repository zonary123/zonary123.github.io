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
        // IDE/Terminal Theme - VS Code inspired
        editor: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          active: '#37373d',
          hover: '#2a2d2e',
          border: '#3e3e42',
          fg: '#d4d4d4',
          muted: '#858585'
        },
        // Syntax highlighting colors
        syntax: {
          cyan: '#4EC9B0',
          magenta: '#C586C0',
          yellow: '#DCDCAA',
          green: '#6A9955',
          blue: '#569CD6',
          orange: '#CE9178',
          red: '#F44747'
        },
        // Legacy mappings for compatibility
        dark: {
          900: '#1e1e1e',
          800: '#252526',
          700: '#2d2d30'
        },
        primary: {
          500: '#569CD6',
          400: '#4EC9B0'
        },
        accent: {
          500: '#C586C0',
          400: '#DCDCAA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
