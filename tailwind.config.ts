import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      // Ensure Tailwind's preflight and `font-sans` use Poppins
      sans: ['"Poppins"', "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
