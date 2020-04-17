import React, { Fragment } from 'react';
import { Container, Columns, Column, Footer as BloomerFooter } from 'bloomer';
import Image from '../../components/image';
import GoodFirms from '../../../2020/GoodFirms';
import NewsLetterFormFooter from './NewsLetterFormFooter';
import FooterNavigation from './FooterNavigation';
import ContactUsColumn from './ContactUsColumn';
import { FooterWrapper, FooterLogoContainer } from './FooterComponents';
import CopyRightFooter from './CopyRightFooter';
import ClutchWidget from './ClutchWidget';

import logo from '../../../../assets/images/cobuild-white-logo.png';

const Footer = () => (
  <Fragment>
    <BloomerFooter isPaddingless>
      <FooterWrapper>
        <Container>
          <Columns>
            <Column isSize={{ mobile: 12, desktop: 3 }}>
              <FooterLogoContainer>
                <Image Path={logo} Class="footer-logo" />
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

export default Footer;
