module.exports = {
  important: true,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      h: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      sh: ['Taviraj', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      p: ['Glegoo', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
    },
    top: {
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%'
    },
    extend: {
      colors: {
        'gr-green-light': '#02F6B6',
        'gr-green': '#01D09A',
        'gr-green-dark': '#00A178',
        'gr-bg': '#060E0C'
      }
    }
  },
  variants: {
    backgroundColor: ['hover'],
    textColor: ['hover']
  },
  plugins: []
}
