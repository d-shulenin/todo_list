/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
