import React from 'react'
import {
  Title,
} from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title3 extends React.Component{
  render(){
    const { children } = this.props
    return(
      <Title tag='h3' isSize={3} style={{marginBottom: 15}}>{children}</Title>
    )
  }
}
export default Title3