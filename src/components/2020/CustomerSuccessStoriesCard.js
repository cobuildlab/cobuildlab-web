import React from 'react';
import PropTypes from 'prop-types';
// import { Image } from 'gatsby';
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
  background-color: #264A60;
  padding: 40px;
  transition: transform .2s ease-out;
  transform: ${ ({ isVisible }) => ( isVisible ? 'scale(1)' : 'scale(0)' )};
  border: none;
`;

const CardContainer = styled.div`
  position: relative;
  wdith: 100%;
  height: 100%;
  background-color: #E76C29;
  overflow: hidden;
  transition: transform .1s linear;
  cursor: pointer;
  z-index: ${ ({ isVisible }) => ( isVisible ? '100' : '0' )};
  transform: ${ ({ isVisible }) => ( isVisible ? 'scale(1.08)' : 'scale(1)' )};
  &:hover, &:focus{
    transform: scale(1.08);
    z-index: 100;
    & ${CardHoverContainer} {
      transform: scale(1);
    }
  }
`;

/*const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
`;*/

const textCSS = css`
  color: #fff;
  font-weight: bold;
  font-family: 'Lato-bold', sans-serif;
`;


const CardTitle = styled.div`
  ${textCSS}
  font-size: calc(20px + (35 - 20) * ((100vw - 320px) / (1920 - 320)));
  text-align: left;
  margin-bottom: .5em;
`;

const CardDescription = styled.div`
  ${textCSS}
  font-size: calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)));
  text-align: left  ;
`;

const ButtonWrapper = styled.div`
  margin-top: 1em;
`;


const CustomerSuccessStoriesCard = ({ isVisible }) => (
  <CardContainer isVisible={isVisible}>
    <CardHoverContainer isVisible={isVisible}>
      <CardTitle>Okroo</CardTitle>
      <CardDescription >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id leo eget
        massa euismod sagittis eget 
        nec nulla. Sed ultrices tortor vitae mauris consectetur,
        feugiat porttitor tortor rutrum. Etiam non ultricies sem
        interdum molestie odio. Maecenas finibus enim a elit suscipit gravida. 
        Donec venenatis gravida felis, eget maximus mauris convallis posuere.
      </CardDescription>
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
  isVisible: PropTypes.bool
};

export default CustomerSuccessStoriesCard;


