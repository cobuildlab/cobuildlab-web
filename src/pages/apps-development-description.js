import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import YouTubeVideo from '../components/YouTubeVideo';
import Testimonial from '../components/Testimonial';

// TYPOGRAPHY
import { 
  CustomH1 as H1, 
  CustomH2 as H2, 
  CustomParagraph as Paragraph 
} from '../components/2020/LandingTypography';

class AppsDevDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const siteTitle = 'Developing new Apps in Miami';
    const siteSubtitle = 'We transform ideas into working Apps';
    const siteDescription =
      'We transform requirements into working software. We specialize in building web and mobile applications for Small and Medium Businesses.';
    const landingName = 'Apps Development Description';

    return (
      <LandingPageLayout
        siteDescription={siteDescription}
        siteTitle={siteTitle}>

        <Columns isDesktop>
          <Column isSize={{ desktop: 7 }}>
            <H1>Developing new Software Products in Miami</H1>
            <H2>{siteSubtitle}</H2>
            <Paragraph>{siteDescription}</Paragraph>
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

export default AppsDevDescription;
