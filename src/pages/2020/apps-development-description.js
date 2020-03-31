import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { 
  Container,
  Hero, HeroBody, Content, 
  Columns, Column,
  Title, Subtitle 
} from 'bloomer';

// COMPONENTS
import BadgeIndustry from '../../components/2020/BadgeIndustry';
import NewLandingForm from '../../components/2020/NewLandingForm';
 
// RESOURCES
import logo from '../../resources/cobuildlab.png';
import badge1 from '../../resources/badges1.png';
import badge2 from '../../resources/badges2.png';
import badge3 from '../../resources/badges3.png';
import badge4 from '../../resources/badges4.png';

import YouTubeVideo from '../../components/YouTubeVideo';

class AppsDevDescription extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  }
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
        <Hero class="is-fullheight">
          <HeroBody className="p-0">
            <Content>
              
              <div className="bg-header-landing">
                <div>
                  <img src={logo} className="logo" alt="logo"/>
                </div>
                <Columns>
                  <Column isSize={{ tablet: 12, desktop: 7 }}>
                    <Title className="title-squeezing">
                      Developing new Software Products in Miami
                    </Title>
                    <Subtitle className="subtitle-squeezing">{siteSubtitle}</Subtitle>
                    <p className="text-description">{siteDescription}</p>
                  </Column>

                  <Column isSize={{ tablet: 12, desktop: 5 }}>
                    <YouTubeVideo id={'AlU5h2xrQ5M'} />
                  </Column>
                </Columns>
                
                <Container className="is-centered">
                  <BadgeIndustry />
                </Container>
              </div>

              <Container className="is-centered" style={{ marginTop: '1rem' }}>
                <Columns isDesktop style={{ alignItems: 'center' }}>
                  <Column>
                    <div className="has-text-centered">
                      <img src={badge1} className="badge" />
                      <img src={badge2} className="badge" />
                    </div>
                    <div className="has-text-centered">
                      <img src={badge3} className="badge" />
                      <img src={badge4} className="badge-google" />
                    </div>
                  </Column>
                  <Column>
                    <NewLandingForm />
                  </Column>
                </Columns>
              </Container>

            </Content>
          </HeroBody>
        </Hero>
      </Fragment>
    );
  }
}
 
export default AppsDevDescription;
