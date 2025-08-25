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
          DEFAULT: '#7FC7AF', // sage green
          dark: '#4F6F52',    // deep sage
          light: '#E6F2EA',   // light background
        },
        accent: {
          DEFAULT: '#E8B954', // gold accent
          purple: '#A78BFA',  // soft violet
        },
        background: {
          DEFAULT: '#FAF8F6', // cream
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-quicksand)', 'var(--font-nunito)', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
