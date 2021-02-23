import React from 'react';
import { Column, Columns } from 'bloomer';
import ServiceTitle from './../ServicesTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

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
        <StaticImage src={'./../../assets/images/service/product-development-new.png'} alt="" />
      </Column>
    </Columns>
  );
};

ServicesHeader.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
};

export default ServicesHeader;
