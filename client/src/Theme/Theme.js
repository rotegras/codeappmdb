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
    info: 'green',
    warning: 'orange',
    danger: 'purple',
    neutral: 'black',
    transparent: 'transparent',
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
  borderRadius: {
    normal: '.25rem',
    full: '100%',
  },
  padding: {
    normal: '1rem',
    halfNormal: '.5rem',
    negative: '-1rem',
    halfNegative: '-.5rem',
    tagButtonWrapper: '.25rem .25rem',
    tagButtonInner: '.5rem 1rem',
    contentButton: '1rem',
  },
  margin: {
    normal: '1rem',
    halfNormal: '.5rem',
    negative: '-1rem',
    halfNegative: '-.5rem',
    tagButtonWrapper: '0 -1.5rem .5rem',
    tagListWrapper: '1rem -.25rem',
    contentButton: '0 .5rem',
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