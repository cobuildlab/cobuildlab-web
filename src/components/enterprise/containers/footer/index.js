import React from 'react';
import { Container, Row, Col } from 'reactstrap';
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
import logo from '../../../../assets/images/Logo.png';
import InputBox from '../../components/input';
import { arrowRightCircle } from 'react-icons-kit/feather/arrowRightCircle';
import './footer.scss';

/**
 *
 */
function Footer() {
  return (
    <div className="footer-wrapper">
      <Container>
        <div className="footer-content-wrapper">
          <Row>
            <Col lg={4} sm={6}>
              <div className="footer-logo-wrapper">
                <Image Path={logo} Class="footer-logo" />
                <Description
                  Class="footer-dec"
                  Name="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown"
                />
              </div>
            </Col>
            <Col lg={3} sm={6}>
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
                          Name="Office No - 115 , Street No - 05 , NY, USA"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <PreviewIcon icon={envelopeOpen} />
                        </span>
                        <Title Class="footer-link footer-email" Name="example@email.com" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>
                          <PreviewIcon icon={volumeControlPhone} />
                        </span>
                        <Title Class="footer-link" Name="+1 123 - 564 - 7890" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} sm={6}>
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
            </Col>
            <Col lg={3} sm={6}>
              <div className="footer-newsletter">
                <Title Class="footer-title" Name="Stay with us" />
                <div className="form-group">
                  <InputBox Type="text" PlaceHolder="Enter email" Class="input-search" />
                  <span className="search-icon gradient-color">
                    <PreviewIcon icon={paperPlane} />
                  </span>
                </div>
                <Title Class="footer-social-title" Name="Social icon" />
                <ul className="social-wrapper">
                  <li>
                    <a href="/index">
                      <span>
                        <PreviewIcon icon={facebookSquare} />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/index">
                      <span>
                        <PreviewIcon icon={twitterSquare} />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/index">
                      <span>
                        <PreviewIcon icon={linkedinSquare} />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
