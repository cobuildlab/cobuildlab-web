import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import Styled from 'styled-components';

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title3 extends React.Component {
  render() {
    const { children, align } = this.props;
    return (
      <StyledTitle
        tag="h3"
        isSize={3}
        style={{ marginBottom: 20, marginTop: 20 }}
        hasTextAlign={align}>
        {children}
      </StyledTitle>
    );
  }
}

Title3.defaultProps = {
  align: '',
};

Title3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  align: PropTypes.string,
};

export default Title3;
