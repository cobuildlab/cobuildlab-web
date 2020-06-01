import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #fff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 30px $box-shadow;
  margin-top: 105px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ServiceCardContainer = ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
);

ServiceCardContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ServiceCardContainer;
