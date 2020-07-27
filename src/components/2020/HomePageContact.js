import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import H2 from '../Typography/H2';
import Paragraph from '../Typography/Paragraph';
import { TextOrange } from '../Typography/TextHelpers';
import Image from './Image';
import img from '../../resources/2020/home/coubuild-v.svg';

const SubTitle = styled(Paragraph)`
  font-size: 20px;
  margin-bottom: 1em;
  margin-top: 0.7em;
`;

const Description = styled(Paragraph)`
  font-size: 14px;
  & > span {
    display: block;
    margin-bottom: 0.5em;
  }
`;

const LeftColumn = styled(Column)`
  order: 2;
`;

const RightColumn = styled(Column)`
  order: 1;
`;

const HomePageContact = () => (
  <Container id="contact">
    <Columns isCentered>
      <LeftColumn isSize={{ mobile: 12, desktop: 6 }}>
        <H2>Let’s Talk!</H2>
        <SubTitle>Your business takes off right now</SubTitle>
        <Description>
          <TextOrange>Where are we? </TextOrange>
          66 West Flagler St, Suite 900, Miami, Florida 33130 +1 (786) 991-3467
          contact@cobuildlab.com
        </Description>
        <ContactForm landingName="home-page" />
      </LeftColumn>
      <RightColumn isSize={{ mobile: 12, desktop: 6 }}>
        <Image src={img} alt="contact form" />
      </RightColumn>
    </Columns>
  </Container>
);

export default HomePageContact;
