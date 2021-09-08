import React from 'react';
import { Column, Columns } from 'bloomer';
import ServicesSubTitle from './../ServicesSubTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import Typography from '../../2020/Typography';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 100;
  text-align: justify;
  color: #264a60;
`;

const StyleList = styled.ul`
  list-style: initial;
  & li {
    padding-bottom: 10px;
  }
`;

const StyleSubtitle = styled.div`
  text-align: center;
`;

const StyledServicesContent = styled(ServicesContent)`
  display: initial !important;
`;

const ServicesSection4 = ({ title, leftText, rightTextList, text, otherText }) => {
  return (
    <>
      <StyleSubtitle>
        <ServicesSubTitle isCentered>
          <Typography tag="h2" className="subtitle-new">
            {title}
          </Typography>
        </ServicesSubTitle>
      </StyleSubtitle>
      <br />
      <Paragraph>{text}</Paragraph>
      <br />
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} isOffset={{ desktop: 2 }}>
          {!Array.isArray(leftText) ? (
            <ServicesContent>
              <Paragraph>{leftText}</Paragraph>
            </ServicesContent>
          ) : (
            <StyledServicesContent>
              <Paragraph>
                <StyleList>
                  {leftText.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </StyleList>
              </Paragraph>
            </StyledServicesContent>
          )}
        </Column>
        <Column isSize={{ mobile: 12, desktop: 4, tablet: 6 }} isOffset={{ desktop: 1 }}>
          <StyledServicesContent className="services-content-styles">
            <StyleList>
              <Paragraph>
                {rightTextList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Paragraph>
            </StyleList>
          </StyledServicesContent>
        </Column>
      </Columns>
      {otherText !== '' ? <Paragraph>{otherText}</Paragraph> : null}
    </>
  );
};

ServicesSection4.defaultProps = {
  title: '',
  leftText: '',
  text: '',
  otherText: '',
  rightTextList: [],
};

ServicesSection4.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.any,
  text: PropTypes.string,
  otherText: PropTypes.string,
  rightTextList: PropTypes.array,
};

export default ServicesSection4;
