import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.main`
  background-color: ${({ theme }) => theme.colors.ghostWhite};
`;

const Layout = ({ children }) => <Box>{children}</Box>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
