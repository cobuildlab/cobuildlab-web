import React from 'react';
import styled from 'styled-components';
import OurTeamMapImage from './OurtTeamMapImage';
import OurTeamLocation from './OurTeamLocation';
import { VENEZUELA_POSITION } from './locations-positions';

const Container = styled.div`
  position: relative;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const OurTeamMap = () => (
  <Container>
    <OurTeamMapImage />
    <OurTeamLocation
      xl={VENEZUELA_POSITION.lx}
      lg={VENEZUELA_POSITION.lg}
      md={VENEZUELA_POSITION.md}
      sm={VENEZUELA_POSITION.sm}
    />
  </Container>
);

export default OurTeamMap;
