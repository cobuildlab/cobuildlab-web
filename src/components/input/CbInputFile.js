import React from 'react';
import styled from 'styled-components';
import CbInput from './CbInput';
import { Input } from 'bloomer';

const Container = styled.div`
  position: relative;
`;

const InputFile = styled(Input)`
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  cursor: pointer;
  top: 0px !important;
`;

export default class CbInputFile extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      ...this.props,
      ...Input.defaultProps,
    };
  }

  render() {
    return (
      <Container>
        <Label for={'cb-input-file'}>
          <CbInput {...this.props} readOnly />
        </Label>
        <InputFile {...this.props} id={'cb-input-file'} name={'cb-input-file'} type={'file'} />
      </Container>
    );
  }
}
