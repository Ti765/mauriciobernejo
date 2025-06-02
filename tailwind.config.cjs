/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing colors
        'glip-deep-blue': '#0A0F5E',
        'sidebar-bg': '#F3F4F6', // This will likely be overridden or removed if using CSS vars
        'cta-bg': '#000000',
        'cta-text': '#FFFFFF',

        // New dark theme colors
        darkBg:      "#222326",
        darkSidebar: "#141414",
        darkCard:    "#2A2A2A",
        darkBorder:  "#2F2F2F",
        darkText:    "#E5E5E5",
        darkText2:   "#9CA3AF",
        accent:      "#4F7FFF",
        accentHover: "#6F8FFF",
      },
    },
  },
  plugins: [],
};