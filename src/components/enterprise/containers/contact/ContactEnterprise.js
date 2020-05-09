import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';

import styled from 'styled-components';
import Paragraph from '../../../Typography/Paragraph';

// import Img from "gatsby-image"
import Image from '../../components/image';
import contactImage from '../../../../assets/images/contact/cobuild-form-image_4x.png';
import ContactForm from '../../../2020/ContactForm';
import AnimationBackground from './ContactAnimation';
import H4 from '../../../Typography/H4';
// background animation required this

const P = styled(Paragraph)`
  margin-top: 0.5em;
`;

const ContactEnterprise = () => (
  <Section id="contact">
    <AnimationBackground />
    <Container>
      <Columns>
        <Column isHidden="mobile" isSize={4}>
          <Image Path={contactImage} Class="logo-img" />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }} isOffset={{ mobile: 0, desktop: 2 }}>
          <H4>
            Contact US for a ,<br />
            <span className="enterprise-text-orange sub-title">FREE 1 hour Consultation</span>{' '}
          </H4>
          <P>+1 786 - 991 - 3467</P>
          <P>66 West Flagler St, suite 900, Miami, Florida</P>
          <ContactForm btnText="REQUEST APPOINTMENT" landingName="enterprise" />
        </Column>
      </Columns>
    </Container>
  </Section>
);

export default ContactEnterprise;
