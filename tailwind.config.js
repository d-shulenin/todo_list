/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "3px 3px 5px 0px #ceaa77",
        wrapper:
          "30px 30px 40px 0px rgba(0, 0, 0, 0.3), -5px -5px 15px 0px rgba(255, 255, 255, 0.3)",
      },
    },
    colors: {
      bg: "#c8b7ad",
      wr: "#efeedf",
      typo: "#5f4e35",
      btn: "#d8b06c",
      todo_wr_bg: "#f1cd90",
      done_wr_bg: "#facdae",
      todo_bg: "#facdae",
      done_bg: "#f0cdb3",
    },
  },
  plugins: [],
};
