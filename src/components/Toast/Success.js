import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO';
import { Icon } from 'react-icons-kit';

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.75);
`;

const IconContainer = styled.div`
  margin-right: 1em;
  color: #52c41a;
`;

const Success = ({ message }) => (
  <MessageContainer>
    <IconContainer>
      <Icon icon={checkCircleO} size={35} />
    </IconContainer>
    {message}
  </MessageContainer>
);

Success.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Success;
