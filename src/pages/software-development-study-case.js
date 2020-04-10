import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import YouTubeVideo from '../components/YouTubeVideo';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import StudyCase from '../components/2020/StudyCase';
import Testimonial from '../components/Testimonial';

import styled from 'styled-components';

// TYPOGRAPHY
import { 
  CustomH1 as H1, 
  CustomH2 as H2, 
  CustomParagraph as Paragraph 
} from '../components/2020/LandingTypography';

const StudyCaseContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

export default class SoftwareDevStudy extends Component {
  render() {
    const siteTitle = 'Developing new Software Products in Miami';
    const siteSubtitle = 'We transform ideas into Software Products';
    const siteDescription =
      'We transform requirements into working software. We specialize in building web and mobile solutions for Small and Medium Businesses.';
    const landingName = 'Software Development Study Case';

    return (
      <LandingPageLayout
        siteDescription={siteDescription}
        siteTitle={siteTitle}>
        
        <Columns isDesktop>
          <Column isSize={{ desktop: 7 }}>
            <H1>Developing new Software Products in Miami</H1>
            <H2>{siteSubtitle}</H2>
            <Paragraph>{siteDescription}</Paragraph>
            <StudyCaseContainer>
              <StudyCase />
            </StudyCaseContainer>
          </Column>

          <Column>
            <YouTubeVideo id={'AlU5h2xrQ5M'} />  
          </Column>
        </Columns>

        <Columns>
          <Column>
            <BadgeIndustry />
          </Column>
        </Columns>

        <Columns isVCentered>
          <Column isSize={{ desktop: 6 }}>
            <Testimonial />
          </Column>
          <Column >
            <NewLandingForm landingName={landingName} />
          </Column>
        </Columns>
        
      </LandingPageLayout>
    );
  }
}
