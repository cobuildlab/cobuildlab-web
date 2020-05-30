import React from 'react';
import styled from 'styled-components';
import OurTeamMapImage from './OurtTeamMapImage';
import OurTeamLocation from './OurTeamLocation';

const Container = styled.div`
  position: relative;
`;

const OurTeamMap = () => (
  <Container>
    <OurTeamMapImage />
    <OurTeamLocation top="50%" left="50%" />
  </Container>
);

export default OurTeamMap;
