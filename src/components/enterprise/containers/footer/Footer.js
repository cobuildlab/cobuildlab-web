import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Footer as BloomerFooter } from 'bloomer';
import GoodFirms from '../../../2020/GoodFirms';
import NewsLetterFormFooter from './NewsLetterFormFooter';
import FooterNavigation from './FooterNavigation';
import ContactUsColumn from './ContactUsColumn';
import { FooterWrapper, FooterLogoContainer } from './FooterComponents';
import CopyRightFooter from './CopyRightFooter';
import ClutchWidget from './ClutchWidget';
import B2BCompany from './B2BCompany';
import logo from '../../../../assets/images/logos/cobuild-lab-white-logo.svg';

const Footer = ({ isFluid }) => (
  <Fragment>
    <BloomerFooter isPaddingless>
      <FooterWrapper>
        <Container isFluid={isFluid}>
          <Columns>
            <Column isSize={{ mobile: 12, desktop: 3 }}>
              <FooterLogoContainer>
                <img src={logo} alt="" />
                <GoodFirms />
                <ClutchWidget />
                <B2BCompany />
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

Footer.defaultProps = {
  isFluid: false,
};

Footer.propTypes = {
  isFluid: PropTypes.bool,
};

export default Footer;
