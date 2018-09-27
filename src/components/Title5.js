import React from 'react'
import { Title } from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title5 extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Title tag="h5" isSize={5} style={{ marginBottom: 10, marginTop: 10 }}>
        {children}
      </Title>
    )
  }
}
export default Title5
