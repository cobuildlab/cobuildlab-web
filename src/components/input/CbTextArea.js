import React from 'react';
import styled from 'styled-components';
import { TextArea } from 'bloomer';
import { primaryStyle } from './common-input-css';

const Mold = styled(TextArea)`
  ${primaryStyle}
`;

export default class CbTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      ...this.props,
      ...TextArea.defaultProps,
    };
  }

  render() {
    return <Mold {...this.props} />;
  }
}
