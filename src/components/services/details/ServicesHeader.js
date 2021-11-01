import React from 'react';
import { Column, Columns } from 'bloomer';
import ServiceTitle from './../ServicesTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: 18px;
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

const ServicesHeader = ({ title, paragraph, paragraph2, img, careers }) => {
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
};

ServicesHeader.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  paragraph2: PropTypes.string,
  img: PropTypes.element.isRequired,
  careers: PropTypes.bool,
};

export default ServicesHeader;
