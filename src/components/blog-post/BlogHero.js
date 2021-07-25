import React from 'react';
import Header from '../header/Header';
import { Hero, HeroHeader, HeroBody, Container, Columns, Column } from 'bloomer';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Paragraph from '../Typography/Paragraph';

const Title = styled(H1)`
  font-size: 70px;
  padding-top: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    padding-top: 1rem;
  }
`;

const Text = styled(Paragraph)`
  padding-top: 1rem;
`;

const BlogHero = () => (
  <Hero isSize="small">
    <HeroHeader>
      <Header />
    </HeroHeader>
    <HeroBody>
      <Container hasTextAlign="centered">
        <Columns isCentered>
          <Column>
            <Title>The Blog for Software Solutions</Title>
            <Text>
              Tips, news, tools for owners and IT managers. <br /> Unique content designed for
              businesses that are ready to overcome all productivity, logistics, and supply chain
              challenges.
            </Text>
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
);

export default BlogHero;
