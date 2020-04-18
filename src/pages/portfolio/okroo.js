import React from 'react';
import Helmet from 'react-helmet';
import { Container, Columns, Column, HeroHeader, HeroBody, Hero, Section } from 'bloomer';
import styled from 'styled-components';

import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import BannerBackground from '../../components/2020/BannerBackground';

import HeroTitle from '../../components/portfolio/HeroTitle';
import H6 from '../../components/Typography/H6';
import PortfolioDescription from '../../components/portfolio/PortfolioDescription';
import PortfolioCategory from '../../components/portfolio/PortfolioCategory';
import OtherProjects from '../../components/portfolio/OtherProjects';

const siteTitle = 'Portfolio | Cobuild Lab';

const Wrapper = styled.div`
  position: relative;
`;

const Portfolio = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: 'Okroo Portfolio' }]}
      title={siteTitle}
    />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <Wrapper>
          <BannerBackground />
          <Container>
            <HeroTitle />
          </Container>
        </Wrapper>
      </HeroBody>
      <Section isPaddingless>
        <Container>
          <Columns>
            <Column isSize={{ mobile: 12, desktop: 3 }}>
              <H6>Category</H6>
              <PortfolioCategory type="app" />
              <H6>More Projects</H6>
              <OtherProjects current="Okroo" />
            </Column>
            <Column isSize={{ mobile: 12, desktop: 9 }}>
              <PortfolioDescription title="Okroo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit
                fermentum tellus, rutrum eleifend tortor fermentum non. Donec a sollicitudin erat,
                non iaculis nunc. Nullam fermentum, turpis eu elementum ullamcorper, augue diam
                varius turpis, eu sollicitudin mi augue eu sem. Vivamus eu molestie turpis, et
                molestie leo. Integer convallis porttitor viverra. Nulla tellus turpis, elementum
                vel condimentum consectetur, rutrum in dolor. Nulla finibus vulputate dolor. Sed
                dignissim mi purus, sed iaculis mauris pulvinar ut. Duis consectetur elit sit amet
                dignissim placerat. Phasellus finibus lacus ante, facilisis imperdiet justo
                venenatis ac. Morbi facilisis dapibus
                <br />
                <br />
                metus, fringilla consectetur lectus sollicitudin quis. Sed condimentum volutpat
                nisl, vitae maximus turpis bibendum vel. Vivamus congue suscipit efficitur. Etiam
                tempor commodo convallis. Donec rutrum viverra venenatis. Etiam risus purus,
                ullamcorper non sollicitudin sit amet, tempor nec libero. In sit amet eros quis
                neque pharetra finibus. In hac habitasse platea dictumst. Aenean ac odio tempor,
                placerat turpis non, maximus massa. Nunc porta ac risus id sollicitudin. Phasellus
                ut risus nulla. Fusce ac velit vitae odio elementum porttitor. Aliquam iaculis ac
                lectus a aliquam. Maecenas ullamcorper placerat pulvinar. In dapibus ante quis mi
                pulvinar ornare. Sed ut dapibus nisl.
              </PortfolioDescription>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Hero>
  </Layout>
);

export default Portfolio;
