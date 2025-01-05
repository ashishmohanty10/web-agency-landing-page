import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#fff",
      brand: "#1D64FF",
      "secondary-title": "#98A1A6",
      text: "#59646b",
      black: "#000",
      white: "#fff",
      green: "#00B831",
    },

    fontSize: {
      xs: "1.2rem",
      sm: "1.3rem",
      md: "1.4rem",
      lg: "1.5rem",
      xl: "1.6rem",
      "2xl": ["1.8rem", "1.1"],
      "3xl": ["2rem", "1.1"],
      "4xl": ["2.5rem", "1.1"],
      "5xl": ["3rem", "1.1"],
      "6xl": ["3.5rem", "1.1"],
      "7xl": ["4rem", "1.1"],
      "8xl": ["5rem", "1.1"],
      "9xl": ["5.5rem", "1.1"],
    },

    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
      17: "6.8rem",
      18: "7.2rem",
      19: "7.6rem",
      20: "8rem",
      "navigation-height": "var(--navigation-height)",
    },

    keyframes: {
      "infinite-scroll": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },

    animation: {
      "infinite-scroll":
        "infinite-scroll var(--animation-delay) linear infinite forwards",
    },
  },
  plugins: [],
} satisfies Config;
