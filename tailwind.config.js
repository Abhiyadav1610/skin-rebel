module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kalam: ["Kalam", "cursive"],
        handwriting: ["Kalam", "cursive"],
        "darker-grotesque": ["Darker Grotesque", "sans-serif"],
        folklore: ["Folklore", "sans-serif"],
        "ben-brown": ["Ben Brown", "cursive"],
      },
      colors: {
        "rebel-orange": "#FF4930",
        "rebel-pink": "#E91E63",
        "rebel-yellow": "#FFC107",
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
