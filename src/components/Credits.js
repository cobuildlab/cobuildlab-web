import React from 'react';
import { Subtitle } from 'bloomer';
import PropTypes from 'prop-types';

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

Credits.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Credits;
