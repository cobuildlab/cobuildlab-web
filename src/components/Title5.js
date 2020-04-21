import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import Styled from 'styled-components';

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;

class Title5 extends React.Component {
  render() {
    const { children, align } = this.props;
    return (
      <StyledTitle
        tag="h5"
        isSize={5}
        style={{ marginBottom: 15, marginTop: 15 }}
        hasTextAlign={align}>
        {children}
      </StyledTitle>
    );
  }
}

Title5.defaultProps = {
  align: '',
};

Title5.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  align: PropTypes.string,
};

export default Title5;
