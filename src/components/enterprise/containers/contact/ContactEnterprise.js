import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';

// import Img from "gatsby-image"
import ContactForm from '../../../2020/ContactForm';
import H4 from '../../../Typography/H4';
// background animation required this

const ContactEnterprise = () => {
  const data = useStaticQuery(query);
  return (
    <Section id={'contact'}>
      <Container>
        <Columns>
          <Column isHidden="mobile" isSize={5}>
            <Img fluid={data.file.childImageSharp.fluid} alt="" />
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }} isOffset={{ mobile: 0, desktop: 1 }}>
            <H4>
              Contact Us for a <br />
              <span className="enterprise-text-orange sub-title">
                FREE 1 hour Consultation
              </span>{' '}
            </H4>
            <ContactForm btnText="Submit" landingName="enterprise" />
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
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ContactEnterprise;
