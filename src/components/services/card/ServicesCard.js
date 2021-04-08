import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { Column, Card } from 'bloomer';
import H4 from '../../Typography/H4';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled(H4)`
  margin-top: 30px;
  text-align: right;
  font-weight: 100;
  font-family: 'Lato-Light' !important;
`;

const CardStyled = styled(Card)`
  max-height: 530px;
  min-height: 530px;
  max-width: 600px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
`;

const CardStyledThree = styled(Card)`
  max-height: 611px;
  min-height: 611px;
  max-width: 600px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
`;

const Image = styled.div`
  width: 287px !important;
  height: 276px !important;
  margin-top: 12px;
  margin-left: 21px;
  & img {
    margin-top: 14px;
    height: 95%;
  }
`;

const Container = styled.div`
  margin-top: -50px;
  padding-right: 36px;
`;

const Paragraph = styled.p`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: left;
  padding-left: 28px;
  color: #264a60;
  padding-right: 24px;
  margin-top: 20px;
`;

const Readmore = styled.p`
  font-size: 17px;
  text-align: right;
  padding-left: 10px;
  color: rgb(231, 108, 41);
  padding-right: 10px;
  position: absolute;
  right: 29px;
  cursor: pointer;
  font-family: Lato-bold !important;
  bottom: 18px;
`;

const ServicesCard = ({ title, subtitle, cover, to, image, three }) => {
  const handleClick = useCallback(() => {
    navigate(to);
  }, [to]);
  return (
    <>
      <Column isSize={{ mobile: 12, desktop: three ? 4 : 5 }}>
        {three ? (
          <CardStyledThree>
            <Image>{image}</Image>
            <Container>
              <Title>
                {title}
                <br />
                {subtitle}
              </Title>
            </Container>
            <Paragraph>
              {cover}
              {'.'}
            </Paragraph>
            <Readmore onClick={handleClick}>Read More</Readmore>
          </CardStyledThree>
        ) : (
          <CardStyled>
            <Image>{image}</Image>
            <Container>
              <Title>
                {title}
                <br />
                {subtitle}
              </Title>
            </Container>
            <Paragraph>
              {cover}
              {'.'}
            </Paragraph>
            <Readmore onClick={handleClick}>Read More</Readmore>
          </CardStyled>
        )}
      </Column>
    </>
  );
};

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  three: PropTypes.bool.isRequired,
};

export default ServicesCard;
