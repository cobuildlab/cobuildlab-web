import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import 'react-toastify/dist/ReactToastify.min.css';
import LayoutLanding from '../components/layoutLanding';
import FormContact from '../components/FormContact';
import { Container, Title, Column, Columns, Hero, HeroBody, Subtitle } from 'bloomer';
import 'bulma';
import '../assets/fonts/Lato-Black.ttf';
import '../assets/fonts/Lato-BlackItalic.ttf';
import '../assets/fonts/Lato-Bold.ttf';
import '../assets/fonts/Lato-BoldItalic.ttf';
import '../assets/fonts/Lato-Hairline.ttf';
import '../assets/fonts/Lato-HairlineItalic.ttf';
import '../assets/fonts/Lato-Italic.ttf';
import '../assets/fonts/Lato-Light.ttf';
import '../assets/fonts/Lato-LightItalic.ttf';
import '../assets/fonts/Lato-Regular.ttf';

class Index extends React.Component {

  componentDidMount() {
    window.location.replace("https://www.meetup.com/Software-Developers-of-Florida/");
  }

  render() {
    return (
      <LayoutLanding location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'Meetup: Software Developers of Florida' }]}
          title={'Meetup: Software Developers of Florida'}
        />

        {/*HEADER*/}
        <Hero className="is-fullheight">
          <HeroBody className="bg-header">
            <Container isFluid className="is-hidden-mobile">
              <Columns>
                <Column isSize="1" className="space-title">
                  <Title className="title-logo">Cobuild Lab</Title>
                  <Subtitle className="subtitle-logo-landing">
                    Meetup: Software Developers of Florida
                  </Subtitle>
                  <Subtitle isSize={4}>
                    <h3>
                      The Software Developers of Florida is here to demonstrate the power of programming languages , technologies and frameworks to people of Florida.

                      Developers from entry level to Senior Level , from team leaders to managers , this group is open to every one working in software tech industry .

                      IMPORTANT: This group has been created as a resource for developers. Help people to learn new technologies very fast, please contact us for the details.
                    </h3>
                    <br />
                    <a href="https://www.meetup.com/Software-Developers-of-Florida/">Go to Meetup Page</a>
                  </Subtitle>
                </Column>
                <Column isSize="1/2">
                </Column>
              </Columns>
            </Container>

            <Container
              isFluid
              className="is-hidden-desktop is-hidden-tablet-only"
              style={{ backgroundColor: "white", padding: "5px" }}
            >
              <Columns>
                <Column isSize="1">
                  <Title className="title-logo-mobile" hasTextAlign="centered">
                    Cobuild Lab
                  </Title>
                  <Subtitle className="subtitle-logo-mobile" hasTextAlign="centered">
                    <strong>
                      Meetup: Software Developers of Florida
                    </strong>
                  </Subtitle>
                  <Subtitle isSize={4}>
                    <h3>
                      The Software Developers of Florida is here to demonstrate the power of programming languages , technologies and frameworks to people of Florida.

                      Developers from entry level to Senior Level , from team leaders to managers , this group is open to every one working in software tech industry .

                      IMPORTANT: This group has been created as a resource for developers. Help people to learn new technologies very fast, please contact us for the details.
                    </h3>
                    <br />
                    <a href="https://www.meetup.com/Software-Developers-of-Florida/">Go to Meetup Page</a>
                  </Subtitle>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        {/*HEADER*/}
      </LayoutLanding>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
