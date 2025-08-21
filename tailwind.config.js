/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#A8D8EA",
        pastelPink: "#FBC4C4",
        pastelBg: "#FDF6F0",
        pastelText: "#333333"
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem"
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.05)"
      }
    }
  },
  plugins: []
};
