import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';

// max-width: 510px;
// max-height: 468px;

const CardHoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  transition: transform .2s ease-out;
  opacity: 0.80;
  transform: ${ ({ isVisible }) => ( isVisible ? 'scale(1)' : 'scale(0)' )};
  background-color: #264A60;
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: transform .1s linear;
  cursor: pointer;
  z-index: ${ ({ isVisible }) => ( isVisible ? '100' : '0' )};
  transform: ${ ({ isVisible }) => ( isVisible ? 'scale(1.08)' : 'scale(1)' )};
  border: none;
  &:hover, &:focus{
    transform: scale(1.08);
    z-index: 100;
    & ${CardHoverContainer} {
      transform: scale(1);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const textCSS = css`
  color: #fff;
  font-weight: bold;
  font-family: 'Lato-bold', sans-serif;
`;


const CardTitle = styled.div`
  ${textCSS}
  font-size: 18px;
  text-align: left;
  margin-bottom: .5em;
  @media screen and (max-width: 768px){
    font-size: 25px;
  }
`;

const CardDescription = styled.div`
  ${textCSS}
  font-size: 14px;
  text-align: left  ;
  @media screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5em;
`;


const CustomerSuccessStoriesCard = ({ isVisible, title, description, image, }) => (
  <CardContainer isVisible={isVisible}>
    <CardImage src={image} atl={title} />
    <CardHoverContainer isVisible={isVisible}>
      <CardTitle>{title}</CardTitle>
      <CardDescription >{description}</CardDescription>
      <ButtonWrapper>
        <Button>
          READ MORE
        </Button>
      </ButtonWrapper>
    </CardHoverContainer>
  </CardContainer>
);

CustomerSuccessStoriesCard.defaultProps = {
  isVisible: false,
};

CustomerSuccessStoriesCard.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CustomerSuccessStoriesCard;


