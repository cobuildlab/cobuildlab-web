import React from 'react'
import { Container, Columns, Column, Image } from 'bloomer'

class ImagePost extends React.Component {
  render() {
    const { src } = this.props
    return (
      <Container>
        <Columns>
          <Column>
            <Image isRatio="1:1" src={src} />
          </Column>
        </Columns>
      </Container>
    )
  }
}
export default ImagePost
