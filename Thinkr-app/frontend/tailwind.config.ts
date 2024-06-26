import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ownWhite: "#FFFFFF",
      ownCream: "#E5E5E5",
      ownLight: "#d4d4d4",
      ownBlack: "#2D2D2D",
      ownBlue: "#093545",
      ownDarkBlue: "#262C30",
      ownLightBlue: "#224957",
      ownLighterBlue: "#295568",
      ownGrey: "#888888",
      ownGreen: "#20DF7F",
      ownTransparent: "#00000000",
      ownRed: "#61210f",
    },
  },
  plugins: [],
};
export default config;
