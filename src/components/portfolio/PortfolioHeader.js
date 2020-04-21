import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'bloomer';
import styled from 'styled-components';
import PortfolioMenu from './PortfolioMenu';
import logo from '../../resources/cobuildlab.png';

const Wrapper = styled.div`
  box-shadow: 0px 1px 2px #254a6038;
  position: fixed;
  width: 100%;
  background-color: #f4f6fb;
  z-index: 100;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  @media screen and (max-width: 768px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const LogoContainer = styled(Link)`
  max-width: 229px;
  height: 49px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    max-width: 150px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PortfolioHeader = () => (
  <Wrapper>
    <Container>
      <Content>
        <LogoContainer to="/">
          <Image src={logo} alt="logo" />
        </LogoContainer>
        <MenuContainer>
          <PortfolioMenu />
        </MenuContainer>
      </Content>
    </Container>
  </Wrapper>
);

export default PortfolioHeader;
