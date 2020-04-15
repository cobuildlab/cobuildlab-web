import React from 'react';
import { Container } from 'bloomer';
import H2 from '../Typography/H2';
import styled from 'styled-components';
import RecentPost from '../blog-post/RecentPosts';

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4em;
  margin-top: 1.5em;
`;

const HomePagePost = () => (
  <Container>
    <TitleContainer>
      <H2>Recent Post</H2>
    </TitleContainer>
    <RecentPost />
  </Container>
);

export default HomePagePost;
