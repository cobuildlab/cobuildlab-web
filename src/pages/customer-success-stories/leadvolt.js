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
import TextLink from '../../components/Typography/TextLink';
import { StaticImage } from 'gatsby-plugin-image';
import SlidersLeadVolt from '../../components/customer-success-stories/new/sliders/leadvolt/Sliders';

const LeadVolt = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="LeadVolt"
      description="Leadvolt is a high touch lead management system that closes leads faster, provides full transparency, and empowers your agency to focus on the customer."
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Leadvolt</DetailTitle>
            <DetailParagraph>
              <TextLink to="https://www.leadvolt.com/">Leadvolt</TextLink> is a high touch lead
              management system that closes leads faster, provides full transparency, and empowers
              your agency to focus on the customer. It was founded by
              <TextLink to="https://github.com/cobuildlab/cobuildlab-web/issues/581">
                Jason Killings and Ignacio Borbolla
              </TextLink>
              , and their goal was to modernize the insurance sales business structure and the way
              it related to their customers.
              <br />
            </DetailParagraph>
            <DetailSubTitle>
              The <TextOrange> Problem </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              The company wasn’t satisfied with any of the{' '}
              <TextLink to="https://cobuildlab.com/blog/4-readons-why-your-company-needs-a-custom-software/">
                off-the-shelf software solutions
              </TextLink>{' '}
              available in the market to deal with its inside issues like the complex connection
              with mail suppliers, an obsolete interface, a very complicated process to send and
              receive calls, and also the lack of an easy way to build marketing campaigns via email
              or SMS.
            </DetailParagraph>
            <br />
            <DetailParagraph>
              You have to consider that the insurance industry, which once relied on conversations
              and personal relationships, was dramatically disrupted by today’s digital revolution.
              So, this decrease in person-to-person sales led agencies to purchase lists of leads
              for agents to call, but in turn, this led to certain problems like outdated workflows
              for customer interaction, a total lack of insight into the list’s quality and not
              being able to tell how good or bad was the performance of the insurance agents.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent color="#364958">
              <StaticImage
                src={'./../../assets/images/customers/leadvolt/leadvolt-logo.jpg'}
                alt=""
              />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={
        <StaticImage src={'./../../assets/images/customers/leadvolt/leadvolt-laptop.png'} alt="" />
      }
      right>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        When learning about <TextLink to="https://www.8base.com/">8base</TextLink> , Jason Killings
        finally saw the solution to his problems. The idea for LeadVolt was born, and he believed
        that the 8base team could bring it to life. Later, a Cobuild Lab and 8base (a sponsor of our{' '}
        <TextLink to="https://www.meetup.com/es-ES/Miami-Software-Developers/?chapter_analytics_code=UA-105326682-2">
          Miami Software Developers
        </TextLink>{' '}
        group){' '}
        <TextLink to="https://cobuildlab.com/blog/cobuild-lab-and-8base-new-crm-platform-its-almost-finished/">
          partnership to develop this platform was announced
        </TextLink>
        .
      </DetailParagraph>
      <br />
      <DetailParagraph>
        The new platform named Lead Volt is a very specific CRM for the insurance industry.{' '}
        <TextLink to="https://cobuildlab.com/blog/what-is-crm-software/">
          CRM or Customer Relationship Management
        </TextLink>{' '}
        is an application that allows centralizing in a single database all the interactions between
        a company and its customers.
      </DetailParagraph>
      <br />
      <DetailParagraph>
        A CRM is a program or application in which all the conversations that anyone in a company
        has with a client, whether they are emails, calls, or meetings, are automatically saved in
        the file of that specific client. This file is accessible to everyone in the company;
        internal notes and/or activities with a date to be done can be placed on these
        conversations, assigned to a team member, thus improving the overall productivity.
      </DetailParagraph>
      <br />
      <DetailParagraph>Companies that implement CRM solutions can:</DetailParagraph>
      <List>
        <ListItem>
          Increase productivity: gathers all processes and business information in one place
          available to everyone in the company.
        </ListItem>
        <ListItem>
          Makes it easier to manage each sales process and emerging opportunities.
        </ListItem>
        <ListItem>Create new sales opportunities.</ListItem>
        <ListItem>Collect information for Sales Managers and Sales Executives.</ListItem>
        <ListItem>Update budgets in real-time optimizing sales processes.</ListItem>
      </List>
    </DetailSection>

    <DetailSection
      image={
        <StaticImage src={'./../../assets/images/customers/leadvolt/leadvolt-laptop.png'} alt="" />
      }
      left>
      <DetailSubTitle>
        The <TextOrange>Result</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The platform allows Lead Volt to share and maximize the knowledge of a given customer and
        thus understand their needs and anticipate them. It takes in all the data that insurance
        agents purchase, it handles all the agent’s workflow including generic email drip campaigns,
        personal email interactions, phone calls, call transcriptions, and text messages and it
        offers an intuitive and elegant user experience.
      </DetailParagraph>
      <br />
      <DetailParagraph>
        “Of course, we are using the Backend-as-a-Service offered by 8base since it allowed us to
        develop a solution to manage three basic areas on the Lead Volt platform: sales management,
        marketing, and after-sales or customer service” Angel Lacret, CEO of Cobuild Lab.
      </DetailParagraph>
    </DetailSection>
    <Section isPaddingless>
      <SlidersLeadVolt />
    </Section>
    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

LeadVolt.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/leadvolt-logo.jpg" }) {
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

export default LeadVolt;
