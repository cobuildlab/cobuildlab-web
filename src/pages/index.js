import React, { PureComponent } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { HeroHeader, HeroBody, Hero, Section } from 'bloomer';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-modal-video/scss/modal-video.scss';
import 'bulma';

import Layout from '../components/2020/Layout';
import Header from '../components/2020/Layout/Header';
import HeroBodyContent from '../components/2020/Hero';
import Service from '../components/2020/Service';
import BusinessValue from '../components/2020/BusinessValue';
import CustomerSuccessStories from '../components/2020/CustomerSuccessStories';
import OurTeam from '../components/2020/OurTeam';
import Contact from '../components/2020/Contact';
import Newsletter from '../components/2020/NewsLetter';

export default class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showVideoModal: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      showVideoModal: true,
    });
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');
    //TODO move this request to Customer Succes Stories
    // const posts = get(this, 'props.data.allMarkdownRemark.edges');
    // const customerSuccessStories = get(this, 'props.data.customerSuccessStories.edges');
    // const siteKey = process.env.RECAPTCHA_SITEKEY;

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Hero>
          <HeroHeader>
            <Header />
          </HeroHeader>
          <HeroBody>
            <HeroBodyContent />
          </HeroBody>
        </Hero>
        <Section>
          <Service />
        </Section>
        <Section>
          <BusinessValue />
        </Section>
        <Section className="section-not-padding">
          <CustomerSuccessStories />
        </Section>
        <Section className="section-not-padding">
          <OurTeam />
        </Section>
        <Section>
          <Contact />
        </Section>
        <Section className="section-bg-white">
          <Newsletter />
        </Section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: {fileAbsolutePath: {regex: "/(pages/blog)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 480) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
