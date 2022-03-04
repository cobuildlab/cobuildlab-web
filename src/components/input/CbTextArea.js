import React from 'react';
import styled from 'styled-components';
import { TextArea } from 'bloomer';
import { primaryStyle } from './common-input-css';

const Mold = styled(TextArea)`
  ${primaryStyle}
  height: 100% !important;
  width: 100% !important;
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
