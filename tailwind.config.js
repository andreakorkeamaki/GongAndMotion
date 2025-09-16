/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A1B8C', // royal purple
          dark: '#3F0FA6',    // deep violet
          light: '#9D84BF',   // soft lavender
        },
        accent: {
          DEFAULT: '#FFCB7B', // warm gold
          light: '#FFDDA5',   // soft sunrise gold
          purple: '#3F0FA6',  // keeps gradients tied to the violet hue
        },
        background: {
          DEFAULT: '#FFF6ED', // parchment-inspired tint for readability
        },
        white: '#FFFFFF',
        black: '#0B0B0B',
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-quicksand)', 'var(--font-nunito)', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
