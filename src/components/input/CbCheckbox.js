import React from 'react';
import styled from 'styled-components';
import colors from '../2021/colors.json';

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: relative;
  width: 1em;
  height: 1em;
  border: 2px solid ${colors.indigo};
  border-radius: 4px;
  appearance: none;
  padding: 0;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0px;
    left: 5px;
    width: 5px;
    height: 11px;
    border-style: solid;
    border-color: #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: #ffffff;
    border-color: ${colors.indigo};
    background: ${colors.indigo};
    &::before {
      opacity: 1;
    }
  }
`;

class CbCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      ...this.props,
      ...React.createElement('input').props,
    };
  }

  render() {
    return <Checkbox type="checkbox" {...this.props} />;
  }
}

CbCheckbox.propTypes = {
  ...Checkbox.defaultProps,
};

CbCheckbox.defaultProps = {
  ...Checkbox.defaultProps,
};

export default Checkbox;
