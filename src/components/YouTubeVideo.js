import React from 'react'
import { Container, Columns, Column } from 'bloomer'
import YouTube from 'react-youtube'

class YouTubeVideo extends React.Component {
  render() {
    const { id } = this.props
    const optsMobile = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    return (
      <Container>
        <Columns isCentered>
          <Column className="has-text-centered is-hidden-desktop is-hidden-tablet-only">
            <YouTube videoId={id} opts={optsMobile} className=""/>
          </Column>
          <Column className="has-text-centered is-hidden-mobile">
            <YouTube videoId={id} opts={opts} className="" style={{width: '100%'}} />
          </Column>
        </Columns>
      </Container>
    )
  }
}

export default YouTubeVideo
