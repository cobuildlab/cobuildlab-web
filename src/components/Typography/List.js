import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const ListCss = css`
  padding-left: 1em;
  padding-top: 1em;
`;

export const List = styled.ul`
  ${ListCss}
`;

export const OrderedList = styled.ol`
  ${ListCss}
`;

export const BaseListItemCss = css`
  margin: 1em 0;
  color: #264a60;
`;

export const ListItemCss = css`
  ${BaseListItemCss}
  &::before {
    content: '\\2022';
    color: #264a60;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const Container = styled.li`
  ${ListItemCss}
`;

const Link = styled.a`
  color: #264a60;
`;

export const ListItem = ({ children, href }) => {
  if (href) {
    return (
      <Container>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
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
