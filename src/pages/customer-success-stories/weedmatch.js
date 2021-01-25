import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import SeoMetaTags from '../../components/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraphTitle from '../../components/customer-success-stories/DetailParagraphTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';

import DetailVideo from '../../components/customer-success-stories/DetailVideo';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import { List, ListItem } from '../../components/Typography/List';
import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';

import { TextOrange } from '../../components/Typography/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';
import SlidersWeedmatch from '../../components/customer-success-stories/new/sliders/weedmatch/Sliders';

const Weedmatch = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Weedmatch"
      description="First free cannabis social network"
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Weedmatch</DetailTitle>
            <DetailParagraph>
              <TextOrange>Weedmatch </TextOrange> is the <TextOrange>first</TextOrange> free
              cannabis social network made by a group of Venezuelans led by its founder Oscar Lopez
              in Chile where you can interact with other people and be aware of events and news
              about the culture of cannabis. The part of the match is specially dedicated to
              cannabis relationships or encounters, which will eventually expand the networks of
              consumers and brands.
            </DetailParagraph>
            <DetailSubTitle>Founding History</DetailSubTitle>
            <DetailParagraph>
              <TextOrange>Oscar López </TextOrange> was born in Maracaibo, Venezuela. Graduated in
              Computer Engineering at the University Doctor Rafael Belloso Chacin. He has six years
              of experience developing internet projects in a wide range of areas, from websites to
              digital marketing agencies and managing a news conglomerate with 15 million Facebook
              fans all over Latin America. Prior to this, he worked for several years as a web
            </DetailParagraph>
            <DetailParagraphTitle>software developer</DetailParagraphTitle>
            <DetailParagraph>
              At the moment he is dedicated to change the Latin American Cannabis reality creating
              the first Cannabis social network in Chile and Latin America.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage src={'./../../assets/images/customers/weedmatch/logo.png'} alt="" />
            </DetailHeroImagesContent>
            <DetailHeroImagesContent>
              <DetailVideo id="5iLg-xUIlvo" images={data.videoImages.childImageSharp.fluid} />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/weedmatch/1.png'} alt="" />}
      left>
      <DetailSubTitle>
        Biography of <TextOrange> weedmatch</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        Born as an idea on April 20, 2017, to attend a national cannabis march in Chile, surprised
        with the call and massiveness, Oscar Lopez decided to create something to unite all the
        community, and from there emerged the idea of a social network. As he delved deeper into the
        idea and the Chilean cannabis culture he realized that the market and opportunity were much
        bigger than he expected and at the same time the worldwide cannabis culture begins to have
        high traction: it was a case of perfect timing.
      </DetailParagraph>
      <DetailSubTitle>
        How <TextOrange>everything</TextOrange>started
      </DetailSubTitle>
      <DetailParagraph>
        Oscar met Angel Lacret in the university, he knew that he was programming but they lost
        contact, sometime later they retaken contact by Facebook and Oscar remembered that he had a
        development company and decided to contact him to develop the Weedmatch project through
        Cobuild. During several months we chat about the Cannabis industry and its trends, and how
        the lifestyle world was in debt of tools for this community.
      </DetailParagraph>
    </DetailSection>
    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/weedmatch/2.png'} alt="" />}
      right>
      <DetailParagraph>
        lifestyle world was in debt of tools for this community. After a couple of meeting Oscar
        develop the concept of the brand with several of its partners and the shape of the Weedmatch
        app started arising. It was until beginnings of 2018 were we setup a team and start working
        in this project.
      </DetailParagraph>
      <DetailParagraph>
        We made an application for mobile Android and iPhone that allows you to contact the people
        closest to you, interested in the cannabis culture. Allows you to match and create a chat to
        chat and know the interests of those people.
      </DetailParagraph>
      <DetailParagraph>
        The application was develop using React Native and Django frameworks.
      </DetailParagraph>
      <DetailParagraph>
        The project lasted approximately four and a half months with a back-end programmer, a
        front-end programmer, a typesetter, and a Qa. Working as a team with the client and holding
        daily meetings, the first beta of the application was developed and then functionalities
        were added. Currently, the project is already live and all the Chilean community loving
        cannabis enjoys it.
      </DetailParagraph>
      <div>
        <List>
          <ListItem>
            <TextOrange>Contact Person:</TextOrange>
            {'  '}Oscar Lopez
          </ListItem>
          <ListItem>
            <TextOrange>Location:</TextOrange>
            {'  '}Chile, Santiago
          </ListItem>
          <ListItem>
            <TextOrange>Industry:</TextOrange>
            {'  '}Lifestyle and Commnunities
          </ListItem>
        </List>
      </div>
    </DetailSection>

    <Section isPaddingless>
      <SlidersWeedmatch />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Weedmatch.propTypes = {
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
    videoImages: file(relativePath: { eq: "customers/weedmatch/video-cover.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Weedmatch;
