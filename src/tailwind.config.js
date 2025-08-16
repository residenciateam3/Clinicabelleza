/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e67e9b",
        secondary: "#f7f7f7",
        accent: "#d6336c",
      },
      animation: {
        'pulse-color': 'pulseColor 2s infinite',
      },
      keyframes: {
        pulseColor: {
          '0%, 100%': { color: '#ffffff' },
          '50%': { color: '#ff0000' },
        }
      }
    },
  },
  plugins: [],
};
