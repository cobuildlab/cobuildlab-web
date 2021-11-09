import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';

import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { List, ListItem } from '../../components/Typography/List';
import { TextIndigo, TextOrange } from '../../components/2021/text/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';
import TextLink from '../../components/Typography/TextLink';
import SlidersCollabToGrow from '../../components/customer-success-stories/new/sliders/collabToGrow/Sliders';
import styled from 'styled-components';
import BannerBackgroundStories from '../../components/customer-success-stories/BannerBackgroundStories';
import Card from '../../components/team/card/Card';
import Item from '../../components/enterprise/containers/testimonial/Item';
import GoalChart from '../../components/customer-success-stories/chart/GoalChart';
import StickySection from '../../components/customer-success-stories/StickySection';

const OverviewSection = styled.div`
  margin-bottom: 5rem;
`;

const BrandLogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.8rem;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const LightSection = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
`;

const SolutionSection = styled.div`
  display: block;
`;

const CardContainer = styled.div`
  padding: 1.5rem;
  width: 20%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const WrappResult = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
  max-width: 800px;
`;

const EpilogueSection = styled.div`
  overflow: hidden;
  justify-content: center;
  display: flex;
  width: 100%;
  position: relative;
`;

const FlexCenter = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const OurGoalSection = styled.div`
  margin-top: 3.5rem;
