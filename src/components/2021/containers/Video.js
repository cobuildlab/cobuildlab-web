import React from 'react';
import { Container, Columns, Column, Section, Title } from 'bloomer';
import { SmoothScrollingButton } from '../button/SmoothScrollingButton';
import '../../../assets/2021/scss/style1.scss';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

export const YOUTUBE_OPTS = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 0,
    loop: 1,
  },
};

const Video = ({ videoId, text1, text2 }) => {
  return (
    <Section isCentered>
      <Container>
        <Columns isDisplay="flex-mobile" isCentered>
          <Column isSize={{ mobile: 10, desktop: 6 }} isHidden="mobile">
            <YouTube
              videoId={videoId}
              opts={YOUTUBE_OPTS}
              className="youtube-container"
              style={{ width: '100%', minHeight: '390px' }}
            />
          </Column>
          <Column isSize={{ mobile: 11, desktop: 6 }}>
            <Title>{text1}</Title>
            <p>{text2}</p>
            <br />
            <br />
            <br />
            <SmoothScrollingButton href="#" isCapitalize={false}>
              Get a Free Consultation
            </SmoothScrollingButton>
          </Column>
        </Columns>
      </Container>
    </Section>
  );
};

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
export { Video };
