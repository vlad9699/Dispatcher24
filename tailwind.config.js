module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['TTNorms', 'sans-serif']
      },
      colors: {
        main: '#5276AA',
        body: '#F6F5FB',
        fonts: '#363636'
      },
      backgroundImage: theme => ({
        'arr': "url('/img/arr.svg')"
      }),
      maxWidth: {
        'btn': '340px'
      },
      screens: {
        'mob': '440px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
};
