import React from 'react';
import { Section as BloomerSection } from 'bloomer';
import styled from 'styled-components';
import OurTeam from '../../our-team/OurTeam';

const Section = styled(BloomerSection)`
  background-color: #f6f6fb;
`;

const OurTeamEnterpriseSection = () => (
  <Section>
    <OurTeam />
  </Section>
);

export default OurTeamEnterpriseSection;
