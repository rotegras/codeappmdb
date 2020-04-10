import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';



const theme = {
  colors0: {
    white: '#f2f2f2',
    lightGray: '#65ccb8',
    accentLight: '#57ba98',
    accentDark: '#3b945e',
    black: '#182628',
  },
  colors1: {
    white: '#f8c7cc',
    lightGray: '#81a684',
    accentLight: '#57886c',
    accentDark: '#3b945e',
    black: '#0e0f19',
  },
  colors: {
    white: '#e5d1c9',
    lightGray: '#c5b9a1',
    accentLight: '#819b7c',
    accentDark: '#647660',
    black: '#262212',
  },
  background: {
    primary: '#fff',
  },
  fonts: {
    primary: 'Montserrat',
    secondary: 'Bitter',
  },
  fontSize: {
    bigger: '3rem',
    big: '1.75rem',
    medium: '1.25rem',
    normal: '1rem',
    small: '.75rem',
    smaller: '.5rem',
  },
};


function Theme({ children }) {
  return (
    <ThemeProvider
      theme={theme}
    >
      <GlobalStyles />
      { children }
    </ThemeProvider>
  );
}


Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;