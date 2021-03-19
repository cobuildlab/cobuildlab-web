import React from 'react';
import { Column, Columns } from 'bloomer';
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

const StyledImage = styled.div`
  margin-left: 40px;
`;

const ServicesHeader = ({ title, paragraph, paragraph2, img }) => {
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
        <StyledImage>{img}</StyledImage>
      </Column>
    </Columns>
  );
};

ServicesHeader.defaultProps = {
  title: '',
  paragraph: '',
  paragraph2: '',
};

ServicesHeader.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  paragraph2: PropTypes.string,
  img: PropTypes.element.isRequired,
};

export default ServicesHeader;
