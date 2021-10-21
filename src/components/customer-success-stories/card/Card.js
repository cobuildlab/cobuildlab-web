import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ButtonDefault from '../../2020/Button/ButtonDefault';
import { Link } from 'gatsby';

const textCSS = css`
  color: #fff;
  font-weight: bold;
  font-family: 'Lato-bold', sans-serif;
`;

const ButtonWrapper = styled.div`
  margin-top: 0.5em;
  opacity: 0;
  float: right;
`;

const CardDescription = styled.div`
  ${textCSS}
  font-size: 15px;
  text-align: left;
  margin-top: 1.5em;
  text-align: justify;
  opacity: 0;
  & p {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
  }
  & span {
    margin-top: 15px;
  }
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
  max-height: 300px;
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

const CardTitle = styled.div`
  ${textCSS}
  font-size: 20px;
  text-align: left;
  margin-bottom: 0.5em;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const CustomerSuccessStoriesCard = ({ children, title, description, to }) => {
  return (
    <Link to={to}>
      <CardContainer>
        {children}
        <CardHoverContainer>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <ButtonWrapper>
            <ButtonDefault>READ MORE</ButtonDefault>
          </ButtonWrapper>
        </CardHoverContainer>
      </CardContainer>
    </Link>
  );
};

CustomerSuccessStoriesCard.defaultProps = {
  to: '',
};

CustomerSuccessStoriesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default CustomerSuccessStoriesCard;
