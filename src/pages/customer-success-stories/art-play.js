import React from 'react';
import PropTypes from 'prop-types';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import SlidersArtPlay from '../../components/customer-success-stories/new/sliders/art-play/Sliders';
import OverviewSection from '../../components/customer-success-stories/OverviewSection';
import ProblemSection from '../../components/customer-success-stories/ProblemSection';
import SolutionSection from '../../components/customer-success-stories/SolutionSection';
import WhatWeDidSection from '../../components/customer-success-stories/WhatWeDidSection';
import LogicalArchitectureSection from '../../components/customer-success-stories/LogicalArchitectureSection';
import PhysicalArchitectureSection from '../../components/customer-success-stories/PhysicalArchitectureSection';
import RoadmapSection from '../../components/customer-success-stories/RoadmapSection';
import ResultSection from '../../components/customer-success-stories/ResultSection';
import OurGoalSection from '../../components/customer-success-stories/OurGoalSeaction';
import OurTeamSection from '../../components/customer-success-stories/OurTeamSection';
import { graphql } from 'gatsby';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { Section } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { TextIndigo } from '../../components/2021/text/TextHelpers';
import { List, ListItem } from '../../components/Typography/List';
import { EpilogueSection } from './../../components/customer-success-stories/EpilogueSection';

