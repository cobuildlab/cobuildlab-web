import React from 'react';
import { Section as BloomerSection } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Section = styled(BloomerSection)`
  padding-left: 0px;
  padding-right: 0px;
`;

const HomeBanner = () => (
  <Section>
    <StaticImage
      width={4102}
      height={1519}
      src="../../../assets/2022/home/home-banner-desk.png"
      title="Home Banner Desk"
    />
  </Section>
);

export default HomeBanner;
