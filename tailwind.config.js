/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-class1": "url('utils/img/classesImg/class-1.png')",
      },
    },
  },
  plugins: [],
};
