import styled from 'styled-components';
import colors from './colors.json';
import commonStyles from './common-styles';


/* 
  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
  if you want read about how work font-size with calc and vw go to:
  https://css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/ 

*/

const H3  = styled.h3`
  ${commonStyles}
  font-weight: lighter;
  font-family: 'Lato-light', sans-serif;
  font-size: calc(41px + (60 - 41) * ((100vw - 320px) / (1920 - 320)));
  color: ${colors.indigo}
`;

export default H3;
