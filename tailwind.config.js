module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes:
    [
      {
        'light': {
            'primary': '#a15cfa',
            'secondary': '#cccccc',
        },
        'dark': {
          'primary': '#b798ea',
          'secondary': '#515151',
        },
      }
    ]
  },
}