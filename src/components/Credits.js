import React from 'react'
import { Title, Subtitle } from 'bloomer'

class Credits extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Subtitle
        tag="h6"
        style={{ marginBottom: 10, marginTop: 10 }}
        hasTextAlign="centered"
      >
        {children}
      </Subtitle>
    )
  }
}
export default Credits
