import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import BannerBackground from '../../components/2020/BannerBackground';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import StickySection from '../../components/customer-success-stories/StickySection';
import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import { graphql } from 'gatsby';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { Column, Columns, Container, Section } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { TextOrange } from '../../components/2021/text/TextHelpers';
import { EpilogueSection } from '../../components/customer-success-stories/EpilogueSection';

const OverviewSection = styled.div`
  margin-bottom: 5rem;
`;

const BannerOverview = styled(BannerBackground)`
    top: '-40%',
    right: '-80%',
    width: '130%',
    height: '130%',
`;

const BrandLogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.8rem;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const LightSection = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
`;

const SolutionSection = styled.div`
  display: block;
`;

const Fisherman = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Fisherman"
      description="Fisherman is an application interconnected with Slack and Github that helps development teams to perform their duties in a faster and more efficient way, such as standups, metrics, emails, tasks, and more."
      image={data.seoImages.childImageSharp.resize}
    />

    {
      // Overview
    }
    <OverviewSection>
      <BannerOverview />
      <Section>
        <Container>
          <Columns isMultiline>
            <Column isSize={{ mobile: 12, desktop: 6 }}>
              <DetailTitle>Fisherman</DetailTitle>
              <DetailParagraph isBold>
                Fisherman is an application interconnected with Slack and Github that helps
                development teams to perform their duties in a faster and more efficient way, such
                as standups, metrics, emails, tasks, and more.
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
                    src={'./../../assets/images/customers/fisherman/overview-collage.png'}
                    alt={'Overview collage'}
                  />
                </DetailHeroImagesContent>
              </div>
            </Column>
          </Columns>
        </Container>
      </Section>
    </OverviewSection>

    {
      // Problem
    }
    <LightSection>
      <Section>
        <Container>
          <Columns isMultiline>
            <Column isSize={{ tablet: 12, desktop: 6 }}>
              <StickySection>
                <StaticImage
                  width={'1920'}
                  height={'901'}
                  src={'../../assets/images/customers/fisherman/problem.jpg'}
                  alt={'problem'}
                />
              </StickySection>
            </Column>
            <Column isSize={{ tablet: 12, desktop: 6 }}>
              <DetailSubTitle>
                The <TextOrange> Problem </TextOrange>
              </DetailSubTitle>
              <DetailParagraph>
                The opportunity stems from the need to help streamline processes and tasks related
                to the daily work of software development agencies.
              </DetailParagraph>
              <DetailParagraph>
                In addition, currently, there is no tool that allows monitoring the activities done
                by a developer in GitHub and to match those metrics with stand up activity.
              </DetailParagraph>
            </Column>
          </Columns>
        </Container>
      </Section>
    </LightSection>

    {
      // Solution
    }
    <SolutionSection>
      <DetailSection
        image={
          <StaticImage
            width={'1899'}
            height={'900'}
            src={'./../../assets/images/customers/fisherman/solution.jpg'}
            alt={'Solution'}
          />
        }
        caption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        left>
        <DetailSubTitle>
          The <TextOrange>Solution</TextOrange>
        </DetailSubTitle>

        <DetailParagraph>
          We used a low code platform to rapidly prototype and develop features as we moved into
          discovering challenges for the development teams.
        </DetailParagraph>
        <DetailParagraph>
          Users can set up email accounts for the projects, standup bots, and view metrics on how
          developers are working on a project.
        </DetailParagraph>
        <DetailParagraph>
          In this way, a continuous follow-up of activities is maintained, having available metrics
          to evaluate the work performance in terms of designated kpi.
        </DetailParagraph>
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
    </SolutionSection>

    <LightSection>
      <Section>
        <div style={{ textAlign: 'center' }}>
          <DetailSubTitle>
            What <TextOrange> We did </TextOrange>
          </DetailSubTitle>
        </div>
      </Section>
      <DetailSection>
        <DetailSubTitle isBold={false}>Logical Architecture</DetailSubTitle>
      </DetailSection>
    </LightSection>

    <EpilogueSection />
  </DetailLayout>
);

Fisherman.propTypes = {
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

export default Fisherman;
