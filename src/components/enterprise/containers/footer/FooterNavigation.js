import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = styled(AnchorLink)`
  color: #fff;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const FooterNavigation = () => (
  <ul>
    <li>
      <Link href="#banner">Home</Link>
    </li>
    <li>
      <Link href="#services">Service</Link>
    </li>
    <li>
      <Link href="#about">About</Link>
    </li>
    <li>
      <Link href="#unique-value-props">Our Main Mission</Link>
    </li>
    <li>
      <Link href="#video">Video</Link>
    </li>
    <li>
      <Link href="#skills">Skills</Link>
    </li>
    <li>
      <Link href="#project">Project</Link>
    </li>
    <li>
      <Link href="#enterprise-css">Case Studies</Link>
    </li>
    <li>
      <Link href="#testimonials">Testimonials</Link>
    </li>
    <li>
      <Link href="#contact">Contact</Link>
    </li>
  </ul>
);

export default FooterNavigation;
