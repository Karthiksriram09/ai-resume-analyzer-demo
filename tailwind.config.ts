
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgd: "#0b0f1a"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.25)"
      }
    },
  },
  plugins: [],
};
export default config;