`;

const CollabToGrow = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Collab to Grow"
      description="Is a technology-enabled managed services and advisory firm that specializes in improving the performance of strategic alliances."
      image={data.seoImages.childImageSharp.resize}
    />

    {
      // Overview
    }
    <OverviewSection>
      <BannerBackgroundStories
        style={{
          top: '4%',
          left: '-16%',
          width: '70%',
          height: '70%',
        }}
      />
      <Section>
        <Container>
          <Columns isMultiline>
            <Column isSize={{ mobile: 12, desktop: 6 }}>
              <DetailTitle>Collab to grow</DetailTitle>
              <DetailParagraph isBold={true}>
                <TextLink to="https://collabtogrow.com/">Collabtogrow™</TextLink> Inc. is a
                technology-enabled managed services and advisory firm that specializes in improving
                the performance of strategic alliances.
              </DetailParagraph>
              <br />
              <DetailParagraph isBold={true}>
                <TextLink to="https://www.linkedin.com/in/ken-coppins-432b70183">
                  Ken Coppins
                </TextLink>
                and
                <TextLink to="https://www.linkedin.com/in/bob-jones-1147834/">Bob Jones</TextLink> ,
                both highly experienced corporate executives, management consultants, and
                co-founders of <TextLink to="https://collabtogrow.com/">Collabtogrow™</TextLink>,
                believe that repeatable frameworks, workflows, and tools are fundamental for growing
                potential collaborative relationships. In Collabtogrow™ they leverage their proven
                framework of industry-leading practices, standards, and tools to help their clients
                greatly increase their chances of their alliances being successful.
              </DetailParagraph>
              <BrandLogosContainer>
                <StaticImage
                  width={'67'}
                  height={'68'}
                  style={{ marginRight: '4rem' }}
                  objectFit={'contain'}
                  src={'../../assets/images/logos/brands-stories/google.png'}
                  alt={'Google'}
                />
                <StaticImage
                  width={'90'}
                  height={'80'}
                  style={{ marginRight: '4rem' }}
                  objectFit={'contain'}
                  src={'../../assets/images/logos/brands-stories/react.png'}
                  alt={'React'}
                />
                <StaticImage
                  width={'91'}
                  height={'91'}
                  objectFit={'contain'}
                  src={'../../assets/images/logos/brands-stories/aws.png'}
                  alt={'AWS'}
                />
              </BrandLogosContainer>
            </Column>
            <Column
              style={{ display: 'flex', justifyContent: 'center' }}
              isSize={{ mobile: 12, desktop: 6 }}>
              <div style={{ width: '600px' }}>
                <DetailHeroImagesContent>
                  <StaticImage
                    width={'1580'}
                    height={'1084'}
                    src={'./../../assets/images/customers/collabtogrow/overview-collage.png'}
                    alt={'Overview Collab'}
                  />
                </DetailHeroImagesContent>
              </div>
            </Column>
          </Columns>
        </Container>
      </Section>
    </OverviewSection>

    {
      // Problem
    }
    <LightSection>
      <Section>
        <Container>
          <Columns isMultiline>
            <Column isSize={{ tablet: 12, desktop: 6 }}>
              <StickySection />
            </Column>
            <Column isSize={{ tablet: 12, desktop: 6 }}>
              <DetailSubTitle>
                The <TextOrange> Problem </TextOrange>
              </DetailSubTitle>
              <DetailParagraph>
                Already investing a significant amount of time dedicated to structure and organizing
                corporate strategic alliances, they needed a solution that would not only give them
                more insight but give them back their time.
              </DetailParagraph>
            </Column>
          </Columns>
        </Container>
      </Section>
    </LightSection>

    {
      // Solution
    }
    <SolutionSection>
      <DetailSection
        image={
          <StaticImage
            width={'1792'}
            height={'1192'}
            src={'./../../assets/images/customers/collabtogrow/solution.png'}
            alt={'Solution'}
          />
        }
        caption={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        left>
        <DetailSubTitle>
          The <TextOrange>Solution</TextOrange>
        </DetailSubTitle>
        <DetailParagraph>
          The next logical step was the development of an application that could help Collabtogrow™
          accelerate the process in which, through their framework and workflows, increase the
          collaborative relationship potential of their clients. They needed a new system that would
          be cost-effective and improve the performance of the strategic alliance.
        </DetailParagraph>
        <br />
        <DetailParagraph>
          After researching different development alternatives, including existing “no-code”
          vendors, they concluded that <TextLink to="https://www.8base.com/">8base</TextLink> was
          the only company whose platform provided the tools needed to build the application, such
          as:
          <List>
            <ListItem>On-site technical services.</ListItem>
            <ListItem>Capabilities to develop, host, and maintain the application.</ListItem>
            <ListItem>Power to bring the SaaS platform to life in a fast, scalable way.</ListItem>
            <ListItem>A robust platform.</ListItem>
            <ListItem>
              Security and scalability integrated with a world-class cloud provider.
            </ListItem>
            <ListItem>Reasonable costs.</ListItem>
          </List>
        </DetailParagraph>
        <DetailParagraph>
          <TextLink to="https://cobuildlab.com/">Cobuild Lab</TextLink> brought to the team
          extensive experience building web applications, especially with the ReactJS framework,
          which is a core element in the 8base stack. Our developers are battle-tested React
          frontend experts with great skills in coding HTML, CSS, and Javascript. They set out to
          create a.
          <TextLink to="https://cobuildlab.com/blog/4-readons-why-your-company-needs-a-custom-software/amp/">
            Custom Software Solution
          </TextLink>
          , a process in which we design and build a software solution for a specific client within
          a well-defined set of requirements.
        </DetailParagraph>

        <Container>
          <Columns>
            <Column
              style={{ display: 'flex', alignItems: 'center', marginTop: '2.5rem' }}
              isSize={{ desktop: 12 }}>
              <StaticImage
                width={'67'}
                height={'68'}
                style={{ marginRight: '4rem' }}
                objectFit={'contain'}
                src={'../../assets/images/logos/brands-stories/google.png'}
                alt={'Google'}
              />
              <StaticImage
                width={'90'}
                height={'80'}
                style={{ marginRight: '4rem' }}
                objectFit={'contain'}
                src={'../../assets/images/logos/brands-stories/react.png'}
                alt={'React'}
              />
              <StaticImage
                width={'91'}
                height={'91'}
                style={{ marginRight: '4rem' }}
                objectFit={'contain'}
                src={'../../assets/images/logos/brands-stories/aws.png'}
                alt={'AWS'}
              />
              <StaticImage
                width={'91'}
                height={'91'}
                style={{ marginRight: '4rem' }}
                objectFit={'contain'}
                src={'../../assets/images/logos/brands-stories/aws.png'}
                alt={'AWS'}
              />
              <StaticImage
                width={'67'}
                height={'68'}
                objectFit={'contain'}
                src={'../../assets/images/logos/brands-stories/google.png'}
                alt={'Google'}
              />
            </Column>
          </Columns>
        </Container>
      </DetailSection>
    </SolutionSection>

    {
      // Light section - Nested
    }
    <LightSection>
      <Section>
        <div style={{ textAlign: 'center' }}>
          <DetailSubTitle>
            What <TextOrange> We Did </TextOrange>
          </DetailSubTitle>
        </div>

        {
          // Logical architecture section
        }
        <DetailSection
          image={
            <StaticImage
              width={'1800'}
              height={'1064'}
              src={'./../../assets/images/customers/collabtogrow/logical-architecture.png'}
              alt={'Logical Architecture'}
            />
          }>
          <DetailSubTitle isBold={false}>Logical Architecture</DetailSubTitle>
          <DetailParagraph>
            Already investing a significant amount of time dedicated to structure and organizing
            corporate strategic alliances, they needed a solution that would not only give them more
            insight but give them back their time. Already investing a significant amount of time
            dedicated to structure and organizing corporate strategic alliances, they needed a
            solution that would not only give them more insight but give them back their time.
            Already investing a significant amount of time dedicated to structure and organizing
            corporate strategic alliances, they needed a solution that would not only give them more
            insight but give them back their time.Already investing a
          </DetailParagraph>
        </DetailSection>

        {
          // Physical architecture section
        }
        <DetailSection
          image={
            <StaticImage
              width={'1802'}
              height={'1066'}
              src={'./../../assets/images/customers/collabtogrow/physical-architecture.png'}
              alt={'Physical Architecture'}
            />
          }
          left>
          <DetailSubTitle isBold={false}>Physical Architecture</DetailSubTitle>
          <DetailParagraph>
            Already investing a significant amount of time dedicated to structure and organizing
            corporate strategic alliances, they needed a solution that would not only give them more
            insight but give them back their time. Already investing a significant amount of time
            dedicated to structure and organizing corporate strategic alliances, they needed a
            solution that would not only give them more insight but give them back their time.
            Already investing a significant amount of time dedicated to structure and organizing
            corporate strategic alliances, they needed a solution that would not only give them more
            insight but give them back their time.Already investing a
          </DetailParagraph>
        </DetailSection>

        {
          // Roadmap
        }
        <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <div style={{ textAlign: 'center' }}>
            <DetailSubTitle isBold={false}>Roadmap</DetailSubTitle>
            <StaticImage
              style={{ width: '100%', maxWidth: '1000px' }}
              width={'2720'}
              height={'1412'}
              objectFit={'contain'}
              src={'./../../assets/images/customers/collabtogrow/roadmap.png'}
              alt={'Roadmap'}
            />
          </div>
        </div>

        {
          // Out team
        }
        <Container>
          <div>
            <center>
              <DetailSubTitle isBold={false}>Our team</DetailSubTitle>
            </center>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
              {new Array(10).fill('').map((item, index) => (
                <CardContainer key={index}>
                  <Card
                    first={'Alessandra'}
                    last={'Lubertino'}
                    description={'Growth and Strategic Partnerships Executive'}>
                    <StaticImage
                      class={'team-member-img'}
                      src={'../../assets/images/team/new-pictures/white/alessandra-brusut.jpg'}
                      alt={'Alessandra Lubertino'}
                    />
                  </Card>
                </CardContainer>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </LightSection>

    {
      // The result
    }
    <Section>
      <center>
        <DetailSubTitle>
          The <TextOrange>Result</TextOrange>
        </DetailSubTitle>
        <WrappResult>
          <Item
            title={'Andres Aguerrevere'}
            description={
              'Cobuild Lab Inc performed admirably in every aspect of the engagement, delivering a high-quality final product. Communicative and dedicated, the team developed a good understanding of the project and exceeded expectations in terms of quality and work ethic.'
            }
            subtitle={'Internal Dashboard Dev for Digital Marketing Agency'}
            image={{
              childImageSharp: {
                fixed: {
                  src: 'https://main.cobuildlab.com/static/2984dc5a01c3ba4119169414fcceeb81/16c7d/andres-wegacha-120.png',
                },
              },
            }}
          />
        </WrappResult>
      </center>
    </Section>

    {
      // Carousel
    }
    <Section isPaddingless>
      <SlidersCollabToGrow />
    </Section>

    {
      // Our goal
    }
    <OurGoalSection>
      <LightSection>
        <Section>
          <center>
            <DetailSubTitle>
              <TextOrange>Our goals</TextOrange> for this project
            </DetailSubTitle>
          </center>
          <Container>
            <Columns isMultiline isCentered>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart
                  goal={10}
                  subTitle={'It is a long established fact that a reader will be distracted'}
                  description={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                  }
                />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart
                  goal={30}
                  subTitle={'It is a long established fact that a reader will be distracted'}
                  description={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                  }
                />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart
                  goal={50}
                  subTitle={'It is a long established fact that a reader will be distracted'}
                  description={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                  }
                />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart
                  goal={80}
                  subTitle={'It is a long established fact that a reader will be distracted'}
                  description={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                  }
                />
              </Column>
            </Columns>
          </Container>
        </Section>
      </LightSection>
    </OurGoalSection>

    {
      // Epilogue section
    }
    <EpilogueSection>
      <Section>
        <div style={{ maxWidth: '1000px' }}>
          <BannerBackgroundStories
            style={{
              top: '-40%',
              right: '-80%',
              width: '130%',
              height: '130%',
            }}
          />
          <FlexCenter>
            <DetailTitle>
              <TextIndigo>{"Let's"} </TextIndigo>
              Build{' '}
              <TextIndigo>
                a<br />
                Great
              </TextIndigo>{' '}
              Idea
            </DetailTitle>
          </FlexCenter>
          <DetailSubTitle isBold={false}>About cobuild lab’s benefits</DetailSubTitle>
          <DetailParagraph>
            The next logical step was the development of an application that could help
            Collabtogrow™ accelerate the process in which, through their framework and workflows,
            increase the collaborative relationship potential of their clients. They needed a new
            system that would be cost-effective and improve the performance of the strategic
            alliance.
            <br />
            <br />
            After researching different development alternatives, including existing “no-code”
            vendors, they concluded that 8base was the only company whose platform provided the
            tools needed to build the application, such as:
          </DetailParagraph>
          <DetailSubTitle isBold={false}>Long-term partnership</DetailSubTitle>
          <DetailParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nulla metus. Nullam
            feugiat aliquet velit a gravida. Pellentesque quam justo, placerat in odio in, laoreet
            cursus elit. Curabitur metus metus, facilisis nec ligula quis, iaculis faucibus odio.
            Vivamus ut mi rhoncus nisi vulputate convallis sed eu tellus. Aenean eu magna id massa
            euismod laoreet vel sed felis. Sed efficitur arcu sit amet dolor suscipit ultrices.
            Etiam nec risus ultricies, mattis erat et, rutrum orci. Quisque a ipsum semper,
            vestibulum risus in, sollicitudin elit. Fusce efficitur congue ullamcorper.
          </DetailParagraph>
        </div>
      </Section>
    </EpilogueSection>
  </DetailLayout>
);

CollabToGrow.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/collab-logo.jpg" }) {
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

export default CollabToGrow;