const ArtPlay = ({ data }) => {
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
      first: 'Jacqueline',
      last: 'Popovich',
      description: 'Product Manager',
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/team-pictures/jacqueline-popovich.jpg'}
          alt={'Jacqueline Popovich'}
        />
      ),
    },
    {
      first: 'Xavier',
      last: 'Romero',
      description: 'Full Stack Javascript Developer',
      whitePicture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/white/Xavier-Romero-Developer-b.jpg'}
          alt={'Xavier Romero'}
        />
      ),
      greenPicture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/green/Xavier-Romero-Developer-v.jpg'}
          alt={'Xavier Romero'}
        />
      ),
      picture: (
        <StaticImage
          className={'team-member-img'}
          src={'../../assets/images/team/new-pictures/white/Xavier-Romero-Developer-b.jpg'}
          alt={'Xavier Romero'}
        />
      ),
    },
  ];

  const goals = [
    { goal: 30, subTitle: '+30% Increase in customer satisfaction.' },
    { goal: 50, subTitle: '+50% Reduction of manual tasks.' },
    { goal: 30, subTitle: '+30% Increase in process efficiency' },
  ];

  return (
    <DetailLayout>
      <SeoMetaTags
        title="ArtPlay"
        description="Founded by Patricia Shea, gallery owner, appraiser, and art advisor with offices in New York and Los Angeles who serves to prominent public and private collectors as well as new ones seeking guidance in the complex world of collecting contemporary art, offering insightful analysis of this market with a global perspective."
        image={data.seoImages.childImageSharp.resize}
      />
      <OverviewSection
        title={'Art Play'}
        image={
          <StaticImage
            width={'1580'}
            height={'1084'}
            src={'./../../assets/images/customers/art-play/overview-collage.png'}
            alt={'Overview collage'}
          />
        }>
        <DetailParagraph isBold={true}>
          Founded by Patricia Shea, gallery owner, appraiser, and art advisor with offices in New
          York and Los Angeles who serves to prominent public and private collectors as well as new
          ones seeking guidance in the complex world of collecting contemporary art, offering
          insightful analysis of this market with a global perspective.
        </DetailParagraph>
        <DetailParagraph isBold={true}>
          Teaming up with Cobuild Lab, Art Play is now the first comprehensive solution for media
          art in terms of the collecting, sales, distribution, archive and exhibition.
        </DetailParagraph>
      </OverviewSection>
      <ProblemSection
        image={
          <StaticImage
            width={'1920'}
            height={'901'}
            src={'../../assets/images/customers/art-play/problem.png'}
            alt={'problem'}
          />
        }>
        <>
          <DetailParagraph>
            Patricia tried to use a couple of commercial solutions for providing this service. Both
            solutions fell short in providing all the set of features that she wanted to provide to
            their customers.
          </DetailParagraph>
          <DetailParagraph>
            Also, the limitations on customization for an impactful UI were too big. The solutions
            that she tried {'wouldn’t'} allow to provide the experience that her brand was trying to
            communicate.
          </DetailParagraph>
          <DetailParagraph>
            {'Patricia’s'} goal is to provide an objective view of the art market, an analysis of an{' '}
            {"artist's"} oeuvre, and to build important art collections for clients and collectors
            over the long term.
          </DetailParagraph>
          <DetailParagraph>
            The idea of centralizing digital art gave birth to the design and development of a
            platform for clients/collectors to host and display their art pieces.
          </DetailParagraph>
        </>
      </ProblemSection>
      <SolutionSection
        image={
          <StaticImage
            width={'1899'}
            height={'900'}
            src={'./../../assets/images/customers/art-play/solution.png'}
            alt={'Solution'}
          />
        }
        caption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }>
        <>
          <DetailParagraph>
            Patricia and Cobuild Lab teamed up to bring to life an ingenious idea to preview,
            purchase, display and preserve digital art.
          </DetailParagraph>
          <DetailParagraph>
            The project was basically building a web application that can be used on mobile devices
            as well, allowing the user to preview, edit, and display its collections, as well as
            import and upload digital art, and showcase this art on any screen using the platform
            itself.
          </DetailParagraph>
          <DetailParagraph>
            The application uses a Shopify login and username for users to authenticate and import
            the purchases that they have done on the main art play website, and it also allows users
            to explore new collections and different providers for digital art.
          </DetailParagraph>
          <DetailParagraph>
            This system falls under the category of a Custom CRM. A responsive web application that
            serves as a hub for serving Art Plays customers and provides additional services.
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
                src={'./../../assets/images/customers/art-play/logical-architecture.jpg'}
                alt={'Logical Architecture'}
              />
            }>
            <>
              <DetailParagraph>
                The app has 2 web interfaces, one for users to view and reproduce their art pieces;
                and a web console through which admin users can configure the platform.
              </DetailParagraph>
              <DetailParagraph>
                Both interfaces communicate with a web API, which in turn interacts with a database
                where both the information of the art pieces and the content is stored.
              </DetailParagraph>
              <DetailParagraph>
                At the same time, the app connects to the Shopify API to bring product information
                that is relevant to the {"platform's"} users.
              </DetailParagraph>
            </>
          </LogicalArchitectureSection>
        }
        physicalArchitecture={
          <PhysicalArchitectureSection
            image={
              <StaticImage
                width={'960'}
                height={'540'}
                src={'./../../assets/images/customers/art-play/physical-architecture.jpg'}
                alt={'Physical Architecture'}
              />
            }>
            <DetailParagraph>
              The web interface built with NextJS, ReactJS, and Material UI communicates the
              different web services of the platform through an API built with Graphql.
            </DetailParagraph>
            <DetailParagraph>
              The interface communicates over HTTPs with the web services that are hosted on
              8base.com, and these services are built on top of the AWS infrastructure.
            </DetailParagraph>
          </PhysicalArchitectureSection>
        }
        roadmap={
          <RoadmapSection>
            <StaticImage
              style={{ width: '100%', maxWidth: '1000px' }}
              width={'960'}
              height={'540'}
              objectFit={'contain'}
              src={'./../../assets/images/customers/art-play/roadmap.jpg'}
              alt={'Roadmap'}
            />
          </RoadmapSection>
        }
      />
      <ResultSection
        image={
          <StaticImage
            style={{ marginTop: '106.469px' }}
            width={'1899'}
            height={'900'}
            src={'./../../assets/images/customers/art-play/result.png'}
            alt={'The Result'}
          />
        }>
        <>
          <DetailParagraph>
            An easy-to-use platform to educate, present, distribute, collect, and preserve
            media-based art as part of a community of collectors, artists, and art professionals
            that are committed to creating and showing these works.
          </DetailParagraph>
          <DetailParagraph>
            Art Play was created using a low code strategy to speed the development of the platform,
            and it focuses on delivering value to its customers by an amazing feature full user
            interface.
          </DetailParagraph>
          <DetailParagraph>
            With {"ArtPlay's"} comprehensive service and secure, plug-and-play app on Apple TV and
            iPad, it is envisioned as a robust future for art and technology-based artwork where the
            collection, display, and preservation of media-based art have never been this accessible
            or user-friendly.
          </DetailParagraph>
          <List>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Location: </TextIndigo>
              {'  '}Miami, FL
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Industry: </TextIndigo> Arts, Entertainment
              and Lifestyle
            </ListItem>
            <ListItem>
              <TextIndigo style={{ fontWeight: 'bold' }}>Product: </TextIndigo> Web/mobile
              application
            </ListItem>
          </List>
        </>
      </ResultSection>
      <OurGoalSection data={goals} />
      <Section isPaddingless style={{ marginBottom: '6rem' }}>
        <SlidersArtPlay />
      </Section>
      <OurTeamSection data={team} />
      <EpilogueSection />
    </DetailLayout>
  );
};

ArtPlay.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/art-play/art-play-logo-black.png" }) {
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

export default ArtPlay;
