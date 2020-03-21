import React from 'react'
import { Title } from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title6 extends React.Component {
  render() {
    const { children, align } = this.props
    return (
      <Title
        tag="h6"
        isSize={6}
        style={{ marginBottom: 15, marginTop: 15 }}
        hasTextAlign={align}
      >
        {children}
      </Title>
    )
  }
}
export default Title6
