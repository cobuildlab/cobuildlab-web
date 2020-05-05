import React, { Fragment } from 'react';
import { Container, Hero, HeroBody, HeroHeader } from 'bloomer';
import BannerBackground from './BannerBackground';
import Footer from '../enterprise/containers/footer/Footer';
import NewsletterModal from '../NewsletterModal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './header/Header';
import SeoMetaTags from '../SeoMetaTags';

const Wrapper = styled.div`
  background-color: #f4f6fb !important;
  overflow: hidden;
`;

const BannerWrapper = styled.div`
  position: relative;
`;

const StyledContainer = styled(Container)`
  position: relative;
  padding-top: 4.5rem;
  padding-left: 1.5rem;
  padding-right: 1rem;
  padding-bottom: 3.5rem;
`;

const LandingPageLayout = ({ siteDescription, siteTitle, withFooter, children }) => {
  let footer = null;

  if (withFooter)
    footer = (
      <Fragment>
        <Footer />
      </Fragment>
    );

  return (
    <Fragment>
      <SeoMetaTags title={siteTitle} description={siteDescription} />
      <NewsletterModal />
      <Wrapper>
        <Hero>
          <HeroHeader>
            <Header />
          </HeroHeader>
          <HeroBody isPaddingless>
            <BannerWrapper>
              <BannerBackground />
            </BannerWrapper>
          </HeroBody>
        </Hero>
        <StyledContainer>{children}</StyledContainer>
        {footer}
      </Wrapper>
    </Fragment>
  );
};

LandingPageLayout.propTypes = {
  siteDescription: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  withFooter: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

LandingPageLayout.defaultProps = {
  withFooter: false,
};

export default LandingPageLayout;
