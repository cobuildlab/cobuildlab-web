import React from 'react';
import PropTypes from 'prop-types';
import DetailSection from './new/DetailSection';
import DetailSubTitle from './DetailSubTitle';
import styled from 'styled-components';
import { TextOrange } from '../2021/text/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';
import { Column, Columns, Container } from 'bloomer';

const Wrapper = styled.div`
  display: block;
`;

const SolutionSection = ({ children, image, caption }) => (
  <Wrapper>
    <DetailSection image={image} caption={caption} left>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      {children}
      <Container>
        <Columns>
          <Column
            style={{ display: 'flex', alignItems: 'center', marginTop: '2.5rem' }}
            isSize={{ desktop: 12 }}>
            <StaticImage
              width={'67'}
              height={'68'}
              style={{ marginRight: '4rem' }}
              objectFit={'contain'}
              src={'../../assets/images/logos/brands-stories/google.png'}
              alt={'Google'}
            />
            <StaticImage
              width={'90'}
              height={'80'}
              style={{ marginRight: '4rem' }}
              objectFit={'contain'}
              src={'../../assets/images/logos/brands-stories/react.png'}
              alt={'React'}
            />
            <StaticImage
              width={'91'}
              height={'91'}
              style={{ marginRight: '4rem' }}
              objectFit={'contain'}
              src={'../../assets/images/logos/brands-stories/aws.png'}
              alt={'AWS'}
            />
            <StaticImage
              width={'91'}
              height={'91'}
              style={{ marginRight: '4rem' }}
              objectFit={'contain'}
              src={'../../assets/images/logos/brands-stories/aws.png'}
              alt={'AWS'}
            />
            <StaticImage
              width={'67'}
              height={'68'}
              objectFit={'contain'}
              src={'../../assets/images/logos/brands-stories/google.png'}
              alt={'Google'}
            />
          </Column>
        </Columns>
      </Container>
    </DetailSection>
  </Wrapper>
);

SolutionSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  image: PropTypes.node,
  caption: PropTypes.string,
};

SolutionSection.defaultProps = {
  image: null,
  caption: '',
};

export default SolutionSection;
