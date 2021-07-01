import React from 'react';
import styled from 'styled-components';
import H3 from '../../../Typography/H3';
import Paragraph from '../../../Typography/Paragraph';
import { TextOrange } from '../../../2021/text/TextHelpers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled(H3)`
  color: #fff;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 35px;
    width: 100%;
  }
`;

const Text = styled(Paragraph)`
  text-align: right;
  margin-top: 1em;
  line-height: 1.5;
  color: #fff;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const IncubatorContent = () => (
  <Container>
    <Title>
      StartUp your <TextOrange>idea</TextOrange>
    </Title>
    <Text>Dedicate a team to think, design and build your Startup Idea.</Text>
  </Container>
);

export default IncubatorContent;
