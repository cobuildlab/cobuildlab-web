import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';
import Typrography from '../../../2020/Typography';
import ButtonSmoothScrolling from '../../../2020/Button/ButtonSmoothScrolling';
import './about.scss';
import Typography from '../../../2020/Typography';
import { caretRight } from 'react-icons-kit/fa/caretRight';
import VideoPlay from '../../../2020/VideoPlay';
import styled, { keyframes } from 'styled-components';
import { Icon } from 'react-icons-kit';
import VideoPlayIcon from '../../../2020/VideoPlayIcon';

const animation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(240deg);
    transform: rotate(240deg);
  }
`;

const VideoBtn = styled.div`
  text-align: center;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background: url(${({ images }) => `${images}`});
    background-size: contain;
    animation-name: ${animation};
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const ButtonContainer = styled.span`
  background: url(${({ images }) => `${images}`}) no-repeat center;
  background-size: contain;
  width: calc(50px + (76 - 50) * ((100vw - 320px) / (1920 - 320)));
  height: calc(50px + (76 - 50) * ((100vw - 320px) / (1920 - 320)));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin: calc(8px + (14 - 8) * ((100vw - 320px) / (1920 - 320)));
  svg {
    width: 31px;
    height: 30px;
    margin-left: 2px;
  }
`;
const PlayIcon = styled(Icon)`
  color: #e76c29;
`;

const About = () => {
  const data = useStaticQuery(query);
  return (
    <Section isPaddingless id="about">
      <div className="about-wrapper gradient-color">
        <Container>
          <Columns isDisplay="flex-mobile" isCentered>
            <Column isSize={{ mobile: 11, desktop: 6 }}>
              <div className="row">
                <div className="about-content-block main-title-wrapper">
                  <div className="sub-title-wrapper">
                    <Columns>
                      <Column>
                        <Typrography tag="h2" className="sitemain-subtitle">
                          For Startups
                        </Typrography>
                      </Column>
                      <Column>
                        <VideoPlayIcon />
                      </Column>
                    </Columns>
                  </div>
                  <ul>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Product driven process
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Rapid feature-rich development
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Low code / No Code Solutions for faster development.
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ iOS and Android experience
                      </Typrography>
                    </li>
                  </ul>
                  <ButtonSmoothScrolling href="#" isCapitalize={false}>
                    Get a Free Consultation
                  </ButtonSmoothScrolling>
                </div>
              </div>
            </Column>
            <div id="our-mission-anchor"></div>
            <Column isSize={{ mobile: 10, desktop: 5 }} isHidden="mobile">
              <Img fluid={data.file.childImageSharp.fluid} alt="" />
            </Column>
          </Columns>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Columns isDisplay="flex-mobile" isCentered>
            <Column isSize={{ mobile: 10, desktop: 5 }} isHidden="mobile">
              <Img fluid={data.imagesCardOne.childImageSharp.fluid} alt="" />
            </Column>
            <Column isSize={{ mobile: 11, desktop: 6 }}>
              <div className="row">
                <div className="about-content-block main-title-wrapper">
                  <div className="sub-title-wrapper">
                    <Columns>
                      <Column>
                        <Typrography tag="h2" className="sitemain-subtitle">
                          For Enterprises
                        </Typrography>
                      </Column>
                      <Column>
                        <VideoPlayIcon videoId={'5fbYxQNgJ7s'} />
                      </Column>
                    </Columns>
                  </div>

                  <ul>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ We turn logistics and productivity problems into competitive advantages.
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Reduce risks, errors and costs through process and workflow automation.
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Low code / No Code Solutions for faster development.
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ iOS and Android experience
                      </Typrography>
                    </li>
                  </ul>
                  <ButtonSmoothScrolling href="#" isCapitalize={false}>
                    Get a Free Consultation
                  </ButtonSmoothScrolling>
                </div>
              </div>
            </Column>
          </Columns>
        </Container>
      </div>
    </Section>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "about/group-banner.png" }) {
      childImageSharp {
        fluid(webpQuality: 72) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imagesCardOne: file(relativePath: { eq: "skills/cobuild-lab-customers.png" }) {
      childImageSharp {
        fluid(webpQuality: 72) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    background: file(relativePath: { eq: "video/video-back.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    videoBtn: file(relativePath: { eq: "video/video-border.png" }) {
      childImageSharp {
        fluid(pngQuality: 50) {
          src
        }
      }
    }
    btnContainer: file(relativePath: { eq: "video/video-btn.png" }) {
      childImageSharp {
        fluid(pngQuality: 10) {
          src
        }
      }
    }
  }
`;

export default About;
