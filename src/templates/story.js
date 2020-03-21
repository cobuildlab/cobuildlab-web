import React from 'react';
import { graphql } from 'gatsby';
import { StoryCommon } from './StoryCommon';

const StoryTemplate = (props) => <StoryCommon {...props} />;

export default StoryTemplate;

export const pageQuery = graphql`
  query StoryBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
        twitterHandle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      htmlAst
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
