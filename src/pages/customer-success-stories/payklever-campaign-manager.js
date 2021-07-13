import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';

import DetailVideo from '../../components/customer-success-stories/DetailVideo';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/2021/text/TextHelpers';
import { StaticImage } from 'gatsby-plugin-image';
import SlidersPayklever from '../../components/customer-success-stories/new/sliders/payklever/Sliders';

const PaykleverCampaignManager = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Payklever Campaign Manager"
      description="With Payklever you can turn your car into a payment method."
      image={data.seoImages.childImageSharp.gatsbyImageData}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Payklever Campaign Manager</DetailTitle>
            <DetailParagraph>
              With Payklever you can turn your car into a payment method. You can drive quietly and
              never handle your cash or cards. Payklever started in 2016 as an idea of its founders
              to provide a hands-free payment method using RFID technology in garages, drive-thrus
              and gas stations.
            </DetailParagraph>
            <DetailSubTitle>
              Introducing Alexis and Kabir,<TextOrange> the founders:</TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              <TextOrange>Alexis Jonama</TextOrange>, the founder of Payklever, has a Master of
              Business Administration from INSEAD, a Bachelor of Engineering degree from Faculté
              Polytechnique de Mons and also has an Engineer`s degree from the Universitat
              Politècnica de Catalunya. He has over two years experience as an engagement manager at
              McKinsey & Company. INSEAD (SG).
            </DetailParagraph>
            <DetailParagraph>
              <TextOrange>Kabir Frutos</TextOrange>, the founder of Payklever, has a Master of
              Business Administration from INSEAD, a Bachelor of Engineering degree from Faculté
              Polytechnique de Mons and also has an Engineer`s degree from the Universitat
              Politècnica de Catalunya. He has over two years experience as an engagement manager at
              McKinsey & Company. INSEAD (SG).
            </DetailParagraph>
            <DetailParagraph>
              With Kabir and Alexis we work building a Campaign Manager for the current Payklever
              platform.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage src={'./../../assets/images/customers/payklever/logo.png'} alt="" />
            </DetailHeroImagesContent>
            <DetailHeroImagesContent>
              <DetailVideo
                id="QAEOiEdZOUM"
                images={data.videoImages.childImageSharp.gatsbyImageData}
              />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/payklever/1.png'} alt="" />}
      right>
      <DetailSubTitle>
        What is the <TextOrange> Payklever Campaign </TextOrange> platform?
      </DetailSubTitle>
      <DetailParagraph>
        This platform consists of managing, organizing, segmenting and locating advertising
        campaigns with the aim of effectively promoting them through the dissemination of electronic
        channels, principally via text message (SMS), through the integration of the existing data
        of our customers registered in the playklever platform and data from the target market.
      </DetailParagraph>
      <DetailSubTitle>
        How <TextOrange>everything </TextOrange>started
      </DetailSubTitle>
      <DetailParagraph>
        Marcelo Ricigliano, COO of 4Geeks Academy was the contact person for this project.
      </DetailParagraph>
      <DetailParagraph>
        Kabir Frutos worked at Starthub, a cowork space located in Downtown Miami, the place where
        4Geeks Academy founder, Marcelo met him.
      </DetailParagraph>
      <DetailParagraph>
        Then, having left, they met again playing soccer. Talking that day Kabir found out about the
        software company and then he decided to contact Marcelo to talk about the project and the
        needs that they have. The meeting was held to talk about the project they had in mind from
        the campaign manager, and how they had already been developing the payklever platform. In
        this way, work began on this great project.
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/payklever/2.png'} alt="" />}
      left>
      <DetailParagraph>
        Starting working on the project was very exciting, after all it was a new client, new
        challenges in a great idea.
      </DetailParagraph>
      <DetailParagraph>
        At the beginning of the development there was an unforeseen event that made the first
        delivery almost a disaster, despite that, they were very understanding with us and continued
        betting motivating the team to work and improve.
      </DetailParagraph>
      <DetailParagraph>
        For a second installment Alexis and Kabir could see their idea come true, with their
        observations and suggestions the project was being routed with them next, anything that we
        needed all the Payklever team very kindly helped us, always very attentive to us for achieve
        materialize the final campaign manager.
      </DetailParagraph>
      <DetailParagraph>
        The final test arrived after 3 months of development, it was necessary to carry out live
        tests, using the parking lot and not a simulator, more worries that went through our minds,
        and many crossed fingers so that everything went well ... and it was!
      </DetailParagraph>
      <DetailParagraph>
        But the best came after this, a few words that are rare to hear in the world of software
        development: Congratulations Team! You have done well!
      </DetailParagraph>
      <DetailParagraph>
        We were very encouraged by having met the objective, to achieve the satisfaction of Alexis
        and Kabir, who after having had an idea could have materialized and as they expected.
      </DetailParagraph>
      <div>
        <List>
          <ListItem>
            <TextOrange>Contact Person:</TextOrange>
            {'  '}Alexis Jonama
          </ListItem>
          <ListItem>
            <TextOrange>Location:</TextOrange>
            {'  '}Miami, US
          </ListItem>
          <ListItem>
            <TextOrange>Industry:</TextOrange>
            {'  '}Product and Operations
          </ListItem>
          <ListItem>
            <TextOrange>Web Site:</TextOrange>
            {'  '}http://payklever.com/
          </ListItem>
        </List>
        <List>
          <ListItem>
            <TextOrange>Contact Person:</TextOrange>
            {'  '} Kabir Frutos
          </ListItem>
          <ListItem>
            <TextOrange>Location:</TextOrange>
            {'  '}Miami, US
          </ListItem>
          <ListItem>
            <TextOrange>Industry:</TextOrange>
            {'  '} General Manager
          </ListItem>
          <ListItem>
            <TextOrange>Web Site:</TextOrange>
            {'  '}http://payklever.com/
          </ListItem>
        </List>
      </div>
    </DetailSection>

    <Section isPaddingless>
      <SlidersPayklever />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

PaykleverCampaignManager.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/Payklever.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    videoImages: file(relativePath: { eq: "customers/payklever/cover-video.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;

export default PaykleverCampaignManager;
