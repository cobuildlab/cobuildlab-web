import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Column, Columns } from 'bloomer';
import Img from 'gatsby-image';
import ServiceTitle from './../ServicesTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-align: justify;
  color: #264a60;
`;

const Paragraph2 = styled.p`
  font-size: 17px;
  text-align: justify;
  color: #264a60;
`;

const ServicesHeader = ({ title, paragraph, paragraph2 }) => {
  const data = useStaticQuery(query);
  return (
    <Columns>
      <Column isSize={{ mobile: 12, desktop: 7 }}>
        <ServicesContent>
          <ServiceTitle>{title}</ServiceTitle>
          <Paragraph>
            {paragraph}
            <br />
            <br />
          </Paragraph>
          <Paragraph2>{paragraph2}</Paragraph2>
        </ServicesContent>
      </Column>
      <Column isHidden="mobile" isSize={5}>
        <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </Column>
    </Columns>
  );
};

ServicesHeader.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
};

const query = graphql`
  query {
    file(relativePath: { eq: "service/product-development-new.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ServicesHeader;
