module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'pastel-blue': '#add8e6',
        'eggshell-white': '#c7c7c7',
        'grey': '#6c7a89',
      },
      textColor: {
        'pastel-blue': '#add8e6',
        'eggshell-white': '#c7c7c7',
        'grey-blue': '#6c7a89',
        'grey': '#6c7a89',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
