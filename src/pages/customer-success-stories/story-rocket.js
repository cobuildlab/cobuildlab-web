import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';

import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/2021/text/TextHelpers';
import SlidersStoryRocket from '../../components/customer-success-stories/new/sliders/story-rocket/Sliders';
import { StaticImage } from 'gatsby-plugin-image';
import TextLink from '../../components/Typography/TextLink';

const StoryRocket = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Story Rocket"
      description=" is the ideal place to connect story writers with producers in the entertainment world"
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Storyrocket</DetailTitle>
            <DetailParagraph>
              <TextLink to="https://www.storyrocket.com/">Storyrocket</TextLink> is the ideal place
              to connect story writers with producers in the entertainment world, including movies,
              reality shows, and web or tv series. If you don{"'"}t have connections in this arena,
              your story probably won{"'"}t be seen, no matter how good it is.
            </DetailParagraph>
            <DetailParagraph>
              According to <TextLink to="https://www.storyrocket.com/">Storyrocket</TextLink>{' '}
              president, Emmy award-winning producer{' '}
              <TextLink to="https://www.linkedin.com/in/ana-benitez-69097a8/">
                Ana Benitez{' '}
              </TextLink>
              , “there are more distribution channels than ever and they need more and more content,
              and that content is everywhere.” That{"'"}s where Storyrocket enters the scene,
              creating an opportunity to build a bridge between the creators and the content
              distribution industry.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage
                src={'./../../assets/images/customers/story-rocket-logo.jpg'}
                alt={'Story Rocket'}
              />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={
        <StaticImage
          src={'./../../assets/images/customers/story-rocket/story-rocket-1.png'}
          alt=""
        />
      }
      right>
      <DetailSubTitle>
        The <TextOrange>Problem</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The Storyrocket web platform provided the basic functionality required, but there was a need
        to add a variety of new features and refresh the image of the platform.
      </DetailParagraph>
      <DetailParagraph>
        They got in touch with{' '}
        <TextLink to="https://www.linkedin.com/in/alacret/">Angel Lacret </TextLink>, Chief of
        Product Development and <TextLink to="https://cobuildlab.com/">Cobuild Lab’s </TextLink> CTO
        to build a software product that would solve two problems: first, it would allow writers and
        screenwriters to share some of their work to create more exposure, and second, it would
        function as a content pool for producers looking for new and refreshing stories.
      </DetailParagraph>
      <DetailParagraph>
        Cobuild Lab was given the mission of building a Version 2.0 of the platform, upgrading its
        look and feel as well as many of its core functionalities and backend technologies.
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={
        <StaticImage
          src={'./../../assets/images/customers/story-rocket/story-rocket-1.png'}
          alt=""
        />
      }
      left>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The platform needed more substance in terms of code, so we formed a team composed of the
        best back-end developers, a QA Tester, and a Project Manager. The task was clear: improve
        the basics of the platform and the documentation.
      </DetailParagraph>
      <DetailParagraph>
        As for the functionalities, we conducted extensive research and listed those that facilitate
        the connection between writers and producers. Of course, this stage would involve redefining
        the type of application, since Storyrocket will work as a professional network, so it was
        necessary to customize it from head to toe.
      </DetailParagraph>
      <DetailParagraph>
        Once the cobuild process started, we added a UX/UI designer and a front-end developer to
        work on the redesign of the website, we did a series of tests until we perfected the one
        that best fits the project; among the objectives outlined it was clear that:
      </DetailParagraph>
      <List>
        <ListItem>The platform had to be fairly intuitive and easy to navigate.</ListItem>
        <ListItem>
          The user experience must be optimal, to allow easy access to every user{"'"}s content and
          invite them to spend more time on the platform.
        </ListItem>
        <ListItem>
          And finally, this was a completely visual platform, so it was imperative to have a clean
          design with solid colors to highlight the user{"'"}s profiles.
        </ListItem>
        <ListItem>
          Help leaders and teachers to use their professional experience in their schools to improve
          and develop capability.
        </ListItem>
      </List>
    </DetailSection>

    <DetailSection
      image={
        <StaticImage
          src={'./../../assets/images/customers/story-rocket/story-rocket-1.png'}
          alt=""
        />
      }
      right>
      <DetailSubTitle>
        The <TextOrange>Result</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The result was a software product that serves as a newsfeed or professional network to
        connect writers with producers. Storyrocket{"'"}s value proposition is to open the doors to
        the entertainment industry, with over 1000 writers from around the world that now use the
        platform to promote their projects to producers.
      </DetailParagraph>
      <List>
        <ListItem>
          Once you log in, you{"'"}ll find a Dashboard where suggested stories appear according to
          the user preferences, as well as author recommendations.
        </ListItem>
        <ListItem>
          On the Blog section, you will be able to see the latest articles posted on the platform
          and you can filter them by categories: television, entertainment industry, filmmaking,
          movies, writing, and events.
        </ListItem>
        <ListItem>
          In the profile section, we can see all the information about each writer, from their
          location, languages in which they work, genre, material type, and intended medium. The
          first thing that appears is a short biography, awards received, projects, followers,
          videos, images, and groups where they belong.
        </ListItem>
        <ListItem>
          Since it is a professional network, one of the best features we were able to add was the
          ability to preview each writer{"'"}s content; you can view a PDF sample or request the
          full project right from the writer and even print a PDF pitch package; this would speed up
          the search process for producers. It is also possible to leave messages to the writer
          directly on the Storyrocket platform.
        </ListItem>
        <ListItem>
          It is also possible to see the views a profile or content has received, as well as likes
          and comments.
        </ListItem>
        <ListItem>
          Another one of our favorite functions is the ability to create groups around a topic,
          genre, etc. Any producer would understand that it is a tool capable of segmenting a
          community that is already very specific and a perfect opportunity to find that much
          sought-after screenwriter or writer for the production of that new movie that seeks to
          break with the cinematic paradigms imposed so far.{' '}
        </ListItem>
      </List>
    </DetailSection>

    <Section isPaddingless>
      <SlidersStoryRocket />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

StoryRocket.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/story-rocket-logo.jpg" }) {
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

export default StoryRocket;
