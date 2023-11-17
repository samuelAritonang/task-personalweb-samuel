/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
