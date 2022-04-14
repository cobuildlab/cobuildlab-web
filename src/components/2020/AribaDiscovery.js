import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 1em;
`;

const Images = styled.img`
  width: 100%;
`;

const AribaDiscovery = () => (
  <Container>
    <a
      target="_blank"
      href="http://discovery.ariba.com/profile/AN11056753085"
      rel="noreferrer noopener">
      <Images
        width={'217'}
        height={'66'}
        alt="View Cobuild Lab Inc. profile on Ariba Discovery"
        src="https://service.ariba.com/an/p/Ariba/badge_180x55.jpg"
      />
    </a>
  </Container>
);

export default AribaDiscovery;
