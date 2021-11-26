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

import { TextIndigo, TextOrange } from '../../components/2021/text/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Card from '../../components/team/card/Card';
import BannerBackgroundStories from '../../components/customer-success-stories/BannerBackgroundStories';
import TextLink from '../../components/Typography/TextLink';
import StickySection from '../../components/customer-success-stories/StickySection';
import Item from '../../components/enterprise/containers/testimonial/Item';
import SlidersNavigate from '../../components/customer-success-stories/new/sliders/navigate/Sliders';
import GoalChart from '../../components/customer-success-stories/chart/GoalChart';
import testimonialImage from './../../assets/images/customers/navigate/testimonial.jpg';
import { List, ListItem } from '../../components/Typography/List';

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

const TeamImagesContainer = styled.div`
  display: flex;
  flexwrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const OurGoalSection = styled.div`
  margin-top: 3.5rem;
`;

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
    first: 'Alan',
    last: 'R. Guevara',
    description: 'Chief of Product Management',
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/alanthinks.jpg'}
        alt={'Alan R. Guevara'}
      />
    ),
  },
  {
    first: 'Carlos',
    last: 'Magno',
    description: 'Project Manager',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/white/carlos-magno.jpg'}
        alt={'Carlos Magno'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
        alt={'Carlos Magno'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/new-pictures/green/carlos-magno.jpg'}
        alt={'Carlos Magno'}
      />
    ),
  },
  {
    first: 'Luis',
    last: 'Eulacio',
    description: 'Full Stack Javascript Developer',
    whitePicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
        alt={'Luis Eulacio'}
      />
    ),
    greenPicture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
        alt={'Luis Eulacio'}
      />
    ),
    picture: (
      <StaticImage
        className={'team-member-img'}
        src={'./../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
        alt={'Luis Eulacio'}
      />
    ),
  },
];

const Navigate = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Navigate"
      description="Founded by Pedro Sostre, a consultant and author with 20 years of experience in building companies, Navigate helps innovative Startup founders navigate the business world and get their start-up companies launched"
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
              <DetailTitle>Navigate</DetailTitle>
              <DetailParagraph isBold={true}>
                Founded by{' '}
                <TextLink to={'https://www.linkedin.com/in/psostre/'}>Pedro Sostre</TextLink>, a
                consultant and author with 20 years of experience in building companies,{' '}
                <TextLink to={'https://www.navigate.capital/'}>Navigate </TextLink>
                helps innovative Startup founders navigate the business world and get their start-up
                companies launched, growing, or prepared for financing through practical business
                advice. Navigate aims to support the rise of new businesses, collaborating in every
                step of their growth by minimizing the risk of failure and thus ensuring the success
                of innovative projects by providing all the tools and assistance to companies before
                they are launched into the market.
              </DetailParagraph>

              <DetailParagraph isBold={true}>
                Cobuild Lab and Navigate partnered up to provide the best services to scalable,
                early-stage companies to create customized growth action plans to help them get to
                the next level.
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
                    src={'./../../assets/images/customers/navigate/overview-collage.png'}
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
              <StickySection>
                <StaticImage
                  width={'1163'}
                  height={'665'}
                  src={'../../assets/images/customers/navigate/problem.png'}
                  alt={'problem'}
                />
              </StickySection>
            </Column>
            <Column isSize={{ tablet: 12, desktop: 6 }}>
              <DetailSubTitle>
                The <TextOrange> Problem </TextOrange>
              </DetailSubTitle>
              <DetailParagraph>
                Navigate Capital needed to improve the experience of their advisory process since a
                large part of their program is based on establishing milestones and planning a
                financial roadmap to achieve the goals of startups they are consulting.
              </DetailParagraph>
              <DetailParagraph>
                They needed a platform that would allow them to use their framework in an optimal
                way where they could provide knowledge, experience, and guidance for Startup
                founders.
              </DetailParagraph>
              <DetailParagraph>
                Just as every {"Startup's"} goals are unique, with specific needs, so must be the
                guidance provided. Therefore, the cornerstone of the entire project would be based
                on building a platform whose tools would allow the Navigate team to customize 100%
                of each Growth Action Plan to achieve short, medium, and long term goals for the
                Startups.
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
            width={'1267'}
            height={'745'}
            src={'./../../assets/images/customers/navigate/solution.png'}
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
          As part of creating a tool to help their clients, Navigate partnered up with Cobuild Lab
          to build a great idea!
        </DetailParagraph>

        <DetailParagraph>
          Since the very beginning, both teams were in perfect sync when visualizing the best
          solution: building a custom Learning Management System.
        </DetailParagraph>

        <DetailParagraph>
          An LMS (Learning Management System) platform is a support tool for the distance or
          semi-face-to-face teaching-learning process. It uses technology to reproduce all the
          resources and tools of a face-to-face class in the virtual environment. They are useful
          for both companies and educational institutions looking for an effective training method
          in which the physical presence of the participants is not necessary.
        </DetailParagraph>

        <DetailParagraph>
          “We defined it had to be functionally and flexible enough to adapt to any type of training
          or course and allow the users to find everything they need to carry out the required
          activities without difficulty. “{' '}
          <TextLink to={'https://www.linkedin.com/in/alanthinks/'}> Alan Guevara</TextLink>
        </DetailParagraph>

        <DetailParagraph>
          The platform had to be integrated with other tools or applications, to provide more
          complete learning according to the specific needs of the training.
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
      // Light section - What we did
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
              src={'./../../assets/images/customers/navigate/logical-architecture.jpg'}
              alt={'Logical Architecture'}
            />
          }>
          <DetailSubTitle isBold={false}>Logical Architecture</DetailSubTitle>
          <DetailParagraph>
            The app has 2 views, one for the users to take the lessons, watch the videos and answer
            the questions, and another one for the administrator to see the answers of each user,
            and see what progress he has, also he can answer questions or comments.
          </DetailParagraph>
          <DetailParagraph>
            Both interfaces communicate with a web API, which in turn interacts with a database
            where both the information of the lessons and the answers and comments are stored.
          </DetailParagraph>
        </DetailSection>

        {
          // Physical architecture section
        }
        <DetailSection
          image={
            <StaticImage
              width={'960'}
              height={'540'}
              src={'./../../assets/images/customers/navigate/physical-architecture.jpg'}
              alt={'Physical Architecture'}
            />
          }
          left>
          <DetailSubTitle isBold={false}>Physical Architecture</DetailSubTitle>
          <DetailParagraph>
            The interface communicates with each of these services for each particular task.
            Calendly for booking, Youtube for bringing videos, Sendgrid for sending email
            notifications, and so on.
          </DetailParagraph>
          <DetailParagraph>
            The interface communicates via HTTP with the web services that are hosted on 8base, and
            these services are built on top of the AWS infrastructure.
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
              src={'./../../assets/images/customers/navigate/roadmap.jpg'}
              alt={'Roadmap'}
            />
          </div>
        </div>
      </Section>
    </LightSection>

    {
      // The result
    }
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}></Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailSubTitle>
              The <TextOrange> Results </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              The project was divided into three phases that we built according to the Navigate
              {"team's"} needs. Along with each phase, we explored the opportunity of improving and
              optimizing specific aspects of the process and adding new features and tools. These
              were the most important features added in the process:
            </DetailParagraph>
            <List>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Onboarding: </TextIndigo>
                {'  '}Every new user can register by creating an account, filling in their details,
                and verifying their email address.
              </ListItem>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Goal setting:</TextIndigo>
                {'  '}Once registered, the user answers a questionnaire about their project and what
                their goals are so that the Navigate team can offer personalized guidance focusing
                on their needs.
              </ListItem>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Gamification:</TextIndigo>
                {'  '}During the consulting program, the Navigate platform visually displays the
                progress of each user and how much is left to do. {"It's"} a reward system so the
                users can see how far they have come.
              </ListItem>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Learning System:</TextIndigo>
                {'  '}Users will be able to access interactive video lessons as part of their growth
                program.
              </ListItem>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>
                  Guidance and mentor comments:{' '}
                </TextIndigo>
                {'  '} Throughout the course, mentors will be able to closely monitor {"users'"}
                progress, as well as leave comments on the text input that a user has filled in.
                Users will also be able to see their {"mentor's"} most recent comments on the home
                screen, mark them as read, and hide them. This represents constant feedback between
                the Startup founders and their mentors.
              </ListItem>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Subscribe {'&'} Billing:</TextIndigo>
                {'  '} Now users are able to subscribe to Navigate, choose a plan for them, and pay
                for it directly through the platform. The user can update payment details, download
                invoices, and more. If any user cancels their subscription they have the option to
                re-subscribe again whenever suits them best.
              </ListItem>
            </List>
          </Column>
        </Columns>
      </Container>
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
                <GoalChart goal={30} subTitle={'Increase customer satisfaction by 30%.'} />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart
                  goal={50}
                  subTitle={'Reduce manual tasks within the organization by 50%.'}
                />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart goal={30} subTitle={'Increase process efficiency by 30%.'} />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart goal={100} subTitle={'Reduce invoice issuing time by 100%.'} />
              </Column>
            </Columns>
          </Container>
        </Section>
      </LightSection>
    </OurGoalSection>

    {
      // Carousel
    }
    <Section isPaddingless>
      <SlidersNavigate />
    </Section>

    {
      // The testimonial
    }
    <Section>
      <center>
        <WrappResult>
          <Item
            title={'Pedro Sostre'}
            description={
              'Their commitment to their word, and their strategic advice, when approached with a project, is impressive.'
            }
            subtitle={'Pedro Sostre Founder, Navigate.capital'}
            image={{
              childImageSharp: {
                fixed: {
                  src: testimonialImage,
                },
              },
            }}
          />
        </WrappResult>
      </center>
    </Section>

    {
      // Out team
    }
    <LightSection>
      <Section>
        <Container>
          <div>
            <center>
              <DetailSubTitle isBold={false}>Our team</DetailSubTitle>
            </center>
            <TeamImagesContainer>
              {team.map((item, index) => (
                <CardContainer key={index}>
                  <Card first={item.first} last={item.last} description={item.description}>
                    {item.picture}
                  </Card>
                </CardContainer>
              ))}
            </TeamImagesContainer>
          </div>
        </Container>
      </Section>
    </LightSection>
  </DetailLayout>
);

Navigate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/art-vault/art-vault-logo.jpg" }) {
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

export default Navigate;
