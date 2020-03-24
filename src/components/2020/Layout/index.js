import React from 'react';
import PropTypes from 'prop-types';
import { Footer as FooterContainer } from 'bloomer';
import Footer from '../Footer';
import '../../../assets/css/2020/common.scss';
import 'bulma';

const Layout = ({ children }) => (
  <div style={{ overflow: 'hidden' }}>
    {children}
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
