import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xsm: { max: "639px" },

      sm: { min: "640px", max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1024px", max: "1279px" },

      xl: { min: "1280px", max: "1535px" },

      xlg: { min: "1536px" },
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
