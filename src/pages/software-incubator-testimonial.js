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

export default class SoftwareIncTestimonial extends Component {
  render() {
    const siteTitle = "Developing new Software Products in Miami";
    const siteSubtitle = "We incubate new Software Products";
    const siteDescription =
      "We help entrepreneurs create amazing Products with our streamlined, lean and phased Software Development Process. Since day one, our technique is focused on early results and transparent communication.";
    const landingName = "Software Incubator Testimonial";

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
