import React from 'react';
import { Container } from 'bloomer';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Paragraph from '../Typography/Paragraph';
import { TextOrange } from '../Typography/TextHelpers';

const Title = styled(H1)`
  text-align: center;
  margin-bottom: 0.2em;
`;

const Text = styled(Paragraph)`
  line-height: 1.5;
  color: #90a2ad;
  text-align: center;
`;

const PricingHero = () => (
  <Container>
    <Title>
      Budget <TextOrange>Builder</TextOrange>
    </Title>
    <Text>
      We partner with new and early-stage entrepreneurs and industry experts to transforms ideas
      into Web and Mobile Software Products. Since day one, our technique is focused on early
      results and transparent communication
    </Text>
  </Container>
);

export default PricingHero;
