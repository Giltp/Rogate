  // tailwind.config.ts
  import { type Config } from "tailwindcss"

  const config: Config = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          background: "#fdfcf8", // Soft ivory background
          primary: "#111111",    // Deep dark text
        },
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
          serif: ['"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [],
  }
  export default config
