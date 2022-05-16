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
import SlidersEnviewCloud from '../../components/customer-success-stories/new/sliders/enview-cloud/Sliders';

const EnviewStore = ({ data }) => {
  const team = [
    {
      first: 'Alan',
      last: 'R. Guevara',
      description: 'Chief of Product Management',
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
      description: 'Chief of Product Development',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/team-pictures/angel.jpg'}
          alt={'Angel Lacret'}
        />
      ),
    },
    {
      first: 'Carlos',
      last: 'Magno',
      description: 'Project Manager',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
          alt={'Carlos Magno'}
        />
      ),
    },
    {
      first: 'Kristal',
      last: 'Dorta',
      description: 'UX Designer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/kristal-dorta.jpg'}
          alt={'Mayela Marin'}
        />
      ),
    },
    {
      first: 'Anjelys',
      last: 'Leal',
      description: 'QA',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/new-pictures/green/anjelys-leal.jpg'}
          alt={'Carlos Hurtado'}
        />
      ),
    },
    {
      first: 'Manuel',
      last: 'Cortina',
      description: 'Javascript Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/new-pictures/green/Manuel-Cortina--Developer-v.jpg'}
          alt={'Manuel Cortina'}
        />
      ),
    },
    {
      first: 'Jesus',
      last: 'Rodriguez',
      description: 'Javascript Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/new-pictures/white/jesus-rodriguez.jpg'}
          alt={'Jesus Rodriguez'}
        />
      ),
    },
  ];

  const goals = [
    { goal: 50, subTitle: 'Increase 50% productivity' },
    { goal: 100, subTitle: 'Identify 100% noises issues' },
    { goal: 50, subTitle: 'Increase 50% product usability' },
  ];

  return (
    <DetailLayout>
      <SeoMetaTags
        title="Enview Cloud"
        description="eNView is responsible for measuring noise, vibration, and dust levels at construction sites, workspaces, and other sites where required."
        image={data.seoImages.childImageSharp.resize}
      />
      <OverviewSection
        title="Enview Cloud"
        image={
          <StaticImage
            width={'1580'}
            height={'1084'}
            src={'./../../assets/images/customers/enview-cloud/Overview.png'}
            alt={'Overview collage'}
          />
        }>
        <DetailParagraph isBold={true}>
          eNView is responsible for measuring noise, vibration, and dust levels at construction
          sites, workspaces, and other sites where required.
        </DetailParagraph>
      </OverviewSection>
      <ProblemSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'../../assets/images/customers/enview-cloud/eNView_create_your_account.png'}
            alt={'problem'}
          />
        }>
        <>
          <DetailParagraph>
            Due to its complexity, the client was using a public code to display its data. They
            needed a SaaS web app to display real-time data from sensors within a project. They
            could also configure what kind of metrics were going to be displayed and the geospatial
            location of the project with its areas.
          </DetailParagraph>
        </>
      </ProblemSection>
      <SolutionSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'./../../assets/images/customers/enview-cloud/eNView_create_your_project.png'}
            alt={'Solution'}
          />
        }>
        <>
          <DetailParagraph>
            A Project Management system and productivity tool with cloud-based architecture using
            Amazon web services.
          </DetailParagraph>
          <DetailParagraph>
            Using AWS, we focus on building and delivering powerful features under a robust
            infrastructure that is easy to manage and scale.
          </DetailParagraph>
          <DetailParagraph>
            We lead the design, planning, construction, and quality assurance of the web platform
            that integrates with the hardware devices that make noise and dust readings.
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
                src={'./../../assets/images/customers/enview-cloud/logical_architecture.jpg'}
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
                src={'./../../assets/images/customers/enview-cloud/physical-architecture.jpg'}
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
              src={'./../../assets/images/customers/enview-store/Roadmap.jpg'}
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
            src={'./../../assets/images/customers/enview-cloud/eNView_invite_your_clients.png'}
            alt={'The Result'}
          />
        }>
        <>
          <DetailParagraph>
            An IoT connected SaaS platform whose function is to show the telemetric data collected
            by the devices of the KP Acoustics company in real-time. In addition, it also sends
            alerts and notifications via email and SMS.
          </DetailParagraph>
          <DetailParagraph>
            Users can choose places within google maps and select the pins within that location to
            relate them to the devices.
          </DetailParagraph>
          <DetailParagraph>
            The platform has different types of users and allows the management of each one.
          </DetailParagraph>

          <List>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Location: </TextIndigo>
              {'  '}London
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Industry: </TextIndigo>
              {'  '}Acoustics and IoT
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Product: </TextIndigo>
              {'  '}SaaS Platform
            </ListItem>
          </List>
        </>
      </ResultSection>
      <OurGoalSection data={goals} />
      <Section isPaddingless style={{ marginBottom: '6rem' }}>
        <SlidersEnviewCloud />
      </Section>
      <OurTeamSection data={team} />
      <EpilogueSection />
    </DetailLayout>
  );
};

EnviewStore.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/enview-cloud/enview-cloud.png" }) {
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

export default EnviewStore;
