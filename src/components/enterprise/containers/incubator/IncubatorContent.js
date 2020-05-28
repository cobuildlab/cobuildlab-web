import React from 'react';
import styled from 'styled-components';
import H3 from '../../../Typography/H3';
import Paragraph from '../../../Typography/Paragraph';
import { TextOrange } from '../../../Typography/TextHelpers';

const Container = styled.div`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled(H3)`
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
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const IncubatorContent = () => (
  <Container>
    <Title>
      StartUp your <TextOrange>idea</TextOrange>
    </Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Text>
  </Container>
);

export default IncubatorContent;
