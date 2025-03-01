import { Great_Vibes } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // helvetica: ["Helvetica", "Arial", "sans-serif"], // Use Helvetica with fallbacks
        helvetica : ["Helvetica","Arial"],
        Great_Vibes : ["Great_Vibes"]
      },
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
