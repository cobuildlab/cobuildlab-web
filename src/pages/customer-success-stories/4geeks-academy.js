import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import SeoMetaTags from '../../components/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';

import DetailCarousel from '../../components/customer-success-stories/detail-carousel/DetailCarousel';
import DetailVideo from '../../components/customer-success-stories/DetailVideo';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import DetailSection from '../../components/customer-success-stories/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/Typography/TextHelpers';

const GeeksAcademy = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="4Geeks Academy"
      description="Beginning of 4Geeks"
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>4Geeks Academy</DetailTitle>
            <DetailSubTitle>
              <TextOrange> Beginning </TextOrange> of 4GeeksSucceed Platform?
            </DetailSubTitle>
            <DetailParagraph>
              The idea of an academy of programmers was an idea in Alejandro Sanchez mind since
              2009. By then, the Co-Founder and former CEO of some of the most important
              Accelerators in Venezuela had already met with all the challenges that the application
              development market when trying to find the best talent This company, already
              positioned at the forefront of software development, was constantly in the situation
              of finding new members for its projects, which by 2009 had been complicated by the
              shortage of trained personnel in the software developer market. Given this situation,
              a series of initiatives around the company’s activities are beginning to be developed
              to begin to recognize and attract the surrounding talent in the software world:
            </DetailParagraph>
            <List>
              <ListItem>
                <TextOrange>
                  The Tech Meetup: Event to gather entrepreneurs and developers
                </TextOrange>
              </ListItem>
              <ListItem>
                <TextOrange>
                  Workshops: Workshops in the company offices to train developers
                </TextOrange>
              </ListItem>
              <ListItem>
                <TextOrange>La Carta: The community newsletter</TextOrange>
              </ListItem>
              <ListItem>
                <TextOrange>
                  All these initiatives product of the experience of the company, but especially the
                  tastes and needs of its members will constitute 4Geeks Developers Community.
                </TextOrange>
              </ListItem>
            </List>
            <DetailParagraph>
              All these initiatives product of the experience of the company, but especially the
              tastes and needs of its members will constitute 4Geeks Developers Community.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <Img fluid={data.logo.childImageSharp.fluid} alt="" />
            </DetailHeroImagesContent>
            <DetailHeroImagesContent>
              <DetailVideo id="sJrH4f7Df8g" images={data.videoImages.childImageSharp.fluid} />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection src={data.textImagesOne.childImageSharp.fluid}>
      <DetailSubTitle>
        The Academy in <TextOrange>Venezuela</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        After many years of initiatives in 2014, it emerged in Venezuela: Academia Hack, an
        initiative of 4Geeks to solve a need that continued to grow very rapidly worldwide. The
        result was amazing, in October of 2014 Hack opens with an incredible demand, being the first
        success of the dream of having an academy for developers.
      </DetailParagraph>
    </DetailSection>

    <DetailSection src={data.textImagesTwo.childImageSharp.fluid} left>
      <DetailSubTitle>
        4Geeks Academy: <TextOrange> Maturity and experience</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        After a year of emotions and successes, Alejandro decided to take a much more ambitious step
        and set himself the task of launching this project in the city of Miami. With the experience
        gathered for more than 8 years promoting projects, the support of the 4Geeks community and
        the perfect sidekick (Marcelo Ricigliano, Vice President of 4Geeks Academy), the idea of
        4Geeks Academy, a part-time developer academy with a innovative study program for the city
        of Miami. Having almost 2 years of success and more than 250 stories in its participants the
        idea of 4Geeks Academy suffered the fate of all the projects carried out with experience,
        intelligence, passion and perseverance, demonstrating that in 4Geeks we can build
        sustainable businesses. Today, Alejandro works full time as {'  '}
        <TextOrange>CEO of 4Geeks Academy</TextOrange> and President of
        <TextOrange>{'  '}4Geeks Developers </TextOrange>
      </DetailParagraph>
      <List>
        <ListItem href="https://www.linkedin.com/in/alesanchezr/">
          <TextOrange>Alejandro Sanchez LinkedIn Bio</TextOrange>
        </ListItem>
        <ListItem href="https://www.linkedin.com/in/marcelo-ricigliano-32440379/">
          <TextOrange>Marcelo Ricigliano Linkedin Bio</TextOrange>
        </ListItem>
        <ListItem href="http://www.newsweek.com/insights/coding-career-and-you-top-coding-schools-2017/4geeks-academy">
          <TextOrange>A CODING CAREER AND YOU – TOP CODING SCHOOLS 2017</TextOrange>
        </ListItem>
      </List>
    </DetailSection>

    <Section isPaddingless>
      <DetailCarousel data={data.slider.edges} />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

GeeksAcademy.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/Weedmatch.jpg" }) {
      childImageSharp {
        resize(width: 1200, height: 1200) {
          width
          height
          src
        }
      }
    }
    slider: allFile(filter: { relativeDirectory: { eq: "customers/4geek/slider" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    textImagesTwo: file(relativePath: { eq: "customers/4geek/1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    textImagesOne: file(relativePath: { eq: "customers/4geek/2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    videoImages: file(relativePath: { eq: "customers/4geek/video-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo: file(relativePath: { eq: "customers/4geek/logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default GeeksAcademy;
