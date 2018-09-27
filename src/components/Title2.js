import React from 'react'
import { Title } from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title2 extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Title tag="h2" isSize={2} style={{ marginBottom: 30, marginTop: 30 }}>
        {children}
      </Title>
    )
  }
}
export default Title2
