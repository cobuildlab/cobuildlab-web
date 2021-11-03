import React from 'react';
import PropTypes from 'prop-types';
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
  width: 100%;
  cursor: pointer;
  left: 0px !important;
  top: 0px !important;
`;

class CbInputFile extends React.Component {
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
          <CbInput placeholder={this.props.placeholder} readOnly />
        </Label>
        <InputFile {...this.props} id={'cb-input-file'} name={'cb-input-file'} type={'file'} />
      </Container>
    );
  }
}

CbInputFile.propTypes = {
  ...Input.propTypes,
  placeholder: PropTypes.string,
};

CbInputFile.defaultProps = {
  ...Input.defaultProps,
  placeholder: '',
};

export default CbInputFile;
