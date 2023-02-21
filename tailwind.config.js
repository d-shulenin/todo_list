/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

// Transform style utilities
const transformStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    ".preserve-3d": {
      "transform-style": "preserve-3d",
    },
  });
});

// Backface visibility utilities
const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visibility-hidden": {
      "-webkit-backface-visibility": "hidden",
      "backface-visibility": "hidden",
    },
  });
});

// Perspective utilities
const perspective = plugin(function ({ addUtilities }) {
  addUtilities({
    ".perspective-1000": {
      perspective: "1000px",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "85vh": "85vh",
      },
      boxShadow: {
        column: "12px 12px 25px 0px rgba(0,0,0,0.5)",
        button: "3px 3px 5px 0px #ceaa77",
        wrapper:
          "30px 30px 40px 0px rgba(0, 0, 0, 0.3), -5px -5px 15px 0px rgba(255, 255, 255, 0.3)",
      },
      colors: {
        bg: "#c8b7ad",
        wr: "#efeedf",
        typo: "#5f4e35",
        btn: "#d8b06c",
        todo_wr_bg: "#f1cd90",
        done_wr_bg: "#facdae",
        todo_bg: "#f6e5cb",
        done_bg: "#f7d6c0",
      },
    },
  },
  plugins: [rotateY, transformStyle, perspective, backfaceVisibility],
};
