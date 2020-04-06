import React from 'react';
import {
  Container,
  Columns,
  Column,
  Section,
} from 'bloomer';

import styled from 'styled-components';
import H4 from '../../../Typography/H4';
import Paragraph from '../../../Typography/Paragraph';

// import Img from "gatsby-image"
import Image from '../../components/image';
import contactImage from '../../../../assets/images/contact/4xContact.jpg';
import ContactForm from '../../../2020/ContactForm';
import AnimationBackground from './ContactAnimation';
// background animation required this

const P = styled(Paragraph)`
  margin-top: .5em;
`;

const ContactEnterprise = () => (
  <Section id="contact">
    <AnimationBackground />
    <Container>
      <Columns>
        <Column isHidden="mobile" isSize={4}>
          < Image Path={contactImage} Class="logo-img" />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }} isOffset={{ mobile: 0, desktop: 2 }}>
          <H4> Send us mesage for any Info </H4>
          <P>Call us for any emergencyx</P>
          <P>+1 123 - 456 - 7890</P>
          <ContactForm 
            btnText="REQUEST APPOINTMENT" 
            landingName="enterprise" 
          />
        </Column>
      </Columns>
    </Container>
  </Section>
);

export default ContactEnterprise;