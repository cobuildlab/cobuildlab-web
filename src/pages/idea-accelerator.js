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
  render() {
    const siteTitle = 'Cobuild: Idea Accelerator in Miami';
    const siteDescription = 'We accelerate Ideas in Products';
    const landingName = 'Cobuild: Idea Accelerator';

    return (
      <LayoutLanding location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        {/*HEADER*/}
        <Hero className="is-fullheight">
          <HeroBody className="bg-header">
            <Container isFluid className="is-hidden-mobile">
              <Columns>
                <Column isSize="1/2" className="space-title">
                  <Title className="title-logo">Cobuild Lab</Title>
                  <Subtitle className="subtitle-logo-landing">{landingName}</Subtitle>
                  <Subtitle isSize={4}>
                    <h3>
                      Cobuild Is the process of transforming an idea in a sustainable business, through the combination
                      and collaboration of the areas of Lean Entrepreneurship, Business Strategy, Technological
                      Innovation, and Exponential Growth.
                    </h3>
                    <br/>
                  </Subtitle>
                </Column>
                <Column isSize="1/2">
                  <FormContact landingName={landingName}/>
                </Column>
              </Columns>
            </Container>

            <Container
              isFluid
              className="is-hidden-desktop is-hidden-tablet-only"
              style={{backgroundColor:"white", padding:"5px"}}
            >
              <Columns>
                <Column isSize="1/2">
                  <Title className="title-logo-mobile" hasTextAlign="centered">
                    Cobuild Lab
                  </Title>
                  <Subtitle className="subtitle-logo-mobile" hasTextAlign="centered">
                    <strong>
                      {landingName}
                    </strong>
                  </Subtitle>
                  <Subtitle isSize={4}>
                    <h3>
                      Cobuild Is the process of transforming an idea in a sustainable business, through the combination
                      and collaboration of the areas of Lean Entrepreneurship, Business Strategy, Technological
                      Innovation, and Exponential Growth.
                    </h3>
                  </Subtitle>
                </Column>
                <Column isSize="1/2">
                  <FormContact landingName={landingName}/>
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
