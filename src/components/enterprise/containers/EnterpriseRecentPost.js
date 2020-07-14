import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Section } from 'bloomer';
import styled from 'styled-components';
import H4 from '../../Typography/H4';
import BlogList from '../../blog-post/BlogList';

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

const EnterpriseRecentPost = () => {
  const data = useStaticQuery(query);
  return (
    <Section>
      <Container id="blog">
        <Wrapper>
          <TitleContainer>
            <H4>Recent Posts</H4>
          </TitleContainer>
          <Container>
            <BlogList data={data.allMarkdownRemark.edges} />
          </Container>
        </Wrapper>
      </Container>
    </Section>
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
                fixed(width: 400, height: 290) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default EnterpriseRecentPost;
