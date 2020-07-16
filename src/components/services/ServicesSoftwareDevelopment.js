import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import ServiceTitle from './ServicesTitle';
import ServicesSubTitle from './ServicesSubTitle';
import ServicesContent from './ServicesContent';
import Paragraph from '../Typography/Paragraph';

const ServicesSoftwareDevelopment = () => {
  const data = useStaticQuery(query);
  return (
    <Columns>
      <Column isHidden="mobile" isSize={4}>
        <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </Column>
      <Column isSize={{ mobile: 12, desktop: 7 }} isOffset={{ desktop: 1 }}>
        <ServicesContent>
          <ServiceTitle>Software Development</ServiceTitle>
          <ServicesSubTitle>
            We transform requirements into computer programs. We specialize in building websites,
            web applications, and mobiles applications.
          </ServicesSubTitle>
          <Paragraph>
            Software development is the process of conceiving, specifying, designing, programming,
            documenting, testing, and bug fixing involved in creating and maintaining applications,
            frameworks, or other software components. Software development is a process of writing
            and maintaining the source code, but in a broader sense, it includes all that is
            involved between the conception of the desired software through to the final
            manifestation of the software, sometimes in a planned and structured process With our
            streamlined, lean and phased Process we achieve incredible results. From day one, our
            technique is focused on early results and transparent communication.
          </Paragraph>
        </ServicesContent>
      </Column>
    </Columns>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/software-development.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ServicesSoftwareDevelopment;
