const theme = {
  fonts: {
    families: {
      abril: `'Abril Fatface', sans-serif`,
      montserrat: `'Montserrat', sans-serif`,
      sans: `'Open Sans', sans-serif`,
      roboto: `'Roboto', sans-serif`,
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
  },
  colors: {
    secondary: '#898f9f',
    mainBg: '#f6f7fb',
    mainBlack: '#242A37',
    mainWhite: '#ffffff',
    placeholder: '#a6abb9',
    error: 'red',
    mainOrange: '#FF6B08',
    iconActiveBg: '#f5f7fa',
    darkGray: '#6D7A8D'
  },
  borders: {
    input: '1px solid #a6abb9',
    button: '1px solid #242A37',
    transparent: '1px solid transparent',
  },
  shadows: {
    input: 'inset 0px 1px 2px rgba(29, 29, 27, 0.15)',
    header: '0px 2px 3px rgba(9, 30, 63, 0.1)',
  },
};

export default theme;
