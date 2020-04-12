import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma';

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
import SmoothScrollingButton from '../../components/SmoothScrollingButton';
import { TextOrange } from '../../components/Typography/TextHelpers';
import H3 from '../../components/Typography/H3';
import { H4Blue } from '../../components/text/H4Blue';
import { SkillsDevelopers } from '../../components/2020/skills/SkillsDevelopers';

export default class AppsDevStudy extends Component {
  render() {
    const siteTitle = 'Hire Remote Javascript and Python Developers';
    const siteDescription = `
      Solve your technical needs by hiring remote developers at affordable rates.
      `;
    const landingName = 'Apps Development Study Case';

    return (
      <LandingPageLayout siteDescription={siteDescription} siteTitle={siteTitle}>
        <Columns isDesktop isVCentered>
          <Column isSize={{ desktop: 7 }}>
            <H1>{siteTitle}</H1>
            <H2>{siteDescription}</H2>
            <H4Blue>Senior Developers starting at:</H4Blue>
            <br />
            <div className={'has-text-centered'}>
              <H3>
                <TextOrange>$25.00 / Hr</TextOrange>
              </H3>
            </div>
            <br />
            <ul>
              <li>
                <Paragraph>- Fully managed by your own dedicated Product Manager.</Paragraph>
              </li>
              <li>
                <Paragraph>- Reduce your costs of development and keep the quality.</Paragraph>
              </li>
              <li>
                <Paragraph>- FREE Deployment and Hosting tools</Paragraph>
              </li>
            </ul>
            <SmoothScrollingButton href="#landing-contact-form">
              Set a FREE 1 hour Consultation
            </SmoothScrollingButton>
          </Column>

          <Column>
            <YouTubeVideo id={'iZGno1K3ufM'} />
          </Column>
        </Columns>

        <br />
        <br />

        <Columns>
          <Column>
            <SkillsDevelopers />
          </Column>
        </Columns>

        <Columns isVCentered>
          <Column isSize={{ desktop: 6 }}>
            <Testimonial />
          </Column>
          <Column>
            <NewLandingForm landingName={landingName} />
          </Column>
        </Columns>
      </LandingPageLayout>
    );
  }
}
