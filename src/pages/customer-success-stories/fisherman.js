import PropTypes from 'prop-types';
import React from 'react';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import OverviewSection from '../../components/customer-success-stories/OverviewSection';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import ProblemSection from '../../components/customer-success-stories/ProblemSection';
import SolutionSection from '../../components/customer-success-stories/SolutionSection';
import WhatWeDidSection from '../../components/customer-success-stories/WhatWeDidSection';
import LogicalArchitectureSection from '../../components/customer-success-stories/LogicalArchitectureSection';
import RoadmapSection from '../../components/customer-success-stories/RoadmapSection';
import ResultSection from '../../components/customer-success-stories/ResultSection';
import SlidersFisherman from '../../components/customer-success-stories/new/sliders/fisherman/Sliders';
import OurGoalSection from '../../components/customer-success-stories/OurGoalSeaction';
import OurTeamSection from '../../components/customer-success-stories/OurTeamSection';
import { graphql } from 'gatsby';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { StaticImage } from 'gatsby-plugin-image';
import { EpilogueSection } from '../../components/customer-success-stories/EpilogueSection';
import { List, ListItem } from '../../components/Typography/List';
import { TextIndigo } from '../../components/2021/text/TextHelpers';
import { Section } from 'bloomer';

const Fisherman = ({ data }) => {
  const team = [
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
      first: 'Mayela',
      last: 'Marin',
      description: 'Project Manager',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/new-pictures/green/mayela-marin.jpg'}
          alt={'Mayela Marin'}
        />
      ),
    },
    {
      first: 'Alexander',
      last: 'Romero',
      description: 'Full Stack Javascript Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/new-pictures/white/Alexander-Romero.jpg'}
          alt={'Alexander Romero'}
        />
      ),
    },
    {
      first: 'Xavier',
      last: 'Romero',
      description: 'Full Stack Javascript Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'./../../assets/images/team/new-pictures/green/Xavier-Romero-Developer-v.jpg'}
          alt={'Xavier Romero'}
        />
      ),
    },
  ];

  const goals = [
    { goal: 100, subTitle: '100% increase of tracking productivity metrics' },
    { goal: 30, subTitle: '30% reduce manual tasks to track issues' },
    { goal: 30, subTitle: '30% reduce manual standups' },
  ];

  return (
    <DetailLayout>
      <SeoMetaTags
        title="Fisherman"
        description="Fisherman is an application interconnected with Slack and Github that helps development teams to perform their duties in a faster and more efficient way, such as standups, metrics, emails, tasks, and more."
        image={data.seoImages.childImageSharp.resize}
      />
      <OverviewSection
        title="Fisherman"
        image={
          <StaticImage
            width={'1580'}
            height={'1084'}
            src={'./../../assets/images/customers/fisherman/overview-collage.png'}
            alt={'Overview collage'}
          />
        }>
        <DetailParagraph isBold>
          Fisherman is an application interconnected with Slack and Github that helps development
          teams to perform their duties in a faster and more efficient way, such as standups,
          metrics, emails, tasks, and more.
        </DetailParagraph>
      </OverviewSection>
      <ProblemSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'../../assets/images/customers/fisherman/slider/1.jpg'}
            alt={'problem'}
          />
        }>
        <DetailParagraph>
          The opportunity stems from the need to help streamline processes and tasks related to the
          daily work of software development agencies.
        </DetailParagraph>
        <DetailParagraph>
          In addition, currently, there is no tool that allows monitoring the activities done by a
          developer in GitHub and to match those metrics with stand up activity.
        </DetailParagraph>
      </ProblemSection>

      <SolutionSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'../../assets/images/customers/fisherman/slider/2.jpg'}
            alt={'Solution'}
          />
        }>
        <>
          <DetailParagraph>
            We used a low code platform to rapidly prototype and develop features as we moved into
            discovering challenges for the development teams.
          </DetailParagraph>
          <DetailParagraph>
            Users can set up email accounts for the projects, standup bots, and view metrics on how
            developers are working on a project.
          </DetailParagraph>
          <DetailParagraph>
            In this way, a continuous follow-up of activities is maintained, having available
            metrics to evaluate the work performance in terms of designated kpi.
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
                src={'./../../assets/images/customers/fisherman/logical-architecture.jpg'}
                alt={'Logical Architecture'}
              />
            }></LogicalArchitectureSection>
        }
        roadmap={
          <RoadmapSection>
            <StaticImage
              style={{ width: '100%', maxWidth: '1000px' }}
              width={'960'}
              height={'540'}
              objectFit={'contain'}
              src={'./../../assets/images/customers/fisherman/roadmap.jpg'}
              alt={'Roadmap'}
            />
          </RoadmapSection>
        }
      />
      <ResultSection
        image={
          <StaticImage
            style={{ marginTop: '106.469px' }}
            width={'1920'}
            height={'1080'}
            src={'../../assets/images/customers/fisherman/slider/3.jpg'}
            alt={'The Result'}
          />
        }>
        <DetailParagraph>
          A web application for company managers to create projects on the platform, and be able to
          associate these projects with the Github repository and Slack workspaces to track,
          measure, and increase developer’s teams productivity.
        </DetailParagraph>
        <List>
          <ListItem>
            <TextIndigo style={{ fontWeight: 'bold' }}>Location: </TextIndigo>
            {'  '}Miami, FL
          </ListItem>
          <ListItem>
            <TextIndigo style={{ fontWeight: 'bold' }}>Industry: </TextIndigo> Software development
          </ListItem>
          <ListItem>
            <TextIndigo style={{ fontWeight: 'bold' }}>Product: </TextIndigo> Platform to track,
            measure, and increase developer’s teams productivity
          </ListItem>
        </List>
      </ResultSection>
      <OurGoalSection data={goals} />
      <Section isPaddingless style={{ marginBottom: '6rem' }}>
        <SlidersFisherman />
      </Section>
      <OurTeamSection data={team} />
      <EpilogueSection />
    </DetailLayout>
  );
};

Fisherman.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/fisherman/fisherman-logo.png" }) {
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

export default Fisherman;
