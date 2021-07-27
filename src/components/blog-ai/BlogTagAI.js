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

const BlogTagAI = ({ activeTag }) => (
  <Container>
    <Tabs isBoxed isFullWidth>
      <TabList>
        <Tab isActive={activeTag === 'all'}>
          <Redirect to="/blog/ai">All</Redirect>
        </Tab>
        <Tab isActive={activeTag === 'financing'}>
          <Redirect to="/blog/ai/financing">Financing</Redirect>
        </Tab>
      </TabList>
    </Tabs>
  </Container>
);

BlogTagAI.propTypes = {
  activeTag: PropTypes.string.isRequired,
};

export default BlogTagAI;
