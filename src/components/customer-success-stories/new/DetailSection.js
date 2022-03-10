import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Section, Container } from 'bloomer';

const SectionContainer = styled(Section)`
  @media screen and (max-width: 768px) {
    padding: 1em 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 50%;
  padding: 0.75rem;
  order: ${({ direction }) => (direction === 'left' ? '1' : '2')};
  @media screen and (max-width: 768px) {
    width: 100%;
    &:nth-child(1){
      order: 1;
    }
    &:nth-child(2){
      order: 2;
    }
`;

const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const DetailSection = ({ children, image, left }) => (
  <SectionContainer>
    <Container>
      <Row>
        <Col direction={left ? 'left' : 'rigth'}>{children}</Col>
        <Col direction={left ? 'rigth' : 'left'}>
          <StyledImage>{image}</StyledImage>
        </Col>
      </Row>
    </Container>
  </SectionContainer>
);

DetailSection.defaultProps = {
  left: false,
};

DetailSection.propTypes = {
  left: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  image: PropTypes.object,
};

DetailSection.defaultProps = {
  image: null,
};

export default DetailSection;
