import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import Styled from 'styled-components';

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

Title4.defaultProps = {
  align: '',
};

Title4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  align: PropTypes.string,
};

export default Title4;
