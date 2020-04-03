import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Section, Hero, HeroBody, HeroHeader, Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingHeader from '../components/2020/LandingHeader';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import Typography from '../components/2020/Typography';
import BannerBackground from '../components/2020/BannerBackground';

// RESOURCES
import badge1 from '../resources/badges1.png';
import badge2 from '../resources/badges2.png';
import badge3 from '../resources/badges3.png';
import badge4 from '../resources/badges4.png';

import YouTubeVideo from '../components/YouTubeVideo';
import styled from 'styled-components';

// TYPOGRAPHY CONFIG
const title = {
  default: {
    level: 6,
    fontWeight: 'bold',
  },
  lg: {
    level: 3,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    level: 7,
    fontWeight: 'bold',
  },
  lg: {
    level: 6,
    fontWeight: 'bold',
  },
};

const paragraph = {
  default: {
    level: 9,
    fontWeight: 'normal',
  },
  lg: {
    level: 8,
    fontWeight: 'normal',
  },
};

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
  padding-left: 2rem;
  padding-right: 2rem;
`;

const YouTubeVideoContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

const BannerWrapper = styled.div`
  position: relative;
`;

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
          <StyledSection>
            <Columns isDesktop>
              <Column isSize={{ desktop: 8 }}>
                <Typography tag="h1" size={title}>
                  Developing new Software Products in Miami
                </Typography>
                <Typography tag="h2" size={subTitle}>
                  {siteSubtitle}
                </Typography>
                <Typography tag="p" size={paragraph}>
                  {siteDescription}
                </Typography>
                <YouTubeVideoContainer>
                  <YouTubeVideo id={'AlU5h2xrQ5M'} />
                </YouTubeVideoContainer>
                <BadgeIndustry />
              </Column>
              <Column isSize={{ desktop: 4 }}>
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
        </Wrapper>
      </Fragment>
    );
  }
}

export default AppsDevDescription;