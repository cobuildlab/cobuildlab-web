import React from 'react';
import { useLocation } from '@reach/router';
import { Container, Columns, Column, Section } from 'bloomer';

// import Img from "gatsby-image"
import ContactForm from '../../../2020/ContactForm';
import H4 from '../../../Typography/H4';
import { StaticImage } from 'gatsby-plugin-image';
// background animation required this

const ContactEnterprise = () => {
  const location = useLocation();
  return (
    <Section id={'contact'}>
      <Container>
        <Columns>
          <Column isHidden="mobile" isSize={5}>
            <StaticImage src={'../../../../assets/2021/images/1.png'} />
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }} isOffset={{ mobile: 0, desktop: 1 }}>
            <H4>
              Contact Us for a <br />
              <span className="enterprise-text-orange sub-title">
                FREE 1 hour Consultation
              </span>{' '}
            </H4>
            <ContactForm btnText="Submit" landingName="enterprise" location={location} />
          </Column>
        </Columns>
      </Container>
    </Section>
  );
};

export default ContactEnterprise;
