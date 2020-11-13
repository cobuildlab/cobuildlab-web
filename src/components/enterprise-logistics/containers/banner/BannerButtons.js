import React from 'react';
import styled from 'styled-components';
import ButtonSmoothScrolling from '../../../2020/Button/ButtonSmoothScrolling';

const Container = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  margin-right: 5px;
`;

const BannerButtons = () => (
  <Container>
    <ButtonContainer>
      <ButtonSmoothScrolling href="#contact-us-anchor">Contact Us for FREE</ButtonSmoothScrolling>
    </ButtonContainer>
  </Container>
);

export default BannerButtons;
