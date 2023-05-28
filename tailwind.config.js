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
        'dark-grey': '#212427',
        'floral-white': '#FFF9F2',
        violet: '#350F59',
        marian: '#3e3b81',
        true: '#4963a5',
        'silver-lake': '#5c8bc5',
        argentinian: '#7ab4e3',
        uranium: '#A0DDFF',
        mint: '#F0F7F4',
      },
      fontFamily: {
        sans: ['var(--font-source)'],
        ibm: ['var(--font-ibm)'],
      },
    },
  },
  plugins: [],
};
