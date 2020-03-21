import React from 'react';
import { Title, Subtitle } from 'bloomer';

class Credits extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Subtitle tag="h6" style={{ marginBottom: 30, marginTop: 20 }} hasTextAlign="centered">
        {children}
      </Subtitle>
    );
  }
}
export default Credits;
