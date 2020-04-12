import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 1em;
  padding-top: 1em;
`;

const Container = styled.li`
  margin: 1em 0;
  color: #264a60;
  &::before {
    content: '\\2022';
    color: red;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export const ListItem = ({ children, href }) => {
  if (href) {
    return (
      <Container>
        <a
          href="https://www.linkedin.com/in/alesanchezr/"
          target="_blank"
          rel="noopener noreferrer">
          {children}
        </a>
      </Container>
    );
  }

  return <Container>{children}</Container>;
};

ListItem.defaultProps = {
  href: '',
};

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  href: PropTypes.string,
};
