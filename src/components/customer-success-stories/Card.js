import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import styled, { css } from 'styled-components';
// import Img from 'gatsby-image';
import ButtonDefault from '../2020/Button/ButtonDefault';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// max-width: 510px;
// max-height: 468px;

const textCSS = css`
  color: #fff;
  font-weight: bold;
  font-family: 'Lato-bold', sans-serif;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5em;
  opacity: 0;
`;

const CardDescription = styled.div`
  ${textCSS}
  font-size: 14px;
  text-align: left;
  margin-top: 1.5em;
  opacity: 0;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardHoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  transition: all 0.2s ease-out;
  opacity: 0.85;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 300px;
  overflow: hidden;
  transition: transform 0.1s linear;
  cursor: pointer;
  z-index: 0;
  transform: scale(1);
  border: none;
  &:hover,
  &:focus {
    transform: scale(1.08);
    z-index: 100;
    & ${CardHoverContainer} {
      transform: scale(1);
      background-color: #264a60;
    }

    & ${CardDescription}, & ${ButtonWrapper} {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

const CardImage = styled(GatsbyImage)`
  width: 100%;
`;

const CardTitle = styled.div`
  ${textCSS}
  font-size: 20px;
  text-align: left;
  margin-bottom: 0.5em;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const CustomerSuccessStoriesCard = ({ title, description, image, to }) => {
  console.log(image);
  const img = getImage(image);

  const handleClick = useCallback(() => {
    navigate(to);
  }, [to]);

  return (
    <CardContainer onClick={handleClick}>
      <CardImage image={img} alt="" />
      <CardHoverContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ButtonWrapper>
          <ButtonDefault>READ MORE</ButtonDefault>
        </ButtonWrapper>
      </CardHoverContainer>
    </CardContainer>
  );
};

CustomerSuccessStoriesCard.defaultProps = {
  to: '',
};

CustomerSuccessStoriesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  to: PropTypes.string,
};

export default CustomerSuccessStoriesCard;
