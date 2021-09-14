import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { Column, Card } from 'bloomer';
import H4 from '../../Typography/H4';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled(H4)`
  margin-top: -5px;
  text-align: right;
  font-family: 'Lato-Light', serif !important;
  font-size: calc(16px + (50 - 40) * ((100vw - 320px) / (1920 - 320)));
  width: 65%;
  position: absolute;
  right: 0;
  padding-right: 10px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    width: 64%;
  }
`;

const CardStyledThree = styled(Card)`
  max-height: 155px;
  min-height: 155px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
`;

const Image = styled.div`
  width: 124px !important;
  height: 182px !important;
  margin-top: 12px;
  margin-left: 21px;
  & img {
    padding-top: 14px !important;
  }
  @media screen and (max-width: 800px) {
    width: 100px !important;
    margin-top: 5px;
    margin-left: 12px;
  }
`;

const Container = styled.div`
  margin-top: -160px;
  padding-right: 10px;
`;

const Readmore = styled.p`
  font-size: 15px;
  text-align: right;
  padding-left: 10px;
  color: rgb(231, 108, 41);
  padding-right: 10px;
  position: absolute;
  right: 0px;
  cursor: pointer;
  bottom: -5px;
`;

const ServicesCard = ({ title, subtitle, to, image }) => {
  const handleClick = useCallback(() => {
    navigate(to);
  }, [to]);
  return (
    <>
      <Column isSize={{ mobile: 12, tablet: 6, desktop: 4 }}>
        <CardStyledThree>
          <Image>{image}</Image>
          <Container>
            <Title>
              {title}
              <br />
              {subtitle}
            </Title>
          </Container>
          <Readmore onClick={handleClick}>Read More</Readmore>
        </CardStyledThree>
      </Column>
    </>
  );
};

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
};

export default ServicesCard;
