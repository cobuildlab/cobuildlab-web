import React from 'react';
import { Column, Columns } from 'bloomer';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typography from '../../2020/Typography';
import { TextOrange } from '../../2021/text/TextHelpers';

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

const ServicesSection2 = ({ title, titleOrange, text, listLeft, listRight, otherText }) => {
  return (
    <>
      <Column isSize={{ mobile: 12, desktop: 12 }}>
        <StyledSection>
          <StyledSubTitle>
            <Typography tag="h2" className="subtitle-new">
              {title} <TextOrange>{titleOrange}</TextOrange>
            </Typography>
          </StyledSubTitle>
          <Paragraph>{text}</Paragraph>
          {Array.isArray(listLeft) ? (
            <>
              <Columns>
                <Column isSize={{ mobile: 12, desktop: 6 }}>
                  <ul>
                    {listLeft.map((listitem, id) => (
                      <li key={id}>
                        <Paragraph>• {listitem}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </Column>
                <Column isSize={{ mobile: 12, desktop: 6 }}>
                  <ul>
                    {listRight.map((listitem, id) => (
                      <li key={id}>
                        <Paragraph>• {listitem}</Paragraph>
                      </li>
                    ))}
                  </ul>
                </Column>
              </Columns>
            </>
          ) : null}
          {!otherText ? <Paragraph>{otherText}</Paragraph> : null}
        </StyledSection>
      </Column>
    </>
  );
};

ServicesSection2.defaultProps = {
  title: '',
  titleOrange: '',
  text: '',
  listLeft: [],
  listRight: [],
  otherText: '',
};

ServicesSection2.propTypes = {
  title: PropTypes.string,
  titleOrange: PropTypes.string,
  text: PropTypes.string,
  listLeft: PropTypes.array,
  listRight: PropTypes.array,
  otherText: PropTypes.string,
};

export default ServicesSection2;
