import React, { Component } from 'react';
import { Columns, Column, HeroBody, Container } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import LandingPageLayout from '../../components/2020/LandingPageLayout';
import YouTubeVideo from '../../components/YouTubeVideo';
import BadgeIndustry from '../../components/2020/BadgeIndustry';
import NewLandingForm from '../../components/2020/NewLandingForm';
import Testimonial from '../../components/Testimonial';
import { StaticImage } from 'gatsby-plugin-image';

// TYPOGRAPHY
import {
  CustomH1 as H1,
  CustomH2 as H2,
  CustomParagraph as Paragraph,
} from '../../components/2020/LandingTypography';
import { CaseStudy } from '../../components/2020/CaseStudy';
import Skills from '../../components/enterprise/containers/skills';

export default class SoftwareDevStudy extends Component {
  render() {
    const siteTitle = 'Developing new Software Products Fast and Effectively';
    const siteDescription =
      'We partner with Entrepreneurs, Small and Medium-sized Businesses, to transform ideas into working Software Products.';
    const landingName = 'Software Development Study Case';

    return (
      <LandingPageLayout siteDescription={siteDescription} siteTitle={siteTitle}>
        <Columns isDesktop isVCentered>
          <Column isSize={{ desktop: 7 }} isVCentered>
            <H1>{siteTitle}</H1>
            <br />
            <H2>{siteDescription}</H2>
            <br />
            <ul>
              <li>
                <Paragraph>- Transform your ideas into working Software</Paragraph>
                <Paragraph>- Find the formula to Scale your business rapidly</Paragraph>
                <Paragraph>
                  - Provide differentiators values to your Customers to stand over your competitors
                </Paragraph>
                <Paragraph>- Reduce your costs</Paragraph>
              </li>
            </ul>
            <HeroBody>
              <Container hasTextAlign="centered">
                <StaticImage
                  maxWidth={350}
                  maxHeight={350}
                  src={'./../../assets/2021/images/group-banner-2.png'}
                  alt={'banner'}
                />
              </Container>
            </HeroBody>
          </Column>

          <Column>
            <NewLandingForm landingName={landingName} />
          </Column>
        </Columns>

        <br />
        <br />
        <CaseStudy />

        <Columns>
          <Column>
            <Skills />
            <BadgeIndustry />
          </Column>
        </Columns>

        <Container hasTextAlign="centered">
          <H1>Video</H1>
        </Container>

        <Columns>
          <YouTubeVideo id={'5fbYxQNgJ7s'} />
        </Columns>

        <Container hasTextAlign="centered">
          <H1>Contact Us</H1>
        </Container>

        <Columns isVCentered>
          <Column isSize={{ desktop: 6 }}>
            <Testimonial />
          </Column>
          <Column id="contact">
            <NewLandingForm landingName={landingName} />
          </Column>
        </Columns>
      </LandingPageLayout>
    );
  }
}
