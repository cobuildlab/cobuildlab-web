import React from 'react';
import Header from '../2020/header/Header';
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
            <Title>The Blog for Software Entrepreneurs</Title>
            <Text>
              Ideas, advice, value and above all, entrepreneurship. <br /> Unique content made as a
              guide for entrepreneurs that intend to offer new opportunities in the Startup World.
            </Text>
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
);

export default BlogHero;
