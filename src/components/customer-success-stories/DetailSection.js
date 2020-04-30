import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
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

const DetailSection = ({ children, src, left }) => (
  <SectionContainer>
    <Container>
      <Row>
        <Col direction={left ? 'left' : 'rigth'}>{children}</Col>
        <Col direction={left ? 'rigth' : 'left'}>
          <Img fluid={src} alt="" />
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
  src: PropTypes.object.isRequired,
};

export default DetailSection;
