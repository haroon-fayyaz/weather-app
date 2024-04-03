/** @type {import('tailwindcss').Config} */
const _object = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {}
  },
  variants: {
    extends: {
      backgroundColor: ["hover", "focus"]
    }
  },
  plugins: []
}

export default _object
