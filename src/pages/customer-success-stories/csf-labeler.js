import React from 'react';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import PropTypes from 'prop-types';
import OverviewSection from '../../components/customer-success-stories/OverviewSection';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import ProblemSection from '../../components/customer-success-stories/ProblemSection';
import SolutionSection from '../../components/customer-success-stories/SolutionSection';
import ResultSection from '../../components/customer-success-stories/ResultSection';
import { graphql } from 'gatsby';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { StaticImage } from 'gatsby-plugin-image';
import { List, ListItem } from '../../components/Typography/List';
import { TextIndigo } from '../../components/2021/text/TextHelpers';
import OurGoalSection from '../../components/customer-success-stories/OurGoalSeaction';
import WhatWeDidSection from '../../components/customer-success-stories/WhatWeDidSection';
import LogicalArchitectureSection from '../../components/customer-success-stories/LogicalArchitectureSection';
import PhysicalArchitectureSection from '../../components/customer-success-stories/PhysicalArchitectureSection';
import RoadmapSection from '../../components/customer-success-stories/RoadmapSection';
import OurTeamSection from '../../components/customer-success-stories/OurTeamSection';
import { EpilogueSection } from '../../components/customer-success-stories/EpilogueSection';
import { Section } from 'bloomer';
import SlidersCsfLabeler from '../../components/customer-success-stories/new/sliders/csf-labeler/Sliders';

const CsfLabeler = ({ data }) => {
  const team = [
    {
      first: 'Alan',
      last: 'R. Guevara',
      description: 'Business representative',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/team-pictures/alanthinks.jpg'}
          alt={'Alan R. Guevara'}
        />
      ),
    },
    {
      first: 'Angel',
      last: 'Lacret',
      description: 'Teach Lead',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/team-pictures/angel.jpg'}
          alt={'Angel Lacret'}
        />
      ),
    },
    {
      first: 'Francisco',
      last: 'Silverio',
      description: 'Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/avatar22.jpg'}
          alt={'Francisco Silverio'}
        />
      ),
    },
  ];

  const goals = [
    {
      goal: 20,
      subTitle: '+20% Increase efficiency.',
    },
    {
      goal: 30,
      subTitle: '+30% Save execution time.',
    },
  ];

  return (
    <DetailLayout>
      <SeoMetaTags
        title="CSF LABELER"
        description="CSF LABELER is a company that works in the courier freight forwarding business that, in the face of technological advances and the presence of avant-garde competition, decided to take the next step and evolve hand in hand with automated processes in order to optimize response times and reduce operating costs."
        image={data.seoImages.childImageSharp.resize}
      />
      <OverviewSection
        title="CSF LABELER"
        image={
          <StaticImage
            width={'1580'}
            height={'1084'}
            src={'./../../assets/images/customers/csf-labeler/Overview.png'}
            alt={'Overview collage'}
          />
        }>
        <DetailParagraph isBold={true}>
          CSF LABELER is a company that works in the courier freight forwarding business that, in
          the face of technological advances and the presence of avant-garde competition, decided to
          take the next step and evolve hand in hand with automated processes in order to optimize
          response times and reduce operating costs.
        </DetailParagraph>
      </OverviewSection>
      <ProblemSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'../../assets/images/customers/csf-labeler/CSF_0000_IMG_0690.jpg'}
            alt={'problem'}
          />
        }>
        <>
          <DetailParagraph>
            CSF LABELER{"'"}s need was focused on optimizing its weighing processes for each package
            received in the warehouse.
          </DetailParagraph>
        </>
      </ProblemSection>
      <SolutionSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'./../../assets/images/customers/csf-labeler/CSF_0001_IMG_0685.jpg'}
            alt={'Solution'}
          />
        }>
        <>
          <DetailParagraph>
            Build a workstation for weighing packages, integrating a digital scale, a raspberry pi
            module, action buttons, digital display, QR scanner and a custom control software for
            the integration of all input and output devices.
          </DetailParagraph>
          <DetailParagraph>
            We opted for the development of a customized software due to the number of sub-processes
            that were carried out in the manual weighing process. In this way, the integration of
            all processes within the platform was achieved in order to reach the objectives of the
            project.
          </DetailParagraph>
        </>
      </SolutionSection>
      <WhatWeDidSection
        logicalArchitecture={
          <LogicalArchitectureSection
            image={
              <StaticImage
                width={'960'}
                height={'540'}
                src={'./../../assets/images/customers/csf-labeler/Logical.jpg'}
                alt={'Logical Architecture'}
              />
            }
          />
        }
        physicalArchitecture={
          <PhysicalArchitectureSection
            image={
              <StaticImage
                width={'960'}
                height={'540'}
                src={'./../../assets/images/customers/csf-labeler/Physical.jpg'}
                alt={'Physical Architecture'}
              />
            }
          />
        }
        roadmap={
          <RoadmapSection>
            <StaticImage
              style={{ width: '100%', maxWidth: '1000px' }}
              width={'960'}
              height={'540'}
              objectFit={'contain'}
              src={'./../../assets/images/customers/csf-labeler/roadmap.jpg'}
              alt={'Roadmap'}
            />
          </RoadmapSection>
        }
      />
      <ResultSection
        image={
          <StaticImage
            style={{ marginTop: '106.469px' }}
            width={'1921'}
            height={'1080'}
            src={'./../../assets/images/customers/csf-labeler/CSF_0002_Layer2.jpg'}
            alt={'The Result'}
          />
        }>
        <>
          <DetailParagraph>
            A stand-alone, programmable device able to automate the process by reducing labor time
            and minimizing human error when transcribing the weight of the package in the manual
            process. Also, capable of integrating other I/O devices, and integrable with existing
            software via web services.
          </DetailParagraph>

          <List>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Location: </TextIndigo>
              {'  '}8606 NW 66th St, Miami, FL 33166
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Industry: </TextIndigo>
              {'  '}Logistic Freight Forwarding
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Product: </TextIndigo>
              {'  '}Courier services
            </ListItem>
          </List>
        </>
      </ResultSection>
      <OurGoalSection data={goals} />
      <Section isPaddingless style={{ marginBottom: '6rem' }}>
        <SlidersCsfLabeler />
      </Section>
      <OurTeamSection data={team} />
      <EpilogueSection />
    </DetailLayout>
  );
};

CsfLabeler.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/csf-labeler/G8KL4dne_4x1.png" }) {
      childImageSharp {
        resize(width: 1200, height: 1200) {
          width
          height
          src
        }
      }
    }
  }
`;

export default CsfLabeler;
