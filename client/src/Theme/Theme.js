import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';



const theme = {
  colors: {
    white: '#e5d1c9',
    lightGray: '#c5b9a1',
    accentLight: '#819b7c',
    accentDark: '#647660',
    black: '#262212',
  },
  fonts: {
    primary: 'Montserrat',
    secondary: 'Bitter',
  },
  fontSize: {
    superbig: '6rem',
    bigger: '3rem',
    big: '1.75rem',
    medium: '1.25rem',
    normal: '1rem',
    small: '.75rem',
    smaller: '.5rem',
  },
  padding: {
    normal: '1rem',
    negative: '-1rem',
    tagButtonWrapper: '.25rem .25rem',
    tagButtonInner: '.5rem 1rem',
  },
  margin: {
    tagButtonWrapper: '0 -1.5rem .5rem',
    tagListWrapper: '1rem -.25rem',
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