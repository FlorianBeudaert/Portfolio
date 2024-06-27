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
            'secondary': '#323849',
            'base-100': '#f7fafc',
            'base-200': '#edf2f7',
            'base-300': '#e2e8f0',
          },
          'dark': {
            'primary': '#a15cfa',
            'secondary': '#e6e5e5',
            'base-100': '#1a202c',
            'base-200': '#2d3748',
            'base-300': '#4a5568',
          },
        }
      ]
  },
}