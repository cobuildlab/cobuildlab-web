import React from 'react';
import { Title } from 'bloomer';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;
class Title4 extends React.Component {
  render() {
    const { children, align } = this.props;
    return (
      <StyledTitle
        tag="h4"
        isSize={4}
        style={{ marginBottom: 20, marginTop: 20 }}
        hasTextAlign={align}>
        {children}
      </StyledTitle>
    );
  }
}

Title4.propTypes = {
  children: PropTypes.object.isRequired,
  align: PropTypes.string.isRequired,
};

export default Title4;
