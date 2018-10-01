import React from 'react'
import { Title } from 'bloomer'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title4 extends React.Component {
  render() {
    const { children, align } = this.props
    return (
      <Title
        tag="h4"
        isSize={4}
        style={{ marginBottom: 15, marginTop: 15 }}
        hasTextAlign={align}
      >
        {children}
      </Title>
    )
  }
}
export default Title4
