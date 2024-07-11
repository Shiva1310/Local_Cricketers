/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'custom-linear': 'linear-gradient(to bottom, #034264, #329EFD, #B7E6F6)',
      },
      colors: {
        'dark-blue': '034264',
        'light-blue': '329EFD',
        'sky-blue': 'B7E6F6',
      },
    },
  },
  plugins: [],
};
