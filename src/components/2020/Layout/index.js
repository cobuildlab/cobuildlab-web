import React from 'react';
import PropTypes from 'prop-types';
import { Footer as FooterContainer } from 'bloomer';
import Footer from '../Footer';
import styled from 'styled-components';
import '../../../assets/css/2020/common.scss';
import 'bulma';

const Container = styled.div`
  background-color: #f4f6fb !important;
  overflow: hidden;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Layout = ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
    <FooterContainer className="custom-footer">
      <Footer />
    </FooterContainer>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
