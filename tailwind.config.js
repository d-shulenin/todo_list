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
    ".perspective-2000": {
      perspective: "2000px",
    },
  });
});

// Border utilities
const border = plugin(function ({ addUtilities }) {
  addUtilities({
    ".border-1": {
      "border-width": "1px",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "85vh": "85vh",
        18: "4.5rem",
      },
      boxShadow: {
        select: "8px 8px 12px rgba(0,0,0,0.3)",
        calendar: "12px 12px 16px rgba(0,0,0,0.3)",
        done: "5px 5px 6px 0px #ddaa8e",
        todos: "5px 5px 5px 0px #d6b47d",
        controls: "2px 2px 4px 0px #ceaa77",
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
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    rotateY,
    transformStyle,
    perspective,
    backfaceVisibility,
    border,
  ],
};
