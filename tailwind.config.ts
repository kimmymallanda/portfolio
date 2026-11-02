import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.ts'],
  theme: {
    extend: {
      colors: {
        paper: '#f3efe7',
        ink: '#14130f',
        stone: '#5f5a50',
        line: '#d9d2c3',
        brass: '#8f6428',
        coral: '#c8402b',
        lagoon: '#1f6f6b',
        sun: '#f2b632',
        ultra: '#3c58a8',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
