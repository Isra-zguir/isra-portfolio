/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f6f5f2",
        ink: "#0b0f14",
        slate: "#3b4555",
        mist: "#e8ecef",
        accent: "#0ea5a8",
        sun: "#f59e0b"
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Sora", "sans-serif"],
      },
      boxShadow: {
        soft: "0 30px 80px -40px rgba(15, 23, 42, 0.35)",
        card: "0 20px 50px -35px rgba(15, 23, 42, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
