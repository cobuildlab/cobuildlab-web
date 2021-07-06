import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'bloomer';
import H2 from '../Typography/H2';
import styled from 'styled-components';
import BlogList from '../blog-post/BlogList';

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom 5rem;
  @media screen and (max-width: 768px){
    padding-top: 0;
    padding-bottom 0;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4em;
  margin-top: 1.5em;
`;

const HomePagePost = () => {
  const data = useStaticQuery(query);
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <H2>Recent Posts</H2>
        </TitleContainer>
        <Container>
          <BlogList data={data.allMarkdownRemark.edges} />
        </Container>
      </Wrapper>
    </Container>
  );
};

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
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`;

export default HomePagePost;
