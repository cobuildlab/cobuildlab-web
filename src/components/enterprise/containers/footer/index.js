import React from 'react';
import { Container, Columns, Column, Footer as SectionFooter } from 'bloomer';
import {
  mapMarker,
  envelopeOpen,
  volumeControlPhone,
  facebookSquare,
  twitterSquare,
  linkedinSquare,
} from 'react-icons-kit/fa';
import PreviewIcon from '../../components/icon';
import Image from '../../components/image';
import logo from '../../../../assets/images/cobuild-white-logo.png';
import GoodFirms from '../../../2020/GoodFirms';
import Typography from '../../../2020/Typography';
import NewsLetterForm from '../../../2020/NewsLetterForm';
import FooterNavigation from './FooterNavigation';

import './footer.scss';
import { useScript } from '../../../../utils/hooks';

const Footer = () => {
  const [loaded, error] = useScript('https://widget.clutch.co/static/js/widget.js');

  return (
    <SectionFooter isPaddingless>
      <div className="footer-wrapper">
        <Container>
          <div className="footer-content-wrapper">
            <Columns>
              <Column isSize={{ mobile: 8, desktop: 3 }}>
                <div className="footer-logo-wrapper">
                  <Image Path={logo} Class="footer-logo" />
                  <GoodFirms />
                  CLUTCH:
                  {loaded && (
                    <div
                      className="clutch-widget"
                      data-url="https://widget.clutch.co"
                      data-widget-type="1"
                      data-height="500"
                      data-darkbg="1"
                      data-clutchcompany-id="615903"></div>
                  )}
                  {error ? error : ''}
                </div>
              </Column>
              <Column isSize={{ mobile: 8, desktop: 3 }}>
                <div className="footer-contact-us">
                  <Typography className="footer-title" tag="h6">
                    Contact Us
                  </Typography>
                  <div className="footer-details-link">
                    <ul>
                      <li>
                        <a href="/">
                          <span>
                            <PreviewIcon icon={mapMarker} />
                          </span>
                          <Typography className="footer-link" tag="p">
                            66 W Flagler St #900, Miami, FL 33130
                          </Typography>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>
                            <PreviewIcon icon={envelopeOpen} />
                          </span>
                          <Typography className="footer-link footer-email" tag="p">
                            contact@cobuildlab.com
                          </Typography>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>
                            <PreviewIcon icon={volumeControlPhone} />
                          </span>
                          <Typography className="footer-link" tag="p">
                            +1 (786) 991-3467
                          </Typography>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Column>
              <Column isSize={{ mobile: 6, desktop: 2 }}>
                <div className="footer-about-us">
                  <div className="footer-about-outer">
                    <Typography className="footer-title" tag="h6">
                      About Us
                    </Typography>
                    <div className="footer-details-link">
                      <FooterNavigation />
                    </div>
                  </div>
                </div>
              </Column>
              <Column isSize={{ mobile: 12, desktop: 3 }}>
                <div className="footer-newsletter">
                  <Typography className="footer-title" tag="h6">
                    Stay with us
                  </Typography>
                  <NewsLetterForm />
                  <Typography className="footer-social-title" tag="h6">
                    Social icon
                  </Typography>
                  <ul className="social-wrapper">
                    <li>
                      <a
                        target="_blank"
                        href="https://facebook.com/cobuildlab"
                        rel="noreferrer noopener">
                        <span>
                          <PreviewIcon icon={facebookSquare} />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/cobuildlab"
                        rel="noreferrer noopener">
                        <span>
                          <PreviewIcon icon={twitterSquare} />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://linkedin.com/company/cobuildlab"
                        rel="noreferrer noopener">
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
