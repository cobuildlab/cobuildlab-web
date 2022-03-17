import React from 'react';
import PropTypes from 'prop-types';
import DetailSubTitle from './DetailSubTitle';
import { TextOrange } from '../2021/text/TextHelpers';
import { Column, Columns, Container, Section } from 'bloomer';

const ResultSection = ({ children, image }) => (
  <Section>
    <Container>
      <Columns isMultiline>
        <Column isSize={{ mobile: 12, desktop: 6 }}>{image}</Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <DetailSubTitle>
            The <TextOrange> Results </TextOrange>
          </DetailSubTitle>
          {children}
        </Column>
      </Columns>
    </Container>
  </Section>
);

ResultSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  image: PropTypes.node,
};

ResultSection.defaultProps = {
  children: null,
  image: null,
};

export default ResultSection;
