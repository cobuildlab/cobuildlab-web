import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import Styled from 'styled-components';

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title2 extends React.Component {
  render() {
    const { children, align } = this.props;
    return (
      <StyledTitle
        tag="h2"
        isSize={2}
        style={{ marginBottom: 25, marginTop: 25 }}
        hasTextAlign={align}>
        {children}
      </StyledTitle>
    );
  }
}

Title2.defaultProps = {
  align: '',
};

Title2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  align: PropTypes.string,
};

export default Title2;
