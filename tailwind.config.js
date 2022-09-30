module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primaryVeryDark: '#240D57',
      primaryDark: '#501FC1',
      primaryMid: '#8456ec',
      primaryLight: '#e87bf8',
      secondaryPurpleDark: '#ccb6ff',
      secondaryPurpleMid: '#ede5ff',
      secondaryPurpleLight: '#f6f2ff',
      alertPink: '#ffd7e0',
      alertRed: '#e61445',
      alertLightGreen: '#d3ffe2',
      alertDarkGreen: '#00805e',
      darkGrey: '#4f4f4f',
      midGrey: '#828282',
      lightGrey: '#bdbdbd',
      veryLightGrey: '#e0e0e0',
      transparent: 'rgba(0,0,0,0)',
      white: '#ffffff',
      mainBack: '#fbfaff'
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
