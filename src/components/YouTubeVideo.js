import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import YouTube from 'react-youtube';


class YouTubeVideo extends React.Component {
  render() {
    const { id } = this.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


    return (
      <Container>
        <Columns isCentered>
          <Column isCentered>
            <YouTube
              videoId={id}
              opts={opts}
            />
          </Column>
        </Columns>
      </Container>
    );
  }
}

export default YouTubeVideo;
