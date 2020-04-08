import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import Testimonial from '../components/2020/Testimonial';

import styled from 'styled-components';

// TYPOGRAPHY
import { 
  CustomH1 as H1, 
  CustomH2 as H2, 
  CustomParagraph as Paragraph 
} from '../components/2020/LandingTypography';

const TestimonialContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

export default class AppsDevTestimonial extends Component {
  render() {
    const siteTitle = 'Developing new Apps in Miami';
    const siteSubtitle = 'We transform ideas into working Apps';
    const siteDescription =
      'We transform requirements into working software. We specialize in building web and mobile applications for Small and Medium Businesses.';
    const landingName = 'Apps Development Testimonial';

    return (
      <LandingPageLayout
        siteDescription={siteDescription}
        siteTitle={siteTitle}>

        <Columns isDesktop>
          <Column isSize={{ desktop: 7 }}>
            <H1>Developing new Software Products in Miami</H1>
            <H2>{siteSubtitle}</H2>
            <Paragraph>{siteDescription}</Paragraph>
            <TestimonialContainer>
              <Testimonial />
            </TestimonialContainer>
            <BadgeIndustry />
          </Column>

          <Column isSize={{ desktop: 5 }}>
            <NewLandingForm landingName={landingName} />
          </Column>
        </Columns>

      </LandingPageLayout>
    );
  }
}
