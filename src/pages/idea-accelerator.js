import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import 'react-toastify/dist/ReactToastify.min.css';
import LayoutLanding from '../components/layoutLanding';
import FormContact from '../components/FormContact';
import { Container, Title, Column, Columns, Hero, HeroBody } from 'bloomer';

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const landingName = 'Idea Accelerator';

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
                  <Title className="subtitle-logo">{landingName}</Title>
                  <a className="button is-primary is-medium is-rounded">
                    READ MORE
                  </a>
                </Column>
                <Column isSize="1/2">
                  <FormContact landingName={landingName}/>
                </Column>
              </Columns>
            </Container>

            <Container
              isFluid
              className="is-hidden-desktop is-hidden-tablet-only"
            >
              <Columns>
                <Column isSize="1/2">
                  <Title className="title-logo-mobile" hasTextAlign="centered">
                    Cobuild Lab
                  </Title>
                  <Title
                    className="subtitle-logo-mobile"
                    hasTextAlign="centered"
                  >
                    {landingName}
                  </Title>
                  <a className="button is-primary is-small is-rounded">
                    READ MORE
                  </a>
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
