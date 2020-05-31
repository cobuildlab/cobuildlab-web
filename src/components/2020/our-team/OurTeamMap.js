import React from 'react';
import styled from 'styled-components';
import OurTeamMapImage from './OurtTeamMapImage';
import OurTeamLocation from './OurTeamLocation';
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
    <OurTeamLocation
      placeholder="Venezuela"
      xl={POSITIONS.venezuela.lx}
      lg={POSITIONS.venezuela.lg}
      md={POSITIONS.venezuela.md}
      sm={POSITIONS.venezuela.sm}
      xs={POSITIONS.venezuela.xs}
    />
    <OurTeamLocation
      placeholder="EEUU 1"
      xl={POSITIONS.eeuu1.lx}
      lg={POSITIONS.eeuu1.lg}
      md={POSITIONS.eeuu1.md}
      sm={POSITIONS.eeuu1.sm}
      xs={POSITIONS.eeuu1.xs}
    />
    <OurTeamLocation
      placeholder="EEUU 2"
      xl={POSITIONS.eeuu2.lx}
      lg={POSITIONS.eeuu2.lg}
      md={POSITIONS.eeuu2.md}
      sm={POSITIONS.eeuu2.sm}
      xs={POSITIONS.eeuu2.xs}
    />
    <OurTeamLocation
      placeholder="EEUU 3"
      xl={POSITIONS.eeuu3.lx}
      lg={POSITIONS.eeuu3.lg}
      md={POSITIONS.eeuu3.md}
      sm={POSITIONS.eeuu3.sm}
      xs={POSITIONS.eeuu3.xs}
    />
    <OurTeamLocation
      placeholder="EEUU 4"
      xl={POSITIONS.eeuu4.lx}
      lg={POSITIONS.eeuu4.lg}
      md={POSITIONS.eeuu4.md}
      sm={POSITIONS.eeuu4.sm}
      xs={POSITIONS.eeuu4.xs}
    />
    <OurTeamLocation
      placeholder="EEUU 5"
      xl={POSITIONS.eeuu5.lx}
      lg={POSITIONS.eeuu5.lg}
      md={POSITIONS.eeuu5.md}
      sm={POSITIONS.eeuu5.sm}
      xs={POSITIONS.eeuu5.xs}
    />
    <OurTeamLocation
      placeholder="EEUU 6"
      xl={POSITIONS.eeuu6.lx}
      lg={POSITIONS.eeuu6.lg}
      md={POSITIONS.eeuu6.md}
      sm={POSITIONS.eeuu6.sm}
      xs={POSITIONS.eeuu6.xs}
    />
    <OurTeamLocation
      placeholder="EEUU 6"
      xl={POSITIONS.colombia.lx}
      lg={POSITIONS.colombia.lg}
      md={POSITIONS.colombia.md}
      sm={POSITIONS.colombia.sm}
      xs={POSITIONS.colombia.xs}
    />
  </Container>
);

export default OurTeamMap;
