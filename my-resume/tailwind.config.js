/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F9F6F2',
        'custom-text': '#333333',
        'custom-accent': '#D96C6C',
        'custom-hover': '#C75A5A',
      },
      fontFamily: {
        'roboto-slab': ['var(--font-roboto-slab)', 'serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}