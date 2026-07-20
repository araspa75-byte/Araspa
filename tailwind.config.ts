import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  plugins: [],
};
export default config;
