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
          bg: 'var(--editor-bg)',
          sidebar: 'var(--editor-sidebar)',
          active: 'var(--editor-active)',
          hover: 'var(--editor-hover)',
          border: 'var(--editor-border)',
          fg: 'var(--editor-fg)',
          muted: 'var(--editor-muted)',
          line: 'var(--editor-line)'
        },
        // Syntax highlighting colors
        syntax: {
          cyan: '#4EC9B0',
          magenta: '#C586C0',
          yellow: '#DCDCAA',
          green: '#6A9955',
          blue: '#569CD6',
          orange: '#CE9178',
          red: '#F44747',
          purple: '#B267E6'
        },
        // Section accent colors
        accent: {
          about: 'var(--accent-about, #569CD6)',
          formation: 'var(--accent-formation, #4EC9B0)',
          experience: 'var(--accent-experience, #C586C0)',
          skills: 'var(--accent-skills, #DCDCAA)',
          projects: 'var(--accent-projects, #CE9178)',
          certificates: 'var(--accent-certificates, #B267E6)',
          contact: 'var(--accent-contact, #4EC9B0)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
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
