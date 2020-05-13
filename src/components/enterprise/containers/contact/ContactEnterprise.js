import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';

import styled from 'styled-components';
import Paragraph from '../../../Typography/Paragraph';

// import Img from "gatsby-image"
import ContactForm from '../../../2020/ContactForm';
import H4 from '../../../Typography/H4';
// background animation required this

const P = styled(Paragraph)`
  margin-top: 0.5em;
`;

const ContactEnterprise = () => {
  const data = useStaticQuery(query);
  return (
    <Section id="contact">
      <Container>
        <Columns>
          <Column isHidden="mobile" isSize={5}>
            <Img fluid={data.file.childImageSharp.fluid} alt="" />
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }} isOffset={{ mobile: 0, desktop: 1 }}>
            <H4>
              Contact US for a{' '}
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
};

const query = graphql`
  query {
    file(relativePath: { eq: "contact/1.png" }) {
      childImageSharp {
        fluid(webpQuality: 72) {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;

export default ContactEnterprise;
