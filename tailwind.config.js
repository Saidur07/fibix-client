module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin"),
    require("flowbite/plugin"),
  ],
  daisyui: {
    themes: false,
  },
};
