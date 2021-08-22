module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      'from-blue-500',
      'from-purple-500',
      'from-indigo-500',
      'to-blue-600',
      'to-purple-600',
      'to-indigo-600',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
