// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
//projeto.js
import "tailwindcss/tailwind.css";
  // tailwind.config.js
  module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
    ],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {},
     plugins: [],
   }