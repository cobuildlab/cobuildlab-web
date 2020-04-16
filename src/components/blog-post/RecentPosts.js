import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column } from 'bloomer';
import PostCard from './PostCard';

const query = graphql`
  query{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3, filter: {fileAbsolutePath: {regex: "/(pages/blog)/.*\\.md$/"}}) {
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
            }
          }
        }
      }
    }
  }
`;

const RecentPosts = () => {
  const data = useStaticQuery(query);

  const items = data.allMarkdownRemark.edges.map(({ node }) => (
    <Column isSize={{ mobile: 12, desktop: 4 }} key={node.fields.slug}>
      <PostCard
        date={node.frontmatter.date}
        tag={node.frontmatter.tags}
        to={node.fields.slug}
        src={node.frontmatter.image.publicURL}
        title={node.frontmatter.title}
        alt={node.frontmatter.title}
        description={node.excerpt}
      />
    </Column>
  ));

  return (
    <Container>
      <Columns isMultiline>{items}</Columns>
    </Container>
  );
};

export default RecentPosts;
