import { Title } from 'bloomer';
import PropTypes from 'prop-types';

import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled(Title)`
  color: #e76c29 !important;
  margin-bottom: 1rem !important;
  font-size: 57px !important;
  font-family: 'Lato-Black', sans-serif !important;
`;

const _H2 = (props) => (
  <StyledTitle isSize={2} tag={'h2'}>
    {props.children}
  </StyledTitle>
);

_H2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { _H2 as H2Orange };
