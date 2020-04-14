import React from 'react';
import { mapMarker, envelopeOpen, volumeControlPhone } from 'react-icons-kit/fa';
import PreviewIcon from '../../components/icon';
import {
  FooterTitleContainer,
  FooterTitle,
  FooterListItem,
  FooterColumnContent,
  FooterText,
} from './FooterComponents';

const ContactUsColumn = () => (
  <FooterColumnContent>
    <FooterTitleContainer>
      <FooterTitle>Contact Us</FooterTitle>
    </FooterTitleContainer>
    <ul>
      <FooterListItem>
        <span>
          <PreviewIcon icon={mapMarker} />
        </span>
        <FooterText>66 W Flagler St #900, Miami, FL 33130</FooterText>
      </FooterListItem>
      <FooterListItem>
        <span>
          <PreviewIcon icon={envelopeOpen} />
        </span>
        <FooterText>contact@cobuildlab.com</FooterText>
      </FooterListItem>
      <FooterListItem>
        <span>
          <PreviewIcon icon={volumeControlPhone} />
        </span>
        <FooterText>+1 (786) 991-3467</FooterText>
      </FooterListItem>
    </ul>
  </FooterColumnContent>
);

export default ContactUsColumn;
