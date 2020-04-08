import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';

// GRAPHIC
import graphic from '../resources/graficas-1.png';

import styled from 'styled-components';

// TYPOGRAPHY
import { 
  CustomH1 as H1, 
  CustomH2 as H2, 
  CustomParagraph as Paragraph 
} from '../components/2020/LandingTypography';

const GraphicContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

export default class AppsDevGraphic extends Component {
  render() {
    const siteTitle = 'Mobile Application Development in Miami';
    const siteSubtitle = 'We transform ideas into working Mobile Applications';
    const siteDescription = "Let's create amazing Mobile Applications";
    // const siteLongDescription =
    //   'We transform requirements into working Software Products. We specialize in building web and mobile applications for Small and Medium Businesses.';
    const landingName = 'Mobile Application Development Graphic';

    return (
      <LandingPageLayout
        siteDescription={siteDescription}
        siteTitle={siteTitle}>
        
        <Columns isDesktop>
          <Column isSize={{ desktop: 7 }}>
            <H1>Developing new Software Products in Miami</H1>
            <H2>{siteSubtitle}</H2>
            <Paragraph>{siteDescription}</Paragraph>
            <GraphicContainer>
              <img src={graphic} className="img-graphic" />
            </GraphicContainer>
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
