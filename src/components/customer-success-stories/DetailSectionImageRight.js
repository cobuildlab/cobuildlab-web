import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Section, Container, Columns, Column } from 'bloomer';
import DetailImage from './DetailImage';

const SectionContainer = styled(Section)`
  @media screen and (max-width: 768px) {
    padding: 1em 3rem;
  }
`;

const Right = styled(Column)`
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

const Left = styled(Column)`
  @media screen and (max-width: 768px) {
    order: 1;
  }
`;

const DetailSectionImageRight = ({ children, src, alt }) => (
  <SectionContainer>
    <Container>
      <Columns isDisplay="flex-mobile" isMultiline>
        <Left isSize={{ mobile: 12, desktop: 6 }}>{children}</Left>
        <Right isSize={{ mobile: 12, desktop: 6 }}>
          <DetailImage src={src} alt={alt} />
        </Right>
      </Columns>
    </Container>
  </SectionContainer>
);

DetailSectionImageRight.defaultProps = {
  alt: '',
};

DetailSectionImageRight.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  src: PropTypes.object.isRequired,
};

export default DetailSectionImageRight;
