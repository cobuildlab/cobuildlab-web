import React from 'react';
import { Title } from 'bloomer';
import Styled from 'styled-components'

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title4 extends React.Component {
  render() {
    const { children, align } = this.props;
    return (
      <StyledTitle tag="h4" isSize={4} style={{ marginBottom: 20, marginTop: 20 }} hasTextAlign={align}>
        {children}
      </StyledTitle>
    );
  }
}
export default Title4;
