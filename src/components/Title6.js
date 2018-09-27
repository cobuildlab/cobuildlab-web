import React from 'react'
import { Title } from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title6 extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Title tag="h6" isSize={6} style={{ marginBottom: 10, marginTop: 10 }}>
        {children}
      </Title>
    )
  }
}
export default Title6
