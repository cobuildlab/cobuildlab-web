import React from 'react';
import PropTypes from 'prop-types';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import OverviewSection from '../../components/customer-success-stories/OverviewSection';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import ProblemSection from '../../components/customer-success-stories/ProblemSection';
import SolutionSection from '../../components/customer-success-stories/SolutionSection';
import WhatWeDidSection from '../../components/customer-success-stories/WhatWeDidSection';
import LogicalArchitectureSection from '../../components/customer-success-stories/LogicalArchitectureSection';
import PhysicalArchitectureSection from '../../components/customer-success-stories/PhysicalArchitectureSection';
import RoadmapSection from '../../components/customer-success-stories/RoadmapSection';
import OurTeamSection from '../../components/customer-success-stories/OurTeamSection';
import SlidersAwakenFlow from '../../components/customer-success-stories/new/sliders/awaken-flow/Sliders';
import { graphql } from 'gatsby';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { StaticImage } from 'gatsby-plugin-image';
import { EpilogueSection } from '../../components/customer-success-stories/EpilogueSection';
import { Section } from 'bloomer';

const AwakenFlow = ({ data }) => {
  const team = [
    {
      first: 'Angel',
      last: 'Lacret',
      description: 'Chief of Product Development',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/team-pictures/angel.jpg'}
          alt={'Angel Lacret'}
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
      first: 'Ricardo',
      last: 'Moreno',
      description: 'Javascript Developer',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/avatar22.jpg'}
          alt={'Ricardo Moreno'}
        />
      ),
    },
  ];

  return (
    <DetailLayout>
      <SeoMetaTags
        title="Awaken Flow"
        description="Awaken Flow™ is a robust framework to navigate the unknown while claiming a deeply
            fulfilling life. It simplifies our approach to life so we can deal with the complexity
            of being human with wisdom and sovereignty. We can thrive together with our chosen hive
            through the seasons."
        image={data.seoImages.childImageSharp.resize}
      />
      <OverviewSection
        title="Awaken Flow"
        image={
          <StaticImage
            width={'1580'}
            height={'1084'}
            src={'./../../assets/images/customers/awaken-flow/overview-collage.png'}
            alt={'Overview collage'}
          />
        }>
        <DetailParagraph isBold={true}>
          Awaken Flow™ is a robust framework to navigate the unknown while claiming a deeply
          fulfilling life. It simplifies our approach to life so we can deal with the complexity of
          being human with wisdom and sovereignty. We can thrive together with our chosen hive
          through the seasons.
        </DetailParagraph>
      </OverviewSection>
      <ProblemSection
        image={
          <StaticImage
            width={'1024'}
            height={'500'}
            src={'../../assets/images/customers/awaken-flow/problem.jpg'}
            alt={'problem'}
          />
        }>
        <>
          <DetailParagraph>
            Mena Jimenez, the founder, had years of experience creating a lifestyle framework that
            followed six fundamental pillars activating each through 4 keys. Mena had already
            designed a beautiful paper/pdf worksheet that she used in her workshops and private
            classes, but she was ready to make this paper tool more interactive and engaging.
          </DetailParagraph>
        </>
      </ProblemSection>
      <SolutionSection
        image={
          <StaticImage
            objectFit="cover"
            src={'./../../assets/images/customers/awaken-flow/problem.jpg'}
            alt={'Solution'}
          />
        }>
        <>
          <DetailParagraph>
            Custom software was necessary because the UI design was particular from the customer
            side. Everything was done from scratch in terms of UI.
          </DetailParagraph>
          <DetailParagraph>
            Several Low Code tools were used for web services development, authentication, mailing,
            and other notifications.
          </DetailParagraph>
          <DetailParagraph>
            Using a common code approach was the fastest way to get the system up and running in the
            shortest possible time.
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
                src={'./../../assets/images/customers/awaken-flow/logical-architecture.jpg'}
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
                src={'./../../assets/images/customers/awaken-flow/physical-architecture.jpg'}
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
              src={'./../../assets/images/customers/awaken-flow/roadmap.jpg'}
              alt={'Roadmap'}
            />
          </RoadmapSection>
        }
      />
      <Section isPaddingless style={{ marginBottom: '6rem' }}>
        <SlidersAwakenFlow />
      </Section>
      <OurTeamSection data={team} />
      <EpilogueSection />
    </DetailLayout>
  );
};

AwakenFlow.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/awaken-flow/awaken-flow-logo.png" }) {
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

export default AwakenFlow;
