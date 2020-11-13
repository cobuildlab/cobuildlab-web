import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import 'bulma/css/bulma.css';
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

class NotFoundPage extends React.Component {
  render() {
    const siteTitle = 'Not Found | Cobuild Lab';
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

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
