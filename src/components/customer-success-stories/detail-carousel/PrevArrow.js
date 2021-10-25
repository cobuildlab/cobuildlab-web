import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, IconContainer } from './Icon';

import leftIcon from '../../../assets/images/icons/arrow-left.png';

const Left = styled(IconContainer)`
  left: -15%;
`;

const PrevArrow = ({ className, style, onClick }) => (
  <Left className={className} style={style} onClick={onClick}>
    <Icon src={leftIcon} alt="prev-icon" />
  </Left>
);

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => null,
};

export default PrevArrow;
