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
import { StaticImage } from 'gatsby-plugin-image';
import SlidersNavigate from '../../components/customer-success-stories/new/sliders/navigate/Sliders';
import { List, ListItem } from '../../components/Typography/List';

const Navigate = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Navigate"
      description="Founded by Pedro Sostre, a consultant and author with 20 years of experience in building companies, Navigate helps innovative Startup founders navigate the business world and get their start-up companies launched"
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Navigate</DetailTitle>
            <DetailParagraph>
              Founded by Pedro Sostre, a consultant and author with 20 years of experience in
              building companies, Navigate helps innovative Startup founders navigate the business
              world and get their start-up companies launched, growing, or prepared for financing
              through practical business advice. Navigate aims to support the rise of new
              businesses, collaborating in every step of their growth by minimizing the risk of
              failure and thus ensuring the success of innovative projects by providing all the
              tools and assistance to companies before they are launched into the market.
            </DetailParagraph>
            <DetailParagraph>
              Cobuild Lab and Navigate partnered up to provide the best services to scalable,
              early-stage companies to create customized growth action plans to help them get to the
              next level.
            </DetailParagraph>
            <DetailSubTitle>
              The <TextOrange> Problem </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              Navigate Capital needed to improve the experience of their advisory process since a
              large part of their program is based on establishing milestones and planning a
              financial roadmap to achieve goals of startup{"'"}s they are consulting.
            </DetailParagraph>
            <DetailParagraph>
              They needed a platform that would allow them to use their framework in an optimal way
              where they could provide knowledge, experience, and guidance for Startup founders.
            </DetailParagraph>
            <DetailParagraph>
              Just as every Startup{"'"}s goals are unique, with specific needs, so must be the
              guidance provided. Therefore, the cornerstone of the entire project would be based on
              building a platform whose tools would allow the Navigate team to customize 100% of
              each Growth Action Plan to achieve short, medium, and long term goals for the Startup
              {"'"}s.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage
                src={'./../../assets/images/customers/navigate/navigate-logo.png'}
                alt="Navigate"
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
        As part of creating a tool to help their clients, Navigate partnered up with Cobuild Lab to
        build a great idea! From the very beginning, both teams were in perfect sync when
        visualizing the best solution: building a custom Learning Management System.
      </DetailParagraph>
      <DetailParagraph>
        An LMS (Learning Management System) platform is a support tool for the distance or
        semi-face-to-face teaching-learning process. It uses technology to reproduce all the
        resources and tools of a face-to-face class in the virtual environment. They are useful for
        both companies and educational institutions looking for an effective training method in
        which the physical presence of the participants is not necessary.
      </DetailParagraph>
      <DetailParagraph>
        “We defined it had to be functionally and flexible enough to adapt to any type of training
        or course and allow the users to find everything they need to carry out the required
        activities without difficulty. “ Alan Guevara The platform had to be integrated with other
        tools or applications, to provide more complete learning according to the specific needs of
        the training.
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/laptop-right.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange>Result</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The project was divided into three phases that we built according to the Navigate team{"'"}s
        needs. Along with each phase, we explored the opportunity of improving and optimizing
        specific aspects of the process and adding new features and tools. These were the results
        and most important features:
        <List>
          <ListItem>
            Onboarding: Each new user can register by creating an account, filling in their details,
            and verifying their email address.{' '}
          </ListItem>
          <ListItem>
            Goal setting: Once registered, the user answers a questionnaire about their project and
            what their goals are so that the Navigate team can offer personalized guidance focusing
            on their needs.
          </ListItem>
          <ListItem>
            Gamification: During the consulting program, the Navigate platform visually displays the
            progress of each user and how much is left to do. It{"'"}s a reward system so the users
            can see how far they have come.
          </ListItem>
          <ListItem>
            Learning System: Users will be able to access interactive video lessons as part of their
            growth program.
          </ListItem>
          <ListItem>
            Guidance and mentor comments: Throughout the course, mentors will be able to closely
            monitor user{"'"}s progress, as well as leave comments on the text input that a user has
            filled in. Users will also be able to see their mentor{"'"}s most recent comments on the
            home screen, mark them as read, and hide them. This represents constant feedback between
            the Startup founders and their mentors.
          </ListItem>
          <ListItem>
            Subscribe & Billing: Now users are able to subscribe to Navigate, choose a plan for
            them, and pay for it directly through the platform. The user can update payment details,
            download invoices, and more. If any user cancels their subscription they have the option
            to re-subscribe again whenever suits them best.
          </ListItem>
        </List>
      </DetailParagraph>
    </DetailSection>
    <Section isPaddingless>
      <SlidersNavigate />
    </Section>
    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Navigate.propTypes = {
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

export default Navigate;
