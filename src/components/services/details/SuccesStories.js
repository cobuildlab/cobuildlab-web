import React, { useCallback } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { Columns, Column, Card } from 'bloomer';
import styled from 'styled-components';
import H4 from '../../Typography/H4';
import Img from 'gatsby-image';

const query = graphql`
  query {
    allCustomerSuccessStoriesDataJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid(webpQuality: 72) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          slug
          title
          description
        }
      }
    }
  }
`;

const Title = styled(H4)`
  text-align: left;
  font-weight: 100;
  font-family: 'Lato-Light' !important;
  width: 351px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  padding-top: 8px;
`;

const CardStyled = styled(Card)`
  max-height: 565px;
  min-height: 520px;
  box-shadow: 0px 10px 20px #0000001a;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 14px;
`;

const Image = styled(Img)`
  height: 300px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const Container = styled.div`
  width: 351px;
  overflow: hidden;
`;

const Paragraph = styled.p`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  color: #264a60;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 95px;
`;

const Readmore = styled.p`
  font-size: 17px;
  font-family: 'Lato-bold' !important;
  text-align: right;
  padding-left: 10px;
  color: #e76c29;
  padding-right: 10px;
  margin-bottom: 14px;
  position: relative;
  right: 29px;
  top: -10px;
  cursor: pointer;
`;

const SuccessStories = () => {
  const data = useStaticQuery(query);
  let random_number = Math.floor(Math.random() * 11);
  const items = data.allCustomerSuccessStoriesDataJson.edges
    .slice(random_number, random_number + 3)
    .map(({ node }) => {
      const handleClick = useCallback(() => {
        navigate(node.slug);
      }, [node.slug]);

      return (
        <Column isSize={{ mobile: 12, desktop: 4 }} key={node.title}>
          <CardStyled>
            <>
              <Image fluid={node.image.childImageSharp.fluid} alt="" />
            </>
            <Container>
              <Title>{node.title}</Title>
            </Container>
            <Paragraph>{node.description}</Paragraph>
            <Readmore onClick={handleClick}>Read More</Readmore>
          </CardStyled>
        </Column>
      );
    });

  return <Columns isCentered>{items}</Columns>;
};

export default SuccessStories;
