import React from 'react';
import { Column, Columns } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import ServiceTitle from './ServicesTitle';
import ServicesSubTitle from './ServicesSubTitle';
import ServicesContent from './ServicesContent';
import { TextOrange } from '../2021/text/TextHelpers';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: justify;
  color: #264a60;
`;

const ServicesHeader = () => {
  return (
    <Columns>
      <Column isSize={{ mobile: 12, desktop: 6 }}>
        <ServicesContent>
          <ServicesSubTitle>A great idea needs world class assistance.</ServicesSubTitle>
          <ServiceTitle>
            Our <TextOrange>Services</TextOrange>
          </ServiceTitle>
          <Paragraph>
            We partner with Entrepreneurs and Industry Experts to transform ideas into Web and
            Mobile Custom Software Solutions.
            <br />
            <br />
            Zero-waste, early results and transparent communication are our core values since day
            one.
          </Paragraph>
        </ServicesContent>
      </Column>
      <Column isHidden="mobile" isSize={6}>
        <StaticImage src={'./../../assets/images/service/product-development-new.png'} alt="" />
      </Column>
    </Columns>
  );
};

export default ServicesHeader;
