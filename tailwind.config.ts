import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-dark': '#131315',
        'brand-gold': '#F2BD35',
        'brand-gold-light': '#FFDE3B',
        'brand-gold-bright': '#FECC30',
        'brand-neutral': '#857E65',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
