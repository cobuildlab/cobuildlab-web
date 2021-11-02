import React from 'react';
import styled from 'styled-components';
import { Input } from 'bloomer';
import { primaryStyle } from './common-input-css';

const Mold = styled(Input)`
  ${primaryStyle}
`;

export default class CbInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      ...this.props,
      ...Input.defaultProps,
    };
  }

  render() {
    return <Mold {...this.props} />;
  }
}
