import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { clockO } from 'react-icons-kit/fa/clockO';

const Container = styled.span`
  color: #fff;
  display: flex;
`;

const IconContainer = styled.span`
  margin-right: 0.5rem;
`;

const BlogPostCardDate = ({ date }) => (
  <Container>
    <IconContainer>
      <Icon icon={clockO} size={20} />
    </IconContainer>
    {date}
  </Container>
);

BlogPostCardDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default BlogPostCardDate;
