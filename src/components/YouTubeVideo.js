import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column } from 'bloomer';
import YouTube from 'react-youtube';

export const YOUTUBE_MOBILE_OPTS = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 0,
    loop: 1,
  },
};
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

class YouTubeVideo extends React.Component {
  static defaultProps = {
    id: '',
  };

  static propTypes = {
    id: PropTypes.string,
  };

  render() {
    const { id } = this.props;
    return (
      <Container>
        <Columns isCentered style={{ minHeight: '390px' }}>
          <Column
            className="has-text-centered is-hidden-desktop is-hidden-tablet-only"
            style={{ minHeight: '390px' }}>
            <YouTube
              videoId={id}
              opts={YOUTUBE_MOBILE_OPTS}
              className="youtube-container"
              style={{ minHeight: '390px' }}
            />
          </Column>
          <Column className="has-text-centered is-hidden-mobile" style={{ minHeight: '390px' }}>
            <YouTube
              videoId={id}
              opts={YOUTUBE_OPTS}
              className="youtube-container"
              style={{ width: '100%', minHeight: '390px' }}
            />
          </Column>
        </Columns>
      </Container>
    );
  }
}

export default YouTubeVideo;
export { YouTubeVideo };
