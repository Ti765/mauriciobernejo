/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures all relevant files in src are scanned
  ],
  theme: {
    extend: {
      // You can add custom theme extensions here if needed,
      // For example, specific colors from the image:
      colors: {
        'glip-deep-blue': '#0A0F5E', // Example, adjust as needed
        'sidebar-bg': '#F3F4F6', // Light gray for sidebar
        'cta-bg': '#000000',     // Black for Call to Action
        'cta-text': '#FFFFFF',   // White for Call to Action text
      },
      // Approximate gradient colors based on the image
      // These are for reference if you want to create custom gradients
      // but we'll try to use default Tailwind shades first.
    },
  },
  plugins: [],
};
