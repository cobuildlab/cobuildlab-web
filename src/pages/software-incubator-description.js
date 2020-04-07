import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Container, Section, Hero, HeroBody, HeroHeader, Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingHeader from '../components/2020/LandingHeader';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import BannerBackground from '../components/2020/BannerBackground';
import H1 from '../components/Typography/H1';
import H2 from '../components/Typography/H2';
import Paragraph from '../components/Typography/Paragraph';

// RESOURCES
import badge1 from '../resources/badges1.png';
import badge2 from '../resources/badges2.png';
import badge3 from '../resources/badges3.png';
import badge4 from '../resources/badges4.png';

import YouTubeVideo from '../components/YouTubeVideo';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f4f6fb !important;
  overflow: hidden;
`;

const Box = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 30px #264a6017;
  width: 100%;
  heigth: 100%;
  padding: 1.25rem;
`;

const StyledSection = styled(Section)`
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1rem;
`;

const YouTubeVideoContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

const BannerWrapper = styled.div`
  position: relative;
`;

const StyledH1 = styled(H1)`
  font-size: calc(32px + (50 - 37) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: 1.5rem;
`;

const StyledH2 = styled(H2)`
  font-size: calc(26px + (32 - 26) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: 1.5rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: calc(25px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
`;

export default class SoftwareIncDescription extends Component {
  render() {
    const siteTitle = 'Developing new Software Products in Miami';
    const siteSubtitle = 'We incubate new Software Products';
    const siteDescription =
      'We help entrepreneurs create amazing Products with our streamlined, lean and phased Software Development Process. Since day one, our technique is focused on early results and transparent communication.';
    const landingName = 'Software Incubator Description';

    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Wrapper>
          <Hero>
            <HeroHeader>
              <LandingHeader />
            </HeroHeader>
            <HeroBody isPaddingless>
              <BannerWrapper>
                <BannerBackground />
              </BannerWrapper>
            </HeroBody>
          </Hero>
          <Container>
            <StyledSection>
              <Columns isDesktop>
                <Column isSize={{ desktop: 7 }}>
                  <StyledH1>Developing new Software Products in Miami</StyledH1>
                  <StyledH2>{siteSubtitle}</StyledH2>
                  <StyledParagraph>{siteDescription}</StyledParagraph>
                  <YouTubeVideoContainer>
                    <YouTubeVideo id={'AlU5h2xrQ5M'} />
                  </YouTubeVideoContainer>
                  <BadgeIndustry />
                </Column>
                <Column isSize={{ desktop: 5 }}>
                  <Box>
                    <div className="has-text-centered">
                      <img src={badge1} className="badge" />
                      <img src={badge2} className="badge" />
                      <img src={badge3} className="badge" />
                      <img src={badge4} className="badge-google" />
                    </div>
                    <NewLandingForm landingName={landingName} />
                  </Box>
                </Column>
              </Columns>
            </StyledSection>
          </Container>
        </Wrapper>
      </Fragment>
    );
  }
}
