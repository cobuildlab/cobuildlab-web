import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Container, Hero, HeroBody, HeroHeader } from 'bloomer';
import LandingHeader from './LandingHeader';
import BannerBackground from './BannerBackground';
import Footer from '../enterprise/containers/footer';
import CopyRight from '../enterprise/containers/copyright_text';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
        <CopyRight />
      </Fragment>
    );

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Wrapper>
        <Hero>
          <HeroHeader>
            <LandingHeader />
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
