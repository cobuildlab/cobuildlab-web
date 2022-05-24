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
import SlidersEnvieStore from '../../components/customer-success-stories/new/sliders/enview-store/Sliders';

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
    {
      goal: 100,
      subTitle: '100% increase in the acquisition of customers and subscribers to the platform',
    },
  ];

  return (
    <DetailLayout>
      <SeoMetaTags
        title="Enview Store"
        description="eNView is responsible for measuring noise, vibration, and dust levels at construction sites, workspaces, and other sites where required."
        image={data.seoImages.childImageSharp.resize}
      />
      <OverviewSection
        title="Enview Store"
        image={
          <StaticImage
            width={'1580'}
            height={'1084'}
            src={'./../../assets/images/customers/enview-store/Overview.png'}
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
            src={'../../assets/images/customers/enview-store/3.png'}
            alt={'problem'}
          />
        }>
        <>
          <DetailParagraph>
            The client is required to create a web portal and e-commerce to commercialize their
            hardware products as well as the subscription to the cloud platform: Enview Cloud.
          </DetailParagraph>
        </>
      </ProblemSection>
      <SolutionSection
        image={
          <StaticImage
            width={'1920'}
            height={'1080'}
            src={'./../../assets/images/customers/enview-store/1.png'}
            alt={'Solution'}
          />
        }>
        <>
          <DetailParagraph>
            An e-commerce site to manage product purchases, orders, shopping carts, etc. Before we
            decided to go with a Custom Solution, we took a look at several e-commerce products, and
            none had the capabilities that we were looking for: Multi-currency, Stripe connected,
            and Unleashed ERP.
          </DetailParagraph>
          <DetailParagraph>
            We used a common code approach by connecting the site directly with Stripe to have our
            Products Database manage Customers and connected to Unleashed ERP to manage Order
            Records.
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
                src={'./../../assets/images/customers/enview-store/logical_architecture.jpg'}
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
                src={'./../../assets/images/customers/enview-store/physical-architecture.jpg'}
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
            src={'./../../assets/images/customers/enview-store/3.png'}
            alt={'The Result'}
          />
        }>
        <>
          <DetailParagraph>
            We designed and developed an e-commerce website using NextJS as the primary technology.
            This website is a multi-currency e-commerce platform connected to Stripe to manage
            products, customers, and payments and Unleashed ERP system to manage Orders.
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
              {'  '}E-commerce platform
            </ListItem>
          </List>
        </>
      </ResultSection>
      <OurGoalSection data={goals} />
      <Section isPaddingless style={{ marginBottom: '6rem' }}>
        <SlidersEnvieStore />
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
    seoImages: file(relativePath: { eq: "customers/enview-store/enviewlogo_black-min.png" }) {
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
