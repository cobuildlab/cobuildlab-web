import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const MansoryContainer = styled.div`
  column-count: 5;
  column-gap: 1em;
  @media (max-width: 575.98px) {
    column-count: 2;
  }
`;

export const MansoryItem = styled.figure`
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  padding: 0.5em;
`;

export const MansoryImage = styled(GatsbyImage)`
  max-width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

export const MansorySliderItem = styled.div`
  height: 85vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MansorySliderImagesWrapper = styled.div`
  position: relative;
  max-height: 85vh;
  overflow: scroll;
  top: 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
