import { Title } from 'bloomer';

import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled(Title)`
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  top: 167px !important;
  left: 154px !important;
  width: 350px !important;
  text-align: left !important;
  font: Regular 18px/22px Lato !important;
  font-size: 18px !important;
  letter-spacing: 0px !important;
  color: rgb(38, 74, 96) !important;
  opacity: 1 !important;
  font-weight: normal !important;
  font-family: 'Lato-regular', sans-serif !important;
`;

const _H2 = (props) => (
  <StyledTitle isSize={2} tag={'h2'}>
    {props.children}
  </StyledTitle>
);

export { _H2 as H2Subtitle };
