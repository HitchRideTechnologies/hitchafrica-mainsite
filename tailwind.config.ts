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
        primary: "#370D66",
        secondary: "#03464A",
        dark: "#001E1D",
        purple: "#370D66",
        red: "#CB1F52",
        green: "#0A8800",
        pitch: "#029099",
      },
      backgroundSize: {
        half: "50% auto",
        "16": "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
