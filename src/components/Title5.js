import React from 'react';
import { Title } from 'bloomer';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

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

Title5.propTypes = {
  children: PropTypes.object.isRequired,
  align: PropTypes.string.isRequired,
};

export default Title5;
