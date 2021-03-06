import React from 'react';
import styled from 'styled-components';
import OurTeamMapImage from './OurtTeamMapImage';
import OurTeamLocation from './OurTeamLocation';
import OurTeamMapTitle from './OurTeamMapTitle';
import POSITIONS from './locations-positions';

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
    <OurTeamMapTitle />
    <OurTeamLocation
      placeholder={['Maracaibo, Venezuela', 'Merida, Venezuela', 'Caracas, Venezuela']}
      xl={POSITIONS.position1.lx}
      lg={POSITIONS.position1.lg}
      md={POSITIONS.position1.md}
      sm={POSITIONS.position1.sm}
      xs={POSITIONS.position1.xs}
    />
    <OurTeamLocation
      placeholder="Boston, USA"
      xl={POSITIONS.position2.lx}
      lg={POSITIONS.position2.lg}
      md={POSITIONS.position2.md}
      sm={POSITIONS.position2.sm}
      xs={POSITIONS.position2.xs}
    />
    <OurTeamLocation
      placeholder="New York, USA"
      xl={POSITIONS.position3.lx}
      lg={POSITIONS.position3.lg}
      md={POSITIONS.position3.md}
      sm={POSITIONS.position3.sm}
      xs={POSITIONS.position3.xs}
    />
    <OurTeamLocation
      placeholder="Miami, USA"
      xl={POSITIONS.position4.lx}
      lg={POSITIONS.position4.lg}
      md={POSITIONS.position4.md}
      sm={POSITIONS.position4.sm}
      xs={POSITIONS.position4.xs}
    />
    <OurTeamLocation
      placeholder="Alberta, Canada"
      xl={POSITIONS.position5.lx}
      lg={POSITIONS.position5.lg}
      md={POSITIONS.position5.md}
      sm={POSITIONS.position5.sm}
      xs={POSITIONS.position5.xs}
    />
    <OurTeamLocation
      placeholder="San Francisco, USA"
      xl={POSITIONS.position6.lx}
      lg={POSITIONS.position6.lg}
      md={POSITIONS.position6.md}
      sm={POSITIONS.position6.sm}
      xs={POSITIONS.position6.xs}
    />
    <OurTeamLocation
      placeholder={['Bogotá, Colombia', 'Medellín, Colombia', 'Santa Marta, Colombia']}
      xl={POSITIONS.position7.lx}
      lg={POSITIONS.position7.lg}
      md={POSITIONS.position7.md}
      sm={POSITIONS.position7.sm}
      xs={POSITIONS.position7.xs}
    />
    <OurTeamLocation
      placeholder="Santiago, Chile"
      xl={POSITIONS.position8.lx}
      lg={POSITIONS.position8.lg}
      md={POSITIONS.position8.md}
      sm={POSITIONS.position8.sm}
      xs={POSITIONS.position8.xs}
    />
    <OurTeamLocation
      placeholder="Buenos Aires, Argentina"
      xl={POSITIONS.position9.lx}
      lg={POSITIONS.position9.lg}
      md={POSITIONS.position9.md}
      sm={POSITIONS.position9.sm}
      xs={POSITIONS.position9.xs}
    />
    <OurTeamLocation
      placeholder="Madrid, Spain"
      xl={POSITIONS.position10.lx}
      lg={POSITIONS.position10.lg}
      md={POSITIONS.position10.md}
      sm={POSITIONS.position10.sm}
      xs={POSITIONS.position10.xs}
    />
  </Container>
);

export default OurTeamMap;
