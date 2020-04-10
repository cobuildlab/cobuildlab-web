import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import Testimonial from '../components/Testimonial';
import YouTubeVideo from '../components/YouTubeVideo';

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
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  & img {
    width: 300px;
    height: 300px;
  }
`;

export default class SoftwareDevGraphic extends Component {
  render() {
    const siteTitle = 'Developing new Software Products in Miami';
    const siteSubtitle = 'We transform ideas into Software Products';
    const siteDescription =
      'We transform requirements into working software. We specialize in building web and mobile solutions for Small and Medium Businesses.';
    const landingName = 'Software Development Graphic';

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
          <Column  isSize={{ desktop: 6 }}>
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
