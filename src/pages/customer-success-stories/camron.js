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
import SlidersCamron from '../../components/customer-success-stories/new/sliders/camron/Sliders';

const Camron = ({ data }) => {
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
      first: 'Mayela',
      last: 'Marin',
      description: 'Project Manager',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/mayela-marin.jpg'}
          alt={'Mayela Marin'}
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
      first: 'Carlos',
      last: 'Hurtado',
      description: 'Javascript Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/new-pictures/green/carlos-hurtado.jpg'}
          alt={'Carlos Hurtado'}
        />
      ),
    },
    {
      first: 'Edward',
      last: 'Zabala',
      description: 'Project Manager/QA Analyst',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/avatar22.jpg'}
          alt={'Edward Zabala'}
        />
      ),
    },
    {
      first: 'Raúl',
      last: 'Gómez',
      description: 'Javascript Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/avatar22.jpg'}
          alt={'Raúl Gómez'}
        />
      ),
    },
  ];

  const goals = [
    { goal: 100, subTitle: '100% productivity on the process of Notarization' },
    { goal: 80, subTitle: '80% costs of Notarization and profit for Notaries' },
    { goal: 60, subTitle: '60% of the tasks during the process' },
  ];

  return (
    <DetailLayout>
      <SeoMetaTags
        title="Camron"
        description="Katie is a Notary who works with a big group of Notaries providing services to different real estate companies and lawyers. She had the vision of creating a dynamic platform where notaries can log in, and use it for providing remote services."
        image={data.seoImages.childImageSharp.resize}
      />
      <OverviewSection
        title="Camron"
        image={
          <StaticImage
            width={'1580'}
            height={'1084'}
            src={'./../../assets/images/customers/camron/overview-collage.png'}
            alt={'Overview collage'}
          />
        }>
        <DetailParagraph isBold={true}>
          Katie is a Notary who works with a big group of Notaries providing services to different
          real estate companies and lawyers. She had the vision of creating a dynamic platform where
          notaries can log in, and use it for providing remote services.
        </DetailParagraph>
      </OverviewSection>
      <ProblemSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'../../assets/images/customers/camron/problem.png'}
            alt={'problem'}
          />
        }>
        <>
          <DetailParagraph>
            At the moment, Kathie, the founder, was using 5 different systems to provide its
            services, she tried several different platforms that perform similar services without
            luck.
          </DetailParagraph>
        </>
      </ProblemSection>
      <SolutionSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'./../../assets/images/customers/camron/solution.png'}
            alt={'Solution'}
          />
        }>
        <>
          <DetailParagraph>
            A SaaS (Service as a Service) web interface where notaries can login and create their
            account. Notaries will provide their certificates for being approved on the platform,
            and then be capable of scheduling appointments for RON (Remote Online Notarization).
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
                src={'./../../assets/images/customers/camron/logical-architecture.jpg'}
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
                src={'./../../assets/images/customers/camron/physical-architecture.jpg'}
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
              src={'./../../assets/images/customers/camron/roadmap.jpg'}
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
            src={'./../../assets/images/customers/camron/result.png'}
            alt={'The Result'}
          />
        }>
        <>
          <DetailParagraph>
            A productivity platform to help notaries perform their work online.
          </DetailParagraph>
          <DetailParagraph>
            We researched, designed, and developed the web product for providing RON services.
          </DetailParagraph>
          <DetailParagraph>
            The system allows users to invite different users and verify their identity using KBA
            (Knowledge Based Authentication), and ID Verification.
          </DetailParagraph>
          <DetailParagraph>
            All the participants can join a shared video call using WEBRtc natively on browsers. The
            system has the built-in capability of editing PDFs, recording video calls, digitally
            signing PDFs documents, and much more.
          </DetailParagraph>
          <DetailParagraph>
            We use 8base.com as a Low Code platform solution, and integrated multiple Managed
            Services from AWS and Twilio, such as WebRTC, Email Notifications, etc.
          </DetailParagraph>
          <List>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Location: </TextIndigo>
              {'  '}42 SW 119 COURT, MIAMI, FL 33184
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Industry: </TextIndigo>
              {'  '}Legal
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Product: </TextIndigo>
              {'  '}RON (Remote Online Notarization) SaaS platform
            </ListItem>
          </List>
        </>
      </ResultSection>
      <OurGoalSection data={goals} />
      <Section isPaddingless style={{ marginBottom: '6rem' }}>
        <SlidersCamron />
      </Section>
      <OurTeamSection data={team} />
      <EpilogueSection />
    </DetailLayout>
  );
};

Camron.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/camron/camron-logo.png" }) {
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

export default Camron;
