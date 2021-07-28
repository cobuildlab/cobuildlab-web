import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Tabs as BloomerTabs, TabList, Tab } from 'bloomer';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Tabs = styled(BloomerTabs)`
  &::-webkit-scrollbar {
    height: 3px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e76c29;
`;

const Redirect = styled(Link)`
  .container ${Tabs}.tabs.is-boxed li.is-active & {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 39%,
      rgba(255, 255, 255, 0) 100%
    );
    border-bottom-color: #f4f6fb !important;
  }

  .container ${Tabs}.tabs.is-boxed &:hover {
    color: #e76c29 !important;
    background-color: inherit;
    border-bottom-color: #e76c29 !important;
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
