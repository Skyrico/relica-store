import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ important for next-themes
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
