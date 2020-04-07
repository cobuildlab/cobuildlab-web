import React from 'react';
import styled from 'styled-components';
import { Container } from 'bloomer';
import H2 from '../Typography/H2';
import background from '../../../resources/2020/home/background.svg';


const Wrapper = styled.div`
  position: relative;
`;

const Titlte = styled(H2)`
  text-align: center;
  margin-bottom: 2em;
`;

const OverlayBackground = () => (
  <div className="overlay_background">
    <img src={background} alt="b" />
  </div>
);

const CustomerSuccessStories = () => {


  return (
    <Wrapper>
      <OverlayBackground />
      <Container isFluid className="container-full-width">
        <Titlte>Customer Success Stories</Titlte>
      </Container>
    </Wrapper>
  );
};

export default CustomerSuccessStories;
