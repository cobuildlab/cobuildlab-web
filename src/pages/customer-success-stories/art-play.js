import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { Column, Columns, Container, Section } from 'bloomer';
import BannerBackgroundStories from '../../components/customer-success-stories/BannerBackgroundStories';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { StaticImage } from 'gatsby-plugin-image';

const OverviewSection = styled.div`
  margin-bottom: 5rem;
`;

const BrandLogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.8rem;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const ArtPlay = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="ArtPlay"
      description="Founded by Patricia Shea, gallery owner, appraiser, and art advisor with offices in New York and Los Angeles who serves to prominent public and private collectors as well as new ones seeking guidance in the complex world of collecting contemporary art, offering insightful analysis of this market with a global perspective."
      image={data.seoImages.childImageSharp.resize}
    />
    {
      // Overview
    }
    <OverviewSection>
      <BannerBackgroundStories
        style={{
          top: '4%',
          left: '-16%',
          width: '70%',
          height: '70%',
        }}
      />
      <Section>
        <Container>
          <Columns isMultiline>
            <Column isSize={{ mobile: 12, desktop: 6 }}>
              <DetailTitle>Art Play</DetailTitle>
              <DetailParagraph isBold={true}>
                Founded by Patricia Shea, gallery owner, appraiser, and art advisor with offices in
                New York and Los Angeles who serves to prominent public and private collectors as
                well as new ones seeking guidance in the complex world of collecting contemporary
                art, offering insightful analysis of this market with a global perspective.
              </DetailParagraph>

              <DetailParagraph isBold={true}>
                Teaming up with Cobuild Lab, Art Play is now the first comprehensive solution for
                media art in terms of the collecting, sales, distribution, archive and exhibition.
              </DetailParagraph>
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
                <DetailHeroImagesContent>
                  <StaticImage
                    width={'1580'}
                    height={'1084'}
                    src={'./../../assets/images/customers/art-play/overview-collage.png'}
                    alt={'Overview collage'}
                  />
                </DetailHeroImagesContent>
              </div>
            </Column>
          </Columns>
        </Container>
      </Section>
    </OverviewSection>
  </DetailLayout>
);

ArtPlay.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/art-play/art-play-logo-black.png" }) {
      childImageSharp {
        resize(width: 1200, height: 1200) {
          width
          height
          src
        }
      }
    }
  }
`;

export default ArtPlay;
