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
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        linen: "rgb(var(--color-linen) / <alpha-value>)",
        taupe: "rgb(var(--color-taupe) / <alpha-value>)",
        beige: "rgb(var(--color-linen) / <alpha-value>)",
        champagne: "rgb(var(--color-champagne) / <alpha-value>)",
        gold: {
          light: "rgb(var(--color-gold-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-gold) / <alpha-value>)",
          dark: "rgb(var(--color-gold-dark) / <alpha-value>)",
        },
        espresso: "rgb(var(--color-espresso) / <alpha-value>)",
        charcoal: {
          light: "rgb(var(--color-charcoal-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-charcoal) / <alpha-value>)",
          fixed: "rgb(var(--color-charcoal) / <alpha-value>)",
        },
        sage: {
          light: "rgb(var(--color-sage-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-sage) / <alpha-value>)",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Playfair Display", "serif"],
        accent: ["var(--font-serif-accent)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
        "float-subtle": "floatSubtle 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.10)" },
        },
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(41, 35, 31, 0.08)",
        "luxury-lg": "0 20px 60px -15px rgba(41, 35, 31, 0.12)",
        "luxury-gold": "0 10px 30px -5px rgba(173, 141, 91, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
