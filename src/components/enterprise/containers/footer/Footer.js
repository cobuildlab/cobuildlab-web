import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Footer as BloomerFooter } from 'bloomer';
import Img from 'gatsby-image';
import GoodFirms from '../../../2020/GoodFirms';
import NewsLetterFormFooter from './NewsLetterFormFooter';
import FooterNavigation from './FooterNavigation';
import ContactUsColumn from './ContactUsColumn';
import { FooterWrapper, FooterLogoContainer } from './FooterComponents';
import CopyRightFooter from './CopyRightFooter';
import ClutchWidget from './ClutchWidget';

const Footer = ({ isFluid }) => {
  const data = useStaticQuery(query);
  return (
    <Fragment>
      <BloomerFooter isPaddingless>
        <FooterWrapper>
          <Container isFluid={isFluid}>
            <Columns>
              <Column isSize={{ mobile: 12, desktop: 3 }}>
                <FooterLogoContainer>
                  <Img fluid={data.whiteLogo.childImageSharp.fluid} alt="" />
                  <GoodFirms />
                  <ClutchWidget />
                </FooterLogoContainer>
              </Column>
              <Column isSize={{ mobile: 12, desktop: 3 }}>
                <ContactUsColumn />
              </Column>
              <Column isSize={{ mobile: 12, desktop: 3 }}>
                <FooterNavigation />
              </Column>
              <Column isSize={{ mobile: 12, desktop: 3 }}>
                <NewsLetterFormFooter />
              </Column>
            </Columns>
          </Container>
        </FooterWrapper>
      </BloomerFooter>
      <CopyRightFooter />
    </Fragment>
  );
};

const query = graphql`
  query {
    whiteLogo: file(relativePath: { eq: "logos/cobuild-white-logo.png" }) {
      childImageSharp {
        fluid {
          src
          srcSet
          sizes
          base64
          aspectRatio
        }
      }
    }
  }
`;

Footer.defaultProps = {
  isFluid: false,
};

Footer.propTypes = {
  isFluid: PropTypes.bool,
};

export default Footer;
