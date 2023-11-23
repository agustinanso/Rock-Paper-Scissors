/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        papel: "url('icons/icon-paper.svg')",
        roca: "url('icons/icon-rock.svg')",
        tijera: "url('icons/icon-scissors.svg')",
      },
      backgroundColor: {
        papeles: "#5671f5",
        rocas: "#dd405d",
        tijeras: "#eca922",
      },
      textColor: {
        darkText: "#3b4363",
        scoreText: "#2a46c0",
      },
    },
  },
  plugins: [],
};
