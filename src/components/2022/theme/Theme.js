import React from 'react';
import { ThemeProvider } from 'styled-components';
import { palette } from './palette';
import { useThemeMode } from './hooks';
import { GlobalStyles } from './GlobalStyles';
import PropTypes from 'prop-types';

export const theme = {
  colors: {
    ...palette.cobuildlab2022.light,
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

const Theme = ({ children }) => {
  const { mode } = useThemeMode();
  return (
    <ThemeProvider theme={{ ...theme, colors: palette.cobuildlab2022[mode] }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Theme;
