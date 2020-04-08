import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import YouTubeVideo from '../components/YouTubeVideo';
import styled from 'styled-components';

// TYPOGRAPHY
import { 
  CustomH1 as H1, 
  CustomH2 as H2, 
  CustomParagraph as Paragraph 
} from '../components/2020/LandingTypography';

const YouTubeVideoContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

export default class AppsDevDescription extends Component {
  render() {
    const siteTitle = 'Mobile Application Development in Miami';
    const siteSubtitle = 'We transform ideas into working Mobile Applications';
    const siteDescription = "Let's create amazing Mobile Applications";
    const landingName = 'Mobile Application Development Description';

    return (
      <LandingPageLayout
        siteDescription={siteDescription}
        siteTitle={siteTitle}>

        <Columns isDesktop>
          <Column isSize={{ desktop: 7 }}>
            <H1>Developing new Software Products in Miami</H1>
            <H2>{siteSubtitle}</H2>
            <Paragraph>{siteDescription}</Paragraph>
            <YouTubeVideoContainer>
              <YouTubeVideo id={'AlU5h2xrQ5M'} />
            </YouTubeVideoContainer>
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
