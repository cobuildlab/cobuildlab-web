import React from 'react';
import { Column, Columns } from 'bloomer';
import ServicesSubTitle from './../ServicesSubTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import { TextOrange } from '../../2021/text/TextHelpers';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: justify;
  color: #264a60;
`;

const StyleSubtitle = styled.div`
  text-align: center;
`;

const ServicesSection3 = ({ title, textList }) => {
  return (
    <>
      <StyleSubtitle>
        <ServicesSubTitle isCentered>
          <TextOrange>{title}</TextOrange>{' '}
        </ServicesSubTitle>
      </StyleSubtitle>
      <Columns isVCentered>
        <Column isVCentered isHidden="mobile" isSize={2} isOffset={{ desktop: 2 }}>
          <StaticImage
            src={'../../../assets/images/service/details/services-details.png'}
            alt={'Service Section 3'}
          />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 7 }}>
          <ServicesContent>
            {textList.map((t, i) => (
              <React.Fragment key={i}>
                <Paragraph>☛ {t}</Paragraph>
              </React.Fragment>
            ))}
          </ServicesContent>
        </Column>
      </Columns>
    </>
  );
};

ServicesSection3.defaultProps = {
  title: '',
  textList: [],
};

ServicesSection3.propTypes = {
  title: PropTypes.string,
  textList: PropTypes.array,
};

export default ServicesSection3;
