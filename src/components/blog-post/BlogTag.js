import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Tabs as BloomerTabs, TabList, Tab } from 'bloomer';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 1rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Redirect = styled(Link)`
  .is-active & {
    border-color: #dbdbdb;
    border-bottom-color: transparent !important;
    background-color: transparent;
  }
`;

const Tabs = styled(BloomerTabs)`
  &::-webkit-scrollbar {
    height: 3px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e76c29;
  }
`;

const BlogTag = ({ activeTag }) => (
  <Container>
    <Tabs isBoxed isFullWidth>
      <TabList>
        <Tab isActive={activeTag === 'all'}>
          <Redirect to="/blog">All</Redirect>
        </Tab>
        <Tab isActive={activeTag === 'education'}>
          <Redirect to="/blog/education">Education</Redirect>
        </Tab>
        <Tab isActive={activeTag === 'news'}>
          <Redirect to="/blog/news">News</Redirect>
        </Tab>
        <Tab isActive={activeTag === 'small-business'}>
          <Redirect to="/blog/small-business">Small Business</Redirect>
        </Tab>
        <Tab isActive={activeTag === 'miami'}>
          <Redirect to="/blog/miami">Miami</Redirect>
        </Tab>
        <Tab isActive={activeTag === 'tools'}>
          <Redirect to="/blog/tools">Tools</Redirect>
        </Tab>
      </TabList>
    </Tabs>
  </Container>
);

BlogTag.propTypes = {
  activeTag: PropTypes.string.isRequired,
};

export default BlogTag;
