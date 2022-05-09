import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

export const theme = {
  colors: {
    orange: '#ff5500',
    darkBlue: '#002e4d',
    gray: '#808080',
    ghostWhite: '#f7f9ff',
    white: '#ffffff',
  },
  // Booststrap reference.
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  fontFamily: {
    latoRegular: "'Lato-regular', sans-serif !important",
    latoLight: "'Lato-Light', sans-serif !important",
    latoBold: "'Lato-bold', sans-serif !important",
    latoSemiBold: "'Lato SemiBold', sans-serif !important",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Theme;
