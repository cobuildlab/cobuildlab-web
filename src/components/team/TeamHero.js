import React from 'react';
import { Column, Columns, Container } from 'bloomer';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Paragraph from '../Typography/Paragraph';
import { TextOrange } from '../2021/text/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';

const Title = styled(H1)`
  text-align: left;
  margin-bottom: 0.2em;
`;

const Text = styled(Paragraph)`
  line-height: 1.5;
  color: #90a2ad;
  text-align: left;
`;

const TeamHero = () => (
  <Container>
    <Columns>
      <Column isSize={{ desktop: 6, mobile: 12 }} style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Title>
            Our <TextOrange>Team</TextOrange>
          </Title>
          <Text>
            We partner with new and early-stage entrepreneurs and industry experts to transforms
            ideas into Web and Mobile Software Products. Since day one, our technique is focused on
            early results and transparent communication
          </Text>
        </div>
      </Column>
      <Column isSize={{ desktop: 6, mobile: 12 }}>
        <StaticImage
          src={'../../assets/images/team/out_team_header.jpg'}
          style={{ width: '100%' }}
        />
      </Column>
    </Columns>
  </Container>
);

export default TeamHero;
