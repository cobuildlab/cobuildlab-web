import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import LandingPageLayout from '../../components/2020/LandingPageLayout';
import YouTubeVideo from '../../components/YouTubeVideo';
import BadgeIndustry from '../../components/2020/BadgeIndustry';
import NewLandingForm from '../../components/2020/NewLandingForm';
import Testimonial from '../../components/Testimonial';

// TYPOGRAPHY
import {
  CustomH1 as H1,
  CustomH2 as H2,
  CustomParagraph as Paragraph,
} from '../../components/2020/LandingTypography';
import { SmoothScrollingButton } from '../../components/2021/button/SmoothScrollingButton';
import Skills from '../../components/enterprise/containers/skills';
import { CaseStudy } from '../../components/2020/CaseStudy';
import Brand from '../../components/enterprise/containers/brands';

export default class AppsDevStudy extends Component {
  render() {
    const siteTitle = 'Developing Web and Mobile Applications Fast and Effectively';
    const siteDescription =
      'We partner with Entrepreneurs, Small and Medium-sized Businesses, to transform ideas into working Web and Mobile Applications.';
    const landingName = 'Apps Development Study Case';

    return (
      <LandingPageLayout siteDescription={siteDescription} siteTitle={siteTitle}>
        <Columns isDesktop isVCentered>
          <Column isSize={{ desktop: 7 }}>
            <H1>{siteTitle}</H1>
            <H2>{siteDescription}</H2>
            <ul>
              <li>
                <Paragraph>- Transform your ideas into working Software</Paragraph>
                <Paragraph>- Find the formula to Scale your business rapidly</Paragraph>
                <Paragraph>
                  - Provide differentiators values to your Customers to stand over your competitors
                </Paragraph>
                <Paragraph>- Reduce your costs</Paragraph>
                <Paragraph>- Target Android and IOS users</Paragraph>
              </li>
            </ul>
            <SmoothScrollingButton href="#landing-contact-form">
              Book a FREE 1 hour Consultation
            </SmoothScrollingButton>
          </Column>

          <Column>
            <YouTubeVideo id={'AlU5h2xrQ5M'} />
          </Column>
        </Columns>

        <br />
        <br />
        <Brand />
        <CaseStudy />

        <Columns>
          <Column>
            <Skills />
            <BadgeIndustry />
          </Column>
        </Columns>

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
