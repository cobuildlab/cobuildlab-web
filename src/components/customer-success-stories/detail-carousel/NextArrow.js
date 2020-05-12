import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, IconContainer } from './Icon';

import rightIcon from '../../../assets/images/icons/arrow-right.png';

const Right = styled(IconContainer)`
  right: -25%;
`;

const NextArrow = ({ className, style, onClick }) => (
  <Right className={className} style={style} onClick={onClick}>
    <Icon src={rightIcon} alt="next-icon" />
  </Right>
);

NextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => null,
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default NextArrow;
