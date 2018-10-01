import React from 'react'
import { Title } from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title2 extends React.Component {
  render() {
    const { children, align } = this.props
    return (
      <Title
        tag="h2"
        isSize={2}
        style={{ marginBottom: 25, marginTop: 25 }}
        hasTextAlign={align}
      >
        {children}
      </Title>
    )
  }
}
export default Title2
