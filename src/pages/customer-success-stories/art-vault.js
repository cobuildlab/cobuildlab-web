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

import { TextOrange } from '../../components/2021/text/TextHelpers';
import TextLink from '../../components/Typography/TextLink';
import { StaticImage } from 'gatsby-plugin-image';
import SlidersArtVault from '../../components/customer-success-stories/new/sliders/art-vault/Sliders';

const CollabToGrow = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Art Vault"
      description="Is an Art Management System that helps artists keep track of their
              inventory and the purchasing of their pieces."
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Art Vault</DetailTitle>
            <DetailParagraph>
              <b>Art Vault</b> is an Art Management System that helps artists keep track of their
              inventory and the purchasing of their pieces. Art vault highlights artists and their
              work, providing them with an invaluable tool that makes the tedious task of tracking
              art sales much easier, and also allows them to manage different projects and more
              efficiently handle their inventory.
            </DetailParagraph>
            <br />
            <DetailParagraph>
              Art management systems are invaluable software products for a diverse group of
              entities, from museums and public collections to private galleries. This type of
              system has a systematized methodology for data entry, information cataloging, and the
              management of collections and of any size.
            </DetailParagraph>
            <DetailSubTitle>
              The <TextOrange> Problem </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              <TextLink to="https://www.linkedin.com/in/kerrymclaney/">Kerry McLaney </TextLink>, is
              an active member of South Florida’s cultural scene, founder of 305 Creative, a
              creative bespoke agency specializing in art, design, and technology. With over 20+
              years of experience working and consulting with companies and artists in designing
              brand identities and experiences, she was looking to support new artists.
            </DetailParagraph>
            <DetailParagraph>
              This is exactly why she reached out to Cobuild Lab’s team to start developing a new
              platform that would allow her to close the gap between artists and buyers and keep
              track of all the artwork in stock.
            </DetailParagraph>
            <DetailParagraph>
              Considering that organizations like 305 Creative, art galleries, or auction houses
              tend to have a significant amount of artwork moving in and out of the facilities,
              maybe even more than many museums, we needed to make Art Vault{"'"}s platform capable
              of responding to such changes very smoothly and quickly while storing a large amount
              of data including photos.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage
                src={'./../../assets/images/customers/art-vault/art-vault-logo.jpg'}
                alt=""
              />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/laptop-left.png'} alt="" />}
      left>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        After a series of initial meetings to discuss the specific needs to be covered, it was very
        easy for us to design the product we were about to build. So we started the cobuild process
        by planning the development stages and putting together a team of our best back-end and
        front-end developers, a project manager, and a QA Analyst. Then, we got down to business. We
        have also created an algorithm to allow our art management system to keep track of all the
        artwork in stock, so the platform will detect any change in the status of the item and
        automatically update the inventory.
      </DetailParagraph>
      <br />
      <DetailParagraph>
        First of all, we had to develop a platform capable of storing large volumes of data. Cloud
        storage would provide us with the storage flexibility we needed without overloading the
        platform, so it would be very lightweight and very easy to move data within the system.
      </DetailParagraph>
      <DetailParagraph>
        We have also created an algorithm to allow our art management system to keep track of all
        the artwork in stock, so the platform will detect any change in the status of the item and
        automatically update the inventory.
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/laptop-right.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange>Result</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        Because of the excellent communication between our client and the development department, we
        were able to quickly build this platform in a very short time and with great results.
      </DetailParagraph>

      <DetailParagraph>
        Art vault is an art management system that provides the ideal structure for keeping track of
        all works at any given time: those that have been purchased for stock, those that have come
        in for {'"'}consideration{'"'} and those that have been given on consignment.
      </DetailParagraph>

      <DetailParagraph>
        The user interface of the platform is deliberately simple, really easy to use, and with a
        minimalist design making black & white an ideal canvas to showcase what is truly important:
        the artists and their creations.
      </DetailParagraph>

      <DetailParagraph>
        The platform allows its users to upload photos of their work alongside the information and
        details required for its posterior sale. Also, a certificate of authenticity is generated
        for each original piece in the inventory for the buyer{"'"}s peace of mind.
      </DetailParagraph>

      <DetailParagraph>
        With its calendar feature, it is possible to schedule events, meetings with clients, or
        tasks concerning the sale or delivery of art pieces. You will also be able to visit the
        artist{"'"}s profiles to get to know them and their backgrounds even better.
      </DetailParagraph>

      <DetailParagraph>
        Once again we can appreciate how the digital transformation is reaching all areas changing
        the way we live and operate and Art Vault is no exception, stepping up to take advantage of
        technology to keep empowering talented artists and creators.
      </DetailParagraph>
    </DetailSection>
    <Section isPaddingless>
      <SlidersArtVault />
    </Section>
    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

CollabToGrow.propTypes = {
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

export default CollabToGrow;
