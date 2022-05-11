import React from 'react';
import {
  Card as BloomerCard,
  CardContent as BlommerCardContent,
  CardHeader as BloomerCardHeader,
  Column,
  Columns,
  Section as BloomerSection,
} from 'bloomer';
import styled from 'styled-components';

const Section = styled(BloomerSection)`
  background-color: ${({ theme }) => theme.colors.white};
`;

const Card = styled(BloomerCard)`
  box-shadow: none;
  border: 1px solid red;
`;

const CardHeader = styled(BloomerCardHeader)`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fontFamily.latoBold};
  box-shadow: none;
`;

const CardContent = styled(BlommerCardContent)`
  padding: 0px;
  color: ${({ theme }) => theme.colors.gray};
`;

const cards = [
  {
    title: 'Low-Code:',
    description: 'Fast, Efficient, Affordable, Highest ROI',
  },
  {
    title: 'Cloud-Based Architecture:',
    description: 'No IT Footprint, easily scalable, intrinsically secure',
  },
  {
    title: 'Sustainable Software Development:',
    description: 'Zero Waste, Zero interruption, Seamless Learning Curve, Weekly Deliverables.',
  },
  {
    title: 'Data Driven:',
    description: 'Secure processes with multi-layer encryption, isolation and data segregation',
  },
  {
    title: 'Long Term Partnerships:',
    description:
      'Multi-Phase Functional Product Delivery, Future Solution Expansions with Ongoing Features and Functionality Development as Desired',
  },
  {
    title: 'Cutting Edge Technology:',
    description: `
        <ul>
            <li>Artificial Intelligence</li>
            <li>Crypto, Blockchain and dApps,</li>
            <li>Big Data,</li>
            <li>Automations and RPA</li>
            <li>Machine Learning,</li>
            <li>Robotics and IoT,</li>                
            <li>Low Code,</li>
        </ul>
    `,
  },
];

const Introduction = () => (
  <Section>
    <Columns isMultiline multiple isCentered>
      {cards.map(({ title, description }) => (
        <Column key={title} isSize={{ desktop: 3 }}>
          <Card>
            <CardHeader>{title}</CardHeader>
            <CardContent
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Card>
        </Column>
      ))}
    </Columns>
  </Section>
);

export default Introduction;
