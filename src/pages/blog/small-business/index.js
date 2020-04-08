import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../../../components/layout';
import BlogIndexAlt from '../../../components/BlogIndexAlt';

class BusinessIndex extends React.Component {
  render() {
    const siteTitle = 'The Blog for Software Entrepreneurs';
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <BlogIndexAlt activeTab="small-business" siteTitle={siteTitle} posts={posts} />
      </Layout>
    );
  }
}

export default BusinessIndex;

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
      limit: 20
      filter: { frontmatter: { tags: { regex: "/Small Business/" } }, fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"} }
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
