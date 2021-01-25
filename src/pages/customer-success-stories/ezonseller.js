import React from 'react';
import PropTypes from 'prop-types';
import { Section, Container, Columns, Column } from 'bloomer';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
// import DetailCarousel from '../../components/customer-success-stories/DetailCarousel';
import DetailVideo from '../../components/customer-success-stories/DetailVideo';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/Typography/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';

const Ezonseller = ({ data }) => (
  <DetailLayout>
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Ezonseller</DetailTitle>
            <DetailParagraph>
              <strong>Ezonseller</strong> uses a simple principle that has been the basis of a
              profitable business for thousands of years - buy at a price and sellat a higher price.
              You must discover the products that people are buying and identify, where you can buy
              them and sell them at a profit. At Ezonseller the idea is to make that research
              process easier and something that anyone can do.
            </DetailParagraph>
            <DetailSubTitle>
              Introducing Steve Rogers, <TextOrange>the founder</TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              Started in 2006 in Brighton, when **Steve Rogers** attended a Bootcamp from a
              well-known salesman, and after three days realized that things weren&apos;t as they
              wanted to make it seem.
              <DetailParagraph>
                After many months he still hadn&apos;t won his first dollar, and five years later,
                after many searches, he was even worse than when he started. The training programs
                promised him so much that in the end they only generated great doubts and worries.
              </DetailParagraph>
              <DetailParagraph>
                In 2011 because of fate, Steve talked to a good friend, who told him that a large
                retail store had a store that sold quality items at low prices, that&apos;s how he
                made his first investment of 10 HD webcams and managed to sell them in a few days.
                And that&apos;s how the whole idea started and became what we see today.
              </DetailParagraph>
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage
                src={'./../../assets/images/customers/4geek/logo.png'}
                alt={'4geeks logo'}
              />
            </DetailHeroImagesContent>
            <DetailHeroImagesContent>
              <DetailVideo />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/laptop-left.png'} alt="" />}
      left>
      <DetailSubTitle>
        What is the <TextOrange>Ezonseller platform?</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The work that was made with Steve, in the development of the product, was implemented
        through two frameworks: Django (framework of python with which the API was developed) and
        React (framework of javascript with which the views were developed), the work deals in
        itself with the comparison of prices of products between the platforms Amazon and Ebay.
        Several modules were developed in the application such as account management (login,
        registration, password recovery), management for product searches through the mentioned
        platforms, plan and payment management (creation, edition, elimination) and credit card
        management through the stripe payment platform.
        <blockquote>
          Ezonseller connect entrepreneurs with business opportunities. The ideal platform to make
          your business grow.
        </blockquote>
      </DetailParagraph>
    </DetailSection>
    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/laptop-right.png'} alt="" />}
      right>
      <DetailSubTitle>
        How everything <TextOrange>started:</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The development of this project started around May of 2014 when Steve contacted me in a
        freelance platform to develop the first version of its software.
      </DetailParagraph>
      <DetailParagraph>
        We built a version 1, using the technologies available back them.
      </DetailParagraph>
      <DetailParagraph>
        Over the years Steve and I stay in contact regarding this project, and early in 2018, we
        have ready to create version 2.
      </DetailParagraph>
      <div>
        <List>
          <ListItem>
            <TextOrange>Contact Person:</TextOrange>
            {'  '}Steve Rogers @ezonsellers
          </ListItem>
          <ListItem>
            <TextOrange>Location:</TextOrange>
            {'  '}Miami, US
          </ListItem>
          <ListItem>
            <TextOrange>Web Site:</TextOrange>
            {'  '}http://www.ezonseller.com/
          </ListItem>
        </List>
      </div>
    </DetailSection>

    {/*
      <Section isPaddingless>
        <DetailCarousel  />
      </Section>
    */}

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Ezonseller.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Ezonseller;
