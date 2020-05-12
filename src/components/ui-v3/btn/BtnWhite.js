import { Button } from 'bloomer';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  color: rgb(118, 132, 141);
  border-width: 0px;
  text-transform: uppercase;
  font-size: 1.25rem;
  margin-top: 15px !important;

  &:hover {
    color: rgb(118, 132, 141);
  }
`;

const _Btn = (props) => (
  <StyledButton onClick={() => props.handleModal(false)}>{props.children}</StyledButton>
);

_Btn.defaultProps = {
  handleModal: () => null,
};

_Btn.propTypes = {
  handleModal: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { _Btn as BtnWhite };
