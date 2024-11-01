/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        col1: "var(--mycol-1)",
        col2: "var(--mycol-2)",
        col3: "var(--mycol-3)",
        col4: "var(--mycol-4)",
        col5: "var(--mycol-5)",
        col6: "var(--mycol-6)",
      },
      fontFamily:{
         rubiq: '"Rubik", sans-serif'
      },
      cursor: {
        'fancy': 'url(D:/my pc/my code/Web practise/Prtfolio/src/image/target.png), pointer',
      }
    },
  },
  plugins: [],
};
