import React from 'react';
import { Column, Columns } from 'bloomer';
import ServicesSubTitle from './../ServicesSubTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import { TextOrange } from '../../2021/text/TextHelpers';
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

const ServicesSection3 = ({ children, title, textList, textList2, otherText, otherText2 }) => {
  return (
    <>
      <StyleSubtitle>
        <ServicesSubTitle isCentered>
          <Title>{title}</Title>{' '}
        </ServicesSubTitle>
      </StyleSubtitle>
      <Columns isVCentered>
        {textList && textList.length > 0 && (
          <Column isSize={{ mobile: 12, desktop: 4 }}>
            <ServicesContent>
              {textList.map((t, i) => (
                <React.Fragment key={i}>
                  <Paragraph>• {t}</Paragraph>
                </React.Fragment>
              ))}
            </ServicesContent>
          </Column>
        )}

        <Column isVCentered isHidden="mobile" isSize={textList.length === 0 ? 6 : 4}>
          {children && children.props.src ? (
            children
          ) : (
            <StaticImage
              src={'../../../assets/images/service/details/services-details.png'}
              alt={'Service Section 3'}
            />
          )}
        </Column>
        <Column isSize={{ mobile: 12, desktop: textList.length === 0 ? 6 : 4 }}>
          <ServicesContent>
            {otherText !== '' ? <Paragraph2>{otherText}</Paragraph2> : null}
            {otherText2 !== '' ? <Paragraph2>{otherText2}</Paragraph2> : null}
            {textList2.map((t, i) => (
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

ServicesSection3.defaultProps = {
  children: null,
  title: '',
  otherText: '',
  otherText2: '',
  textList: [],
  textList2: [],
};

ServicesSection3.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  otherText: PropTypes.string,
  otherText2: PropTypes.string,
  textList: PropTypes.array,
  textList2: PropTypes.array,
};

export default ServicesSection3;
