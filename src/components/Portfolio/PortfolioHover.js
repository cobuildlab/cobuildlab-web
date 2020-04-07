// April 2020
// this is used in the new design dont delete
import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';


const PortfolioHoverContainer = styled.div`
  position: absolute;
  text-align: left;
  padding: calc(10px + (30 - 10) * ((100vw - 320px) / (1920 - 320)));
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
`;

const PortfolioTitle = styled.div`
  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 400;
  display: block;
  position: relative;
  text-transform: capitalize;
  margin-bottom: 0;
`;


export const PortfolioDescription = styled.div`
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 500;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;


const PortfolioHover = ({ title, description }) => (
  <PortfolioHoverContainer>
    <PortfolioTitle>{title}</PortfolioTitle>
    <PortfolioDescription>{description}</PortfolioDescription>
  </PortfolioHoverContainer>
);

PortfolioHover.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
};

export default PortfolioHover;
