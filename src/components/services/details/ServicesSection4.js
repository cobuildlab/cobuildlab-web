import React from 'react';
import { Column, Columns } from 'bloomer';
import ServicesSubTitle from './../ServicesSubTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import Typography from '../../2020/Typography';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: 20px;
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

const ServicesSection4 = ({ title, leftText, rightTextList }) => {
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
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 5 }} isOffset={{ desktop: 1 }}>
          {!Array.isArray(leftText) ? (
            <ServicesContent>
              <Paragraph>{leftText}</Paragraph>
            </ServicesContent>
          ) : (
            <ServicesContent>
              <Paragraph>
                <StyleList>
                  {leftText.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </StyleList>
              </Paragraph>
            </ServicesContent>
          )}
        </Column>
        <Column isSize={{ mobile: 12, desktop: 5 }} isOffset={{ desktop: 1 }}>
          <ServicesContent>
            <Paragraph>
              <StyleList>
                {rightTextList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </StyleList>
            </Paragraph>
          </ServicesContent>
        </Column>
      </Columns>
    </>
  );
};

ServicesSection4.defaultProps = {
  title: '',
  leftText: '',
  rightTextList: [],
};

ServicesSection4.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.any,
  rightTextList: PropTypes.array,
};

export default ServicesSection4;
