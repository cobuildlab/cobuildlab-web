import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import {
  FooterTitleContainer,
  FooterTitle,
  FooterListItem,
  FooterColumnContent,
} from './FooterComponents';

const LinkItem = styled(Link)`
  color: #fff;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const FooterNavigation = () => (
  <FooterColumnContent>
    <FooterTitleContainer>
      <FooterTitle>Explorer</FooterTitle>
    </FooterTitleContainer>
    <ul>
      <FooterListItem>
        <LinkItem to="/blog">Blog</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/blog/ai">Blog AI</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/price-calculator">Price Calculator</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/customer-success-stories">Customer Success Stories</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/team">Our Team</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/portfolio">Porftolio</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/services">Services</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/careers">Careers</LinkItem>
      </FooterListItem>
      <FooterListItem>
        <LinkItem to="/referrals">Referrals</LinkItem>
      </FooterListItem>
    </ul>
  </FooterColumnContent>
);

export default FooterNavigation;
