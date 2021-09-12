import React from 'react';
import { Column, Columns } from 'bloomer';
import ServicesSubTitle from './../services/ServicesSubTitle';
import ServicesContent from './../services/ServicesContent';
import styled from 'styled-components';
import { TextOrange } from './../2021/text/TextHelpers';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

const Title = styled(TextOrange)`
  font-size: calc(24px + (42 - 24) * ((100vw - 320px) / (1920 - 320)));
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #264a60;
`;

const Paragraph2 = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 300;
  text-align: justify;
  color: #264a60;
`;

const StyleSubtitle = styled.div`
  text-align: center;
`;

const CareersSection = ({ title, textList, otherText, otherText2 }) => {
  return (
    <>
      <Columns isVCentered>
        <Column isSize={{ mobile: 12, desktop: 5 }}>
          <StaticImage
            src={'../../../assets/images/service/details/services-details.png'}
            alt={'Service Section 3'}
          />
        </Column>

        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <StyleSubtitle>
            <ServicesSubTitle isCentered>
              <Title>{title}</Title>{' '}
            </ServicesSubTitle>
          </StyleSubtitle>
          <ServicesContent>
            {otherText !== '' ? <Paragraph2>{otherText}</Paragraph2> : null}
            {otherText2 !== '' ? <Paragraph2>{otherText2}</Paragraph2> : null}
            {textList.map((t, i) => (
              <React.Fragment key={i}>
                <Paragraph>• {t}</Paragraph>
              </React.Fragment>
            ))}
          </ServicesContent>
        </Column>
      </Columns>
    </>
  );
};

CareersSection.defaultProps = {
  title: '',
  otherText: '',
  otherText2: '',
  textList: [],
};

CareersSection.propTypes = {
  title: PropTypes.string,
  otherText: PropTypes.string,
  otherText2: PropTypes.string,
  textList: PropTypes.array,
};

export default CareersSection;
