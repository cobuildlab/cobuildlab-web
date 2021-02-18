import React from 'react';
import { Column } from 'bloomer';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typography from '../../2020/Typography';

const StyledSection = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledSubTitle = styled.div`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: justify;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  font-family: 'Lato-regular' !important;
  color: #264a60;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const ServicesSection2 = ({ title, text }) => {
  return (
    <>
      <Column isSize={{ mobile: 12, desktop: 12 }}>
        <StyledSection>
          <StyledSubTitle>
            <Typography tag="h2" className="subtitle-new">
              {title}
            </Typography>
          </StyledSubTitle>
          <Paragraph>{text}</Paragraph>
        </StyledSection>
      </Column>
    </>
  );
};

ServicesSection2.defaultProps = {
  title: '',
  text: '',
};

ServicesSection2.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default ServicesSection2;
