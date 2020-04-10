import React from 'react';
import PropTypes from 'prop-types';
import { Section, Container, Columns, Column } from 'bloomer';
import DetailImage from './DetailImage';

const DetailSectionImageRight = ({ children, src, alt }) => (
  <Section>
    <Container>
      <Columns isMultiline>
        <Column isSize={{ mobile: 12, desktop: 6 }}>{children}</Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <DetailImage src={src} alt={alt} />
        </Column>
      </Columns>
    </Container>
  </Section>
);

DetailSectionImageRight.defaultProps = {
  alt: '',
};

DetailSectionImageRight.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  src: PropTypes.string.isRequired,
};

export default DetailSectionImageRight;
