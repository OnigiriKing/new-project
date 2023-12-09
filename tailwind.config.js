/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-class-1": "url('utils/img/classesImg/class-1.png')",
        "bg-class-2": "url('utils/img/classesImg/class-2.png')",
        "bg-class-3": "url('utils/img/classesImg/class-3.png')",
        "bg-class-4": "url('utils/img/classesImg/class-4.png')",
        "bg-class-5": "url('utils/img/classesImg/class-5.png')",
        "bg-class-6": "url('utils/img/classesImg/class-6.png')",
      },
    },
  },
  plugins: [],
};
