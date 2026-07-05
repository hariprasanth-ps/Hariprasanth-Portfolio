/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1620',
          light: '#101B22',
        },
        paper: {
          DEFAULT: '#F5F7F7',
          dark: '#0B1116',
        },
        teal: {
          DEFAULT: '#12897F',
          dim: 'rgba(18,137,127,0.12)',
        },
        amber: {
          DEFAULT: '#C2820D',
          dim: 'rgba(194,130,13,0.14)',
        },
        muted: '#5C6E77',
        line: 'rgba(16,27,34,0.12)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        'pulse-soft': { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
