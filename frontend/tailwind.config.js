/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "mobile": "360px",
      // => @media (min-width: 360px) { ... }

      "tablet": "768px",
      // => @media (min-width: 768px) { ... }

      "desktop": "1024px",
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [],
}

