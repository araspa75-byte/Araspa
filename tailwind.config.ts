import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        "cream-fixed": "rgb(var(--color-cream-fixed) / <alpha-value>)",
        beige: "rgb(var(--color-beige) / <alpha-value>)",
        gold: {
          light: "rgb(var(--color-gold-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-gold) / <alpha-value>)",
          dark: "rgb(var(--color-gold-dark) / <alpha-value>)"
        },
        charcoal: {
          light: "rgb(var(--color-charcoal-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-charcoal) / <alpha-value>)",
          dark: "rgb(var(--color-charcoal-dark) / <alpha-value>)",
          fixed: "rgb(var(--color-charcoal-fixed) / <alpha-value>)"
        },
        forest: {
          light: "rgb(var(--color-forest-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-forest) / <alpha-value>)",
          dark: "rgb(var(--color-forest-dark) / <alpha-value>)"
        }
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'slow-zoom': 'slow-zoom 20s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.9', transform: 'scale(0.98)' },
        }
      },
    },
  },
  plugins: [],
};
export default config;
