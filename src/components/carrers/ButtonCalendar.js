import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { calendar } from 'react-icons-kit/fa/calendar';
import { Icon } from 'react-icons-kit';

const StyledButton = styled.button`
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  border: none;
  cursor: pointer;
  padding: 9px 20px;
  position: relative;
  font-weight: 300;
  border: 1px solid #264a60;
  background: transparent;
  color: #264a60 !important;
  height: 44px;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;
  &:hover,
  &:focus {
    box-shadow: 2px 7px 12px #264a6017 !important;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 20px;
`;

const ButtonCalendar = ({ title }) => (
  <StyledButton>
    <StyledIcon icon={calendar} alt="facebook-icon" size={22} />
    {'   ' + title}
  </StyledButton>
);

ButtonCalendar.defaultProps = {
  title: '',
};

ButtonCalendar.propTypes = {
  title: PropTypes.string,
};

export default memo(ButtonCalendar);
