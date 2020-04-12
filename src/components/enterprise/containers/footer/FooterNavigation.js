import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LinkItem = styled(Link)`
  color: #fff;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const FooterNavigation = () => (
  <ul>
    <li>
      <LinkItem to="/services">Services</LinkItem>
    </li>
    <li>
      <LinkItem to="/customer-success-stories">Customer Success Stories</LinkItem>
    </li>
    <li>
      <LinkItem to="/blog">Blog</LinkItem>
    </li>
  </ul>
);

export default FooterNavigation;
