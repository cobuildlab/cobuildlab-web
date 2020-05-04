import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../assets/css/2020/common.scss';
import 'bulma';
import NewsletterModal from '../NewsletterModal';
import Header from '../2020/Header/';

const Container = styled.div`
  background-color: #f4f6fb !important;
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const Sider = styled.div`
  width: 300px;
  padding-left: 20px;
  border-right: 1px solid #f0f0f0;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Layout = ({ children }) => (
  <Container>
    <HeaderContainer>
      <Header isFluid />
    </HeaderContainer>
    <NewsletterModal />
    <Wrapper>{children}</Wrapper>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
