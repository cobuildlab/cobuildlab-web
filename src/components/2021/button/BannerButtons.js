import React from 'react';
import styled from 'styled-components';
import { SmoothScrollingButton } from '../../2021/button/SmoothScrollingButton';

const Container = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  margin-right: 5px;
`;

const BannerButtons = () => (
  <Container>
    <ButtonContainer>
      <SmoothScrollingButton href="#contact-us-anchor">Contact Us for FREE</SmoothScrollingButton>
    </ButtonContainer>
  </Container>
);

export default BannerButtons;
