import React from 'react';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from '../components/layout';
import Contact from '../components/Contact';
import { Container, Title, Column, Columns, Hero, HeroBody } from 'bloomer';
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
import { PropTypes } from 'prop-types';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      landingName: 'Cobuild Lab',
    };
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        {/*HEADER*/}
        <Hero isSize="large">
          <HeroBody className="bg-header">
            <Container isFluid className="is-hidden-mobile">
              <Title className="title-logo">Cobuild Lab</Title>
              <Title className="subtitle-logo">Thanks for contacting Us!</Title>
              <Columns>
                <Column isSize="1/2">
                  <Link
                    className="button is-primary is-medium is-rounded"
                    to="/"
                    style={{ marginRight: 15 }}>
                    Go Back
                  </Link>
                  <Link
                    className="button is-primary is-medium is-rounded"
                    to="/blog"
                    style={{ marginRight: 15 }}>
                    Blog
                  </Link>
                </Column>
              </Columns>
            </Container>

            <Container isFluid className="is-hidden-desktop is-hidden-tablet-only">
              <Title className="title-logo-mobile">Cobuild Lab</Title>
              <Title className="subtitle-logo-mobile">Thanks for contacting Us!</Title>
              <Columns>
                <Column isSize="1/2">
                  <Link
                    className="button is-primary is-medium is-rounded"
                    to="/"
                    style={{ marginRight: 15 }}>
                    Go Back
                  </Link>
                  <Link
                    className="button is-primary is-medium is-rounded"
                    to="/blog"
                    style={{ marginRight: 15 }}>
                    Blog
                  </Link>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        {/*HEADER*/}

        {/*Section Where we are? and Write Us! */}
        <Contact />
        {/*Section Where we are? and Write Us! */}
      </Layout>
    );
  }
}

Index.propTypes = {
  location: PropTypes.object.isRequired,
};

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
