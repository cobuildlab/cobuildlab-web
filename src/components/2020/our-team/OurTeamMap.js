import React from 'react';
import styled from 'styled-components';
import OurTeamMapImage from './OurtTeamMapImage';

const Container = styled.div`
  position: relative;
`;

const OurTeamMap = () => (
  <Container>
    <OurTeamMapImage />
  </Container>
);

export default OurTeamMap;
