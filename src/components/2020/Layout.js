import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../enterprise/containers/footer/Footer';
import styled from 'styled-components';
import '../../assets/css/2020/common.scss';
import 'bulma/css/bulma.css';
import NewsletterModal from '../NewsletterModal';

const Container = styled.div`
  background-color: #f4f6fb !important;
  overflow: hidden;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Layout = ({ children }) => (
  <Container>
    <NewsletterModal />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
