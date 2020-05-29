import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container, Columns, Column } from 'bloomer';
import SeoMetaTags from '../../components/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';

import DetailTeamSection from '../../components/customer-success-stories/DetailTeamSection';
import DetailCarousel from '../../components/customer-success-stories/detail-carousel/DetailCarousel';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import DetailSection from '../../components/customer-success-stories/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/Typography/TextHelpers';

const Massone = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Massone Mechanical"
      description="Massone Mechanical offers maintenance and installation services to commercial
      refrigeration companies."
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Massone Mechanical</DetailTitle>
            <DetailParagraph>
              Massone Mechanical offers maintenance and installation services to commercial
              refrigeration companies. Offering high quality products to meet the needs of its
              customers. The site has a pleasing design with multiple functions where you can
              contact the company, know the services they offer, the projects they are working on,
              as well as their customers and partners, achieving an integrative experience with
              customers.
            </DetailParagraph>
            <DetailParagraph>
              The Owner of Massone was born and raised in the East Bay and is an advocate of
              community-based partnerships
            </DetailParagraph>
            <DetailSubTitle>
              What is the Massone <TextOrange> platform? </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              Massone Mechanical sought to improve its processes in terms of customer service
              delivery and information management, mainly needed to automate the recording of calls
              or service orders maintenance or installation of refrigeration equipment, improve
              communication of services and reception of them to field workers.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <Img fluid={data.logo.childImageSharp.fluid} alt="" />
            </DetailHeroImagesContent>
            <DetailHeroImagesContent>
              <Img fluid={data.text.childImageSharp.fluid} alt="" />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection src={data.textImagesOne.childImageSharp.fluid} left>
      <DetailSubTitle>
        How everything <TextOrange>started:</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        I met Robert Mitchell, Head of IT for Massone about 3 years ago, we started since then
        working on possible solutions to improve the workflow for the company, we try different
        version of ERP applications and Third Party solutions. More than a year ago we realized that
        to improve Massone’s processes a Custom Application needed it to be developed, we spend
        several months reviewing the current process on the Company and what to do to improve them.
        Finally, we lock down a budget to start with the solution around September of 2018, in
        January 2019 we released the first version and we keep adding new features until today.
      </DetailParagraph>
      <DetailParagraph>
        Like any project, doubts and concerns arise about the achievement of the objective: to
        satisfy the client`s needs. In the beginning, there were many obstacles, problems with
        development, many changes in requirements (which were accepted). After completing the first
        phase there was a functional product, which met its measure with customer satisfaction.
        There was always communication with it, and a lot of support and understanding on their part
        to achieve this product that continues and hopefully will continue to grow with us.
      </DetailParagraph>
      <div>
        <List>
          <ListItem>
            <TextOrange>Location:</TextOrange> Miami, US
          </ListItem>
          <ListItem>
            <TextOrange>Web Site:</TextOrange> https://massonemechanical.com/
          </ListItem>
        </List>
      </div>
    </DetailSection>

    <Section>
      <Container>
        <DetailTeamSection />
      </Container>
    </Section>

    <Section isPaddingless>
      <DetailCarousel data={data.slider.edges} />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Massone.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/Massone.jpg" }) {
      childImageSharp {
        resize(width: 1200, height: 1200) {
          width
          height
          src
        }
      }
    }
    logo: file(relativePath: { eq: "customers/massone/logo.jpg" }) {
      childImageSharp {
        fluid {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
    text: file(relativePath: { eq: "customers/massone/text-corto.jpg" }) {
      childImageSharp {
        fluid {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
    textImagesOne: file(relativePath: { eq: "customers/massone/text-img-1.png" }) {
      childImageSharp {
        fluid {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
    slider: allFile(filter: { relativeDirectory: { eq: "customers/massone/slider" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(quality: 100) {
              base64
              sizes
              aspectRatio
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`;

export default Massone;
