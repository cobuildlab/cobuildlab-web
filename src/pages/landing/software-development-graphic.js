import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import LandingPageLayout from '../../components/2020/LandingPageLayout';
import BadgeIndustry from '../../components/2020/BadgeIndustry';
import NewLandingForm from '../../components/2020/NewLandingForm';
import Testimonial from '../../components/Testimonial';
import YouTubeVideo from '../../components/YouTubeVideo';

// TYPOGRAPHY
import {
  CustomH1 as H1,
  CustomH2 as H2,
  CustomParagraph as Paragraph,
} from '../../components/2020/LandingTypography';
import ButtonSmoothScrolling from '../../components/2020/Button/ButtonSmoothScrolling';
import { AgileGraphic } from '../../components/2020/AgileGraphic';
import Skills from '../../components/enterprise/containers/skills';

export default class SoftwareDevGraphic extends Component {
  render() {
    const siteTitle = 'Developing new Software Products Fast and Effectively';
    const siteDescription =
      'We partner with Entrepreneurs, Small and Medium-sized Businesses, to transform ideas into working Software Products.';
    const landingName = 'Software Development Graphic';

    return (
      <LandingPageLayout siteDescription={siteDescription} siteTitle={siteTitle}>
        <Columns isDesktop>
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
              </li>
            </ul>
            <ButtonSmoothScrolling href="#landing-contact-form">
              Book a FREE 1 hour Consultation
            </ButtonSmoothScrolling>
          </Column>

          <Column>
            <YouTubeVideo id={'5fbYxQNgJ7s'} />
          </Column>
        </Columns>

        <br />
        <br />
        <AgileGraphic />

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
