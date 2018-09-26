import React from 'react'
import {
  Title,
  Container,
  Columns,
  Column,
  Image
} from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class ImagePost extends React.Component{
  render(){
    const { children } = this.props
    return(
      <Container>
          <Columns isCentered>
            <Column>
              <Image isRatio="1:1" src={children} />
            </Column>
          </Columns>
      </Container>
    )
  }
}
export default ImagePost