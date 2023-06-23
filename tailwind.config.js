/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};

// // tailwind.config.js
// const plugin = require("tailwindcss/plugin");

// module.exports = {
//   // ...
//   plugins: [
//     // ... some plugins,
//     plugin(function ({ addVariant }) {
//       addVariant("active", ["&:active", "&.router-link-active"]);
//     }),
//   ],
// };
