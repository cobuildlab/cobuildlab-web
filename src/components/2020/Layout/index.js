import React from 'react';
import PropTypes from 'prop-types';
import { Footer as FooterContainer } from 'bloomer';
import Footer from '../Footer';
import style from './css/index.module.scss';
import '../../../assets/css/2020/common.scss';
import 'bulma';

const Layout = ({ children }) => (
  <div className={style.app_wrapper}>
    {children}
    <FooterContainer className="custom-footer">
      <Footer />
    </FooterContainer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
