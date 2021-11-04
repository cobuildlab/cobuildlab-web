import React from 'react';
import { Column, Columns } from 'bloomer';
import ServiceTitle from './../ServicesTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// add a option like small medium large

const Paragraph = styled.p`
  font-size: ${({ size }) => (size === 'md' ? '20px' : '18px')};
  font-weight: 600;
  text-align: justify;
  color: #264a60;
  line-height: 26px;
`;

const Paragraph2 = styled.p`
  font-size: 20px !important;
  line-height: 26px !important;
  text-align: justify;
  color: #264a60;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
`;

const WrappServiceTitle = styled.div`
  margin-bottom: 3rem;
`;

const ServicesHeader = ({ title, paragraph, paragraph2, img, careers, size }) => {
  return (
    <Columns>
      <Column isSize={{ mobile: 12, desktop: 6 }}>
        <ServicesContent>
          <WrappServiceTitle>
            <ServiceTitle>{title}</ServiceTitle>
          </WrappServiceTitle>

          {!careers ? (
            <>
              <Paragraph>
                {paragraph}
                <br />
                <br />
              </Paragraph>
              <Paragraph2>{paragraph2}</Paragraph2>
            </>
          ) : (
            <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }}></Paragraph>
          )}
        </ServicesContent>
      </Column>
      <Column isHidden="mobile" isSize={6}>
        <StyledImage>{img}</StyledImage>
      </Column>
    </Columns>
  );
};

ServicesHeader.defaultProps = {
  title: '',
  paragraph: '',
  paragraph2: '',
  careers: false,
  size: 'md',
};

ServicesHeader.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  paragraph2: PropTypes.string,
  img: PropTypes.element.isRequired,
  careers: PropTypes.bool,
  size: PropTypes.string,
};

export default ServicesHeader;
