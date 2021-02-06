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
import { StaticImage } from 'gatsby-plugin-image';
import SlidersMyVoice from '../../components/customer-success-stories/new/sliders/my-voyce/Sliders';

const MyVoice = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="My Voice"
      description="Cobuild Lab partnered up with Kadem Education to raise teacher’s voices by building a software solution."
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>My Voice</DetailTitle>
            <DetailParagraph>
              Cobuild Lab partnered up with Kadem Education to raise teacher’s voices by building a
              software solution.
            </DetailParagraph>
            <DetailParagraph>
              Kadem Education was focused on putting a stop to the unfortunate and growing trend of
              teachers leaving their schools. Their idea was to find a solution to help the teachers
              grow within the school system.
            </DetailParagraph>
            <DetailParagraph>
              It was imperative to continually capture the voice of all teachers in one place, where
              their opinions are valued and added up to become actions, not only to improve their
              school, but to optimize and transform the entire education system. They visualized a
              platform that allowed them to get closer to the teachers and take their input into
              areas of research that could drive a healthy school culture.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage
                src={'./../../assets/images/customers/my-voice/logo.png'}
                alt="My-Voice Logo"
              />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/my-voice/2.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange>Challenges</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The ultimate goal is to help the schools to develop school cultures that would support the
        teachers to grow, develop and remain in the classroom. Therefore it is important to point
        out what we wanted to accomplish with development of the platform My Voice:
      </DetailParagraph>
      <List>
        <ListItem>
          <TextOrange>
            Help teachers and leaders to understand and improve their school culture by using
            real-time formative data that is continually collected, shared, and analyzed through the
            MyVoice app.
          </TextOrange>
        </ListItem>
        <ListItem>
          <TextOrange>
            Support schools in facilitating teachers` continuous voice and feedback using the
            MyVoice digital platform, in which teachers provide shared input using School Culture
            Indicators ratings to monitor the progress of individual school culture drivers.
          </TextOrange>
        </ListItem>
        <ListItem>
          <TextOrange>
            Improve teachers` and leaders` work and in order to accomplish that it was necessary to
            have real-time information to understand and improve the school culture
          </TextOrange>
        </ListItem>
        <ListItem>
          <TextOrange>
            Help leaders and teachers to use their professional experience in their schools to
            improve and develop capability.
          </TextOrange>
        </ListItem>
      </List>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/my-voice/1.png'} alt="" />}
      left>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The platform had to be designed to facilitate specific and constructive conversations about
        improvement in each school, which would result in solutions built from the inside. So we put
        together a managed team of our best Web Developers, QA Analysts, and Product Managers to
        transform this idea into a Software Product that had to:
      </DetailParagraph>
      <List>
        <ListItem>
          <TextOrange>Be able to collect, share and analyze data in real-time.</TextOrange>
        </ListItem>
        <ListItem>
          <TextOrange>
            Have School Culture Indicators to be used for research and teacher input.
          </TextOrange>
        </ListItem>
        <ListItem>
          <TextOrange>
            Have an extensive database to support the surcharges that may occur due to its continued
            use.
          </TextOrange>
        </ListItem>
      </List>

      <DetailSubTitle>
        The <TextOrange>Results</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        We present MyVoice™, the first digital platform of its kind designed to provide specific and
        constructive conversations, and supporting teachers for the improvement in each school,
        resulting in solutions developed from the inside.
        <br />
        The platform will be included in a new initiative by Cognia™ the leader in accreditation,
        assessment, and continuous improvement. The Trusted Partner Program aims to empower
        institutions and educators with resources to bring sustainable professional development for
        remote learning.
      </DetailParagraph>
      <List>
        <ListItem>
          <TextOrange>Location: Royersford, Pennsylvania</TextOrange>
        </ListItem>
        <ListItem>
          <TextOrange>Industry: education, e-learning</TextOrange>
        </ListItem>
        <ListItem href="https://myvoice-edu.com/">
          <TextOrange>Website</TextOrange>
        </ListItem>
      </List>
    </DetailSection>

    <Section isPaddingless>
      <SlidersMyVoice />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

MyVoice.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/my-voice/logo.png" }) {
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

export default MyVoice;
