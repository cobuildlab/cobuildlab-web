import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Container, Section } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { caretRight } from 'react-icons-kit/fa/caretRight';
import H3 from '../../../Typography/H3';
import H6 from '../../../Typography/H6';
import Paragraph from '../../../Typography/Paragraph';
import { TextOrange } from '../../../2021/text/TextHelpers';
import { VideoPlay } from '../../../2020/VideoPlay';

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

const Wrapper = styled.div`
  position: relative;
  background: url(${({ images }) => `${images}`}) center no-repeat;
  background-size: cover;
  padding-top: calc(40px + 60 * (100vw - 320px) / 1600);
  padding-bottom: calc(40px + 60 * (100vw - 320px) / 1600);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  opacity: 0.9;
  background-color: #f6f6fb;
`;

const VideoContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  text-align: center;
  & > p {
    margin-top: 5px;
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

const Video = () => {
  const data = useStaticQuery(query);
  return (
    <Section isPaddingless id="video">
      <Wrapper images={data.background.childImageSharp.fluid.src}>
        <Overlay />
        <Container>
          <VideoContent>
            <H3>
              Our Video <TextOrange>Presentation.</TextOrange>
            </H3>
            <H6>You Should Know More About Us</H6>
            <Paragraph>Let us help us the way we know how.</Paragraph>
            <VideoBtn images={data.videoBtn.childImageSharp.fluid.src}>
              <VideoPlay>
                <ButtonContainer images={data.btnContainer.childImageSharp.fluid.src}>
                  <PlayIcon icon={caretRight} size={24} />
                </ButtonContainer>
              </VideoPlay>
            </VideoBtn>
          </VideoContent>
        </Container>
      </Wrapper>
      <div id="skills"></div>
    </Section>
  );
};

const query = graphql`
  query {
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

export default Video;
