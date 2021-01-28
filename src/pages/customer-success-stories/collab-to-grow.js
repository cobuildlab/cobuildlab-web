import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import SeoMetaTags from '../../components/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';

import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import DetailSection from '../../components/customer-success-stories/new/DetailSection';
import DetailHeroImagesContent from '../../components/customer-success-stories/DetailHeroImagesContent';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/Typography/TextHelpers';
import TextLink from '../../components/Typography/TextLink';
import { StaticImage } from 'gatsby-plugin-image';
import SlidersCollabToGrow from '../../components/customer-success-stories/new/sliders/collabToGrow/Sliders';

const CollabToGrow = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Collab to Grow"
      description="Is a technology-enabled managed services and advisory firm that specializes in improving the performance of strategic alliances."
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Collab To Grow</DetailTitle>
            <DetailParagraph>
              <TextLink to="https://collabtogrow.com/">Collabtogrow™</TextLink> Inc. is a
              technology-enabled managed services and advisory firm that specializes in improving
              the performance of strategic alliances.
            </DetailParagraph>
            <br />
            <DetailParagraph>
              <TextLink to="https://www.linkedin.com/in/ken-coppins-432b70183">
                Ken Coppins
              </TextLink>{' '}
              and <TextLink to="https://www.linkedin.com/in/bob-jones-1147834/">Bob Jones</TextLink>{' '}
              , both highly experienced corporate executives, management consultants, and
              co-founders of <TextLink to="https://collabtogrow.com/">Collabtogrow™</TextLink>,
              believe that repeatable frameworks, workflows, and tools are fundamental for growing
              potential collaborative relationships. In Collabtogrow™ they leverage their proven
              framework of industry-leading practices, standards, and tools to help their clients
              greatly increase their chances of their alliances being successful.
            </DetailParagraph>
            <DetailSubTitle>
              The <TextOrange> Problem </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              Already investing a significant amount of time dedicated to structure and organizing
              corporate strategic alliances, they needed a solution that would not only give them
              more insight but give them back their time.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage
                src={'./../../assets/images/customers/collabtogrow/collab-logo.jpg'}
                alt=""
              />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={
        <StaticImage src={'./../../assets/images/customers/collabtogrow/collab-1.jpg'} alt="" />
      }
      left>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The next logical step was the development of an application that could help Collabtogrow™
        accelerate the process in which, through their framework and workflows, increase the
        collaborative relationship potential of their clients. They needed a new system that would
        be cost-effective and improve the performance of the strategic alliance.
      </DetailParagraph>
      <br />
      <DetailParagraph>
        After researching different development alternatives, including existing “no-code” vendors,
        they concluded that <TextLink to="https://www.8base.com/">8base</TextLink> was the only
        company whose platform provided the tools needed to build the application, such as:
        <List>
          <ListItem>On-site technical services.</ListItem>
          <ListItem>Capabilities to develop, host, and maintain the application.</ListItem>
          <ListItem>Power to bring the SaaS platform to life in a fast, scalable way.</ListItem>
          <ListItem>A robust platform. </ListItem>
          <ListItem>
            Security and scalability integrated with a world-class cloud provider .{' '}
          </ListItem>
          <ListItem>Reasonable costs. </ListItem>
        </List>
      </DetailParagraph>
      <DetailParagraph>
        <TextLink to="https://cobuildlab.com/">Cobuild Lab</TextLink> brought to the team extensive
        experience building web applications, especially with the ReactJS framework, which is a core
        element in the 8base stack. Our developers are battle-tested React frontend experts with
        great skills in coding HTML, CSS, and Javascript. They set out to create a{' '}
        <TextLink to="https://cobuildlab.com/blog/4-readons-why-your-company-needs-a-custom-software/amp/">
          Custom Software Solution
        </TextLink>{' '}
        , a process in which we design and build a software solution for a specific client within a
        well-defined set of requirements.
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={
        <StaticImage src={'./../../assets/images/customers/collabtogrow/collab-1.jpg'} alt="" />
      }
      right>
      <DetailSubTitle>
        The <TextOrange>Result</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        <TextLink to="https://collabtogrow.com/succeed">The Collabtogrow™ Succeed</TextLink>{' '}
        platform: a one-of-a-kind SaaS project management platform incorporating industry-leading
        practices, workflows, and tools to help executives unlock the growth potential of their
        strategic alliances.
        <br />
        The Collabtogrow™ Succeed solution will automate the governance elements of an alliance,
        enable management of the alliance through KPIs and Balanced Scorecard and facilitate the
        partners’ ability to collaborate and innovate, by doing so:
      </DetailParagraph>

      <DetailParagraph>
        <List>
          <ListItem>Maximizes the value of strategic alliances.</ListItem>
          <ListItem>Allows collaborating in real-time.</ListItem>
          <ListItem>Tracks key metrics that power strategic decisions. </ListItem>
        </List>
      </DetailParagraph>

      <DetailParagraph>
        This would have been impossible to achieve with an off-the-shelf software given the unique
        demands of the customer. This is one of the reasons that makes Custom Software solutions so
        valuable.
      </DetailParagraph>
    </DetailSection>
    <Section isPaddingless>
      <SlidersCollabToGrow />
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
    seoImages: file(relativePath: { eq: "customers/collab-logo.jpg" }) {
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
