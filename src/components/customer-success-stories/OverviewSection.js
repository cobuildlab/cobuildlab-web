import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BannerBackground from '../2020/BannerBackground';
import DetailTitle from './DetailTitle';
import DetailHeroImagesContent from './DetailHeroImagesContent';
import { Column, Columns, Container, Section } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
  margin-bottom: 5rem;
  position: relative;
`;

const Banner = styled(BannerBackground)`
  top: '4%',
  left: '-16%',
  width: '70%',
  height: '70%',
`;

const BrandLogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.8rem;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const OverviewSection = ({ title, children, image }) => (
  <Wrapper>
    <Banner />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>{title}</DetailTitle>
            {children}
            <BrandLogosContainer>
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
                objectFit={'contain'}
                src={'../../assets/images/logos/brands-stories/aws.png'}
                alt={'AWS'}
              />
            </BrandLogosContainer>
          </Column>
          <Column
            style={{ display: 'flex', justifyContent: 'center' }}
            isSize={{ mobile: 12, desktop: 6 }}>
            <div style={{ width: '600px' }}>
              <DetailHeroImagesContent>{image}</DetailHeroImagesContent>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Wrapper>
);

OverviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  image: PropTypes.node,
};

OverviewSection.defaultProps = {
  image: null,
};

export default OverviewSection;
