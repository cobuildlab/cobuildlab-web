import React from 'react';
import { Container, Columns, Column, Footer as SectionFooter, Input } from 'bloomer';
import {
  paperPlane,
  mapMarker,
  envelopeOpen,
  volumeControlPhone,
  facebookSquare,
  twitterSquare,
  linkedinSquare,
} from 'react-icons-kit/fa';
import { Title, Description } from '../../components/title';
import PreviewIcon from '../../components/icon';
import Image from '../../components/image';
import logo from '../../../../assets/images/cobuild-white-logo.png';
import { arrowRightCircle } from 'react-icons-kit/feather/arrowRightCircle';
import './footer.scss';

const Footer = () => {
  return (
    <SectionFooter isPaddingless>
      <div className="footer-wrapper">
        <Container>
          <div className="footer-content-wrapper">
            <Columns>
              <Column  isSize={{ mobile: 8, desktop: 4 }}>
                <div className="footer-logo-wrapper">
                  <Image Path={logo} Class="footer-logo" />
                  <Description
                    Class="footer-dec"
                    Name="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
                  />
                </div>
              </Column>
              <Column isSize={{ mobile: 8, desktop: 3 }}>
                <div className="footer-contact-us">
                  <Title Class="footer-title" Name="Contact Us" />
                  <div className="footer-details-link">
                    <ul>
                      <li>
                        <a href="/">
                          <span>
                            <PreviewIcon icon={mapMarker} />
                          </span>
                          <Title
                            Class="footer-link"
                            Name="66 W Flagler St #900, Miami, FL 33130"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>
                            <PreviewIcon icon={envelopeOpen} />
                          </span>
                          <Title Class="footer-link footer-email" Name="contact@cobuildlab.com" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>
                            <PreviewIcon icon={volumeControlPhone} />
                          </span>
                          <Title Class="footer-link" Name="+1 (786) 991-3467" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Column>
              <Column isSize={{ mobile: 6, desktop: 2}}>
                <div className="footer-about-us">
                  <div className="footer-about-outer">
                    <Title Class="footer-title" Name="About Us" />
                    <div className="footer-details-link">
                      <ul>
                        <li>
                          <a href="/">
                            <PreviewIcon icon={arrowRightCircle} />
                            <Title Class="footer-link footer-arrow" Name="Home" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <PreviewIcon icon={arrowRightCircle} />
                            <Title Class="footer-link footer-arrow" Name="About Us" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <PreviewIcon icon={arrowRightCircle} />
                            <Title Class="footer-link footer-arrow" Name="Features" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <PreviewIcon icon={arrowRightCircle} />
                            <Title Class="footer-link footer-arrow" Name="Services" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <PreviewIcon icon={arrowRightCircle} />
                            <Title Class="footer-link footer-arrow" Name="Contact" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Column>
              <Column isSize={{ mobile: 12, desktop: 3 }} >
                <div className="footer-newsletter">
                  <Title Class="footer-title" Name="Stay with us" />
                  <div className="form-group">
                    <Input type="text" placeholder="Enter email"  className="input-search"/>
                    <span className="search-icon gradient-color">
                      <PreviewIcon icon={paperPlane} />
                    </span>
                  </div>
                  <Title Class="footer-social-title" Name="Social icon" />
                  <ul className="social-wrapper">
                    <li>
                      <a target="_blank" href="https://facebook.com/cobuildlab">
                        <span>
                          <PreviewIcon icon={facebookSquare} />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/cobuildlab">
                        <span>
                          <PreviewIcon icon={twitterSquare} />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://linkedin.com/company/cobuildlab">
                        <span>
                          <PreviewIcon icon={linkedinSquare} />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Column>
            </Columns>
          </div>
        </Container>
      </div>
    </SectionFooter>
  );
};

export default Footer;
