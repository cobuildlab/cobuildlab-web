import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../../components/team/card/Card';
import GoalChart from '../../components/customer-success-stories/chart/GoalChart';
import BannerBackgroundStories from '../../components/customer-success-stories/BannerBackgroundStories';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import StickySection from '../../components/customer-success-stories/StickySection';
import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import { graphql } from 'gatsby';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { Column, Columns, Container, Section } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { TextIndigo, TextOrange } from '../../components/2021/text/TextHelpers';
import { List, ListItem } from '../../components/Typography/List';

const OverviewSection = styled.div`
  margin-bottom: 5rem;
`;

const SolutionSection = styled.div`
  display: block;
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

const OurGoalSection = styled.div`
  margin-top: 3.5rem;
`;

const TeamImagesContainer = styled.div`
  display: flex;
  flexwrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const CardContainer = styled.div`
  padding: 1.5rem;
  width: 20%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

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

const ArtPlay = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="ArtPlay"
      description="Founded by Patricia Shea, gallery owner, appraiser, and art advisor with offices in New York and Los Angeles who serves to prominent public and private collectors as well as new ones seeking guidance in the complex world of collecting contemporary art, offering insightful analysis of this market with a global perspective."
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
              <DetailTitle>Art Play</DetailTitle>
              <DetailParagraph isBold={true}>
                Founded by Patricia Shea, gallery owner, appraiser, and art advisor with offices in
                New York and Los Angeles who serves to prominent public and private collectors as
                well as new ones seeking guidance in the complex world of collecting contemporary
                art, offering insightful analysis of this market with a global perspective.
              </DetailParagraph>

              <DetailParagraph isBold={true}>
                Teaming up with Cobuild Lab, Art Play is now the first comprehensive solution for
                media art in terms of the collecting, sales, distribution, archive and exhibition.
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
                    src={'./../../assets/images/customers/art-play/overview-collage.png'}
                    alt={'Overview collage'}
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
                  width={'1920'}
                  height={'901'}
                  src={'../../assets/images/customers/art-play/problem.png'}
                  alt={'problem'}
                />
              </StickySection>
            </Column>
            <Column isSize={{ tablet: 12, desktop: 6 }}>
              <DetailSubTitle>
                The <TextOrange> Problem </TextOrange>
              </DetailSubTitle>
              <DetailParagraph>
                Patricia tried to use a couple of commercial solutions for providing this service.
                Both solutions fell short in providing all the set of features that she wanted to
                provide to their customers.
              </DetailParagraph>
              <DetailParagraph>
                Also, the limitations on customization for an impactful UI were too big. The
                solutions that she tried {'wouldn’t'} allow to provide the experience that her brand
                was trying to communicate.
              </DetailParagraph>
              <DetailParagraph>
                {'Patricia’s'} goal is to provide an objective view of the art market, an analysis
                of an {"artist's"} oeuvre, and to build important art collections for clients and
                collectors over the long term.
              </DetailParagraph>
              <DetailParagraph>
                The idea of centralizing digital art gave birth to the design and development of a
                platform for clients/collectors to host and display their art pieces.
              </DetailParagraph>
            </Column>
          </Columns>
        </Container>
      </Section>
    </LightSection>

    {
      // The solution
    }
    <SolutionSection>
      <DetailSection
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
        }
        left>
        <DetailSubTitle>
          The <TextOrange>Solution</TextOrange>
        </DetailSubTitle>

        <DetailParagraph>
          Patricia and Cobuild Lab teamed up to bring to life an ingenious idea to preview,
          purchase, display and preserve digital art.
        </DetailParagraph>
        <DetailParagraph>
          The project was basically building a web application that can be used on mobile devices as
          well, allowing the user to preview, edit, and display its collections, as well as import
          and upload digital art, and showcase this art on any screen using the platform itself.
        </DetailParagraph>
        <DetailParagraph>
          The application uses a Shopify login and username for users to authenticate and import the
          purchases that they have done on the main art play website, and it also allows users to
          explore new collections and different providers for digital art.
        </DetailParagraph>
        <DetailParagraph>
          This system falls under the category of a Custom CRM. A responsive web application that
          serves as a hub for serving Art Plays customers and provides additional services.
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
              width={'960'}
              height={'540'}
              src={'./../../assets/images/customers/art-play/logical-architecture.jpg'}
              alt={'Logical Architecture'}
            />
          }>
          <DetailSubTitle isBold={false}>Logical Architecture</DetailSubTitle>
          <DetailParagraph>
            The app has 2 web interfaces, one for users to view and reproduce their art pieces; and
            a web console through which admin users can configure the platform.
          </DetailParagraph>
          <DetailParagraph>
            Both interfaces communicate with a web API, which in turn interacts with a database
            where both the information of the art pieces and the content is stored.
          </DetailParagraph>
          <DetailParagraph>
            At the same time, the app connects to the Shopify API to bring product information that
            is relevant to the {"platform's"} users.
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
              src={'./../../assets/images/customers/art-play/physical-architecture.jpg'}
              alt={'Physical Architecture'}
            />
          }
          left>
          <DetailSubTitle isBold={false}>Physical Architecture</DetailSubTitle>
          <DetailParagraph>
            The web interface built with NextJS, ReactJS, and Material UI communicates the different
            web services of the platform through an API built with Graphql.
          </DetailParagraph>
          <DetailParagraph>
            The interface communicates over HTTPs with the web services that are hosted on
            8base.com, and these services are built on top of the AWS infrastructure.
          </DetailParagraph>
        </DetailSection>

        {
          // Roadmap
        }
        <div>
          <div style={{ textAlign: 'center' }}>
            <DetailSubTitle isBold={false}>Roadmap</DetailSubTitle>
          </div>
          <Columns
            isMultiline
            style={{
              justifyContent: 'center',
            }}>
            <Column isSize={{ mobile: 5, desktop: 6 }}>
              <List>
                <ListItem>
                  Media Management APP v1: Content Management on the database: Integration with the
                  Shopify API, authenticating users against the Customer Database to sync the data
                  from their account to the web platform.
                </ListItem>
                <ListItem>
                  Media Management APP v2: Allow the platforma to list Shopify products to users on
                  the platform.
                </ListItem>
                <ListItem>
                  Media Management APP v3: Art Channels, a custom form of displaying information
                  about institutions and their pieces on the platform.
                </ListItem>
              </List>
            </Column>
          </Columns>
          <div style={{ textAlign: 'center' }}>
            <StaticImage
              style={{ width: '100%', maxWidth: '1000px' }}
              width={'1262'}
              height={'1394'}
              objectFit={'contain'}
              src={'./../../assets/images/customers/art-play/roadmap.png'}
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
          <Column isSize={{ mobile: 12, desktop: 6 }}>Lorem</Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailSubTitle>
              The <TextOrange> Results </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              An easy-to-use platform to educate, present, distribute, collect, and preserve
              media-based art as part of a community of collectors, artists, and art professionals
              that are committed to creating and showing these works.
            </DetailParagraph>
            <DetailParagraph>
              Art Play was created using a low code strategy to speed the development of the
              platform, and it focuses on delivering value to its customers by an amazing feature
              full user interface.
            </DetailParagraph>
            <DetailParagraph>
              With {"ArtPlay's"} comprehensive service and secure, plug-and-play app on Apple TV and
              iPad, it is envisioned as a robust future for art and technology-based artwork where
              the collection, display, and preservation of media-based art have never been this
              accessible or user-friendly.
            </DetailParagraph>
            <List>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Location: </TextIndigo>
                {'  '}Miami, FL
              </ListItem>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Industry: </TextIndigo> Arts,
                Entertainment and Lifestyle
              </ListItem>
              <ListItem>
                <TextIndigo style={{ fontWeight: 'bold' }}>Product: </TextIndigo> Web/mobile
                application
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
              <TextOrange> Our goals </TextOrange> for this project
            </DetailSubTitle>
          </center>
          <Container>
            <Columns isMultiline isCentered>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart goal={30} subTitle={'+30% Increase in customer satisfaction.'} />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart goal={50} subTitle={'+50% Reduction of manual tasks.'} />
              </Column>
              <Column isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart goal={30} subTitle={'+30% Increase in process efficiency'} />
              </Column>
            </Columns>
          </Container>
        </Section>
      </LightSection>
    </OurGoalSection>

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
