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
import SlidersMama from '../../components/customer-success-stories/new/sliders/mama/Sliders';

const Mama = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="mama"
      description="The Match-Making app MAMA is a fun and easy-to-use connectivity tool that makes
              lightning-fast introductions. In a time where we are often left to our own devices,
              people can feel isolated and still struggle to make rewarding connections. MAMA is
              here to solve that problem!."
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Mama</DetailTitle>
            <DetailParagraph>
              The Match-Making app MAMA is a fun and easy-to-use connectivity tool that makes
              lightning-fast introductions. In a time where we are often left to our own devices,
              people can feel isolated and still struggle to make rewarding connections. MAMA is
              here to solve that problem!
              <br />
            </DetailParagraph>
            <DetailParagraph>
              Its founders{' '}
              <TextLink to="https://www.linkedin.com/in/anna-keeler-971599156/">
                Ana Keeler
              </TextLink>{' '}
              and <TextLink to="https://www.linkedin.com/in/s2a/">Derek Stout</TextLink> wanted to
              connect people to expose endless opportunities for friendship, love, and professional
              connections. They teamed up with
              <TextLink to="https://cobuildlab.com/">Cobuild Lab</TextLink> a couple of months ago
              to start developing a new{' '}
              <TextLink to="https://cobuildlab.com/blog/mobile-apps-web-apps-or-cross-platform-what%E2%80%99s-the-best-for-my-small-business/amp/">
                mobile app
              </TextLink>{' '}
              that will allow you to make professional recommendations, introductions between
              friends, meet interesting people, and expand your network.
            </DetailParagraph>
            <br />
            <DetailSubTitle>
              The <TextOrange> Challenge </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              When someone we know recommends us a professional, we are more likely to hire that
              person based on that recommendation. So Ana and Derek visualized a social platform to
              connect people through introductions from individuals we know, like, and trust; an
              acquaintance that acts as a “matchmaker”. It is not a social network, but a platform
              for networking.
              <List>
                <ListItem>
                  It was necessary for the platform to be able to contain a large database of all
                  the users.
                </ListItem>
                <ListItem>
                  The design and user experience were something extremely important to take into
                  account during the development of this product, since we wanted to maintain clean
                  lines, with lots of white space to make it visually very pleasant and easy to use
                  as well.
                </ListItem>
                <ListItem>
                  The real challenge was to define the most optimal process to make the match
                  happen. How user C could connect users A and B in the most efficient and simple
                  way possible.{' '}
                </ListItem>
                <ListItem>
                  Other issues on the whiteboard were the functions that would allow user A and user
                  B not only to connect but to have and maintain a conversation.{' '}
                </ListItem>
              </List>
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent color={'#ebebeb'}>
              <StaticImage src={'./../../assets/images/customers/mama/mama-logo.jpg'} alt="" />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>
    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/mama/mama-2.jpg'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph></DetailParagraph>
      <br />
      <DetailParagraph>
        We started{' '}
        <TextLink to={'https://cobuildlab.com/blog/planning-a-software-project/'}>
          planning the software project
        </TextLink>{' '}
        by holding previous meetings with Ana and Derek to{' '}
        <TextLink to={'https://cobuildlab.com/blog/cobuild-process-part-1/'}>
          validate the idea
        </TextLink>
        , and then we planned the development process, where we divided the project into three
        stages:
        <List>
          <ListItem>
            In the first stage, we framed the app’s interface, creating a solid foundation for all
            of the functionalities that would be added later on.
          </ListItem>
          <ListItem>
            For the second stage, in order for people to connect and have a conversation, we added a
            variety of functions such as sending and receiving text messages, recording and playing
            voice notes or video messages in the app.
          </ListItem>
          <ListItem>
            In the third stage, we incorporated the introductions to the app through a chat. And
            added a very easy process to make the match: when you invite people you’d like to
            introduce they’ll receive an SMS with the invitation to meet someone through MAMA’s
            mobile app and to start the conversation they will have to download the app and connect
            through the platform.
          </ListItem>
        </List>
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/mama/mama-1.png'} alt="" />}
      left>
      <DetailSubTitle>
        The <TextOrange>Result</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        We always look for the best solution for our customers whether it is{' '}
        <TextLink to="https://cobuildlab.com/blog/mobile-apps-web-apps-or-cross-platform-what%E2%80%99s-the-best-for-my-small-business/amp/">
          Mobile Apps, Web Apps, or Cross-Platforms
        </TextLink>{' '}
        we assess our clients and we build what works best for their business. So It was pretty
        clear for the MAMA project to be successful we would have to build a mobile app.
      </DetailParagraph>

      <DetailParagraph>
        <List>
          <ListItem>
            The platform has a minimalist design, with simple lines and a set of neutral colors with
            the perfectly balanced touch of oranges so distinctive of the brand.
          </ListItem>
          <ListItem>
            The app allows you to introduce two people by typing in their email or phone number.
            Once contacted, these people download the app and are able to use a variety of features
            available to start a conversation; from chat to video call, MAMA gives its users the
            opportunity to create new business connections, friendships, romantic relationships, and
            grow your network. The possibilities are endless.
          </ListItem>
        </List>
      </DetailParagraph>

      <DetailParagraph>
        MAMA it{"'"}s meant to help people build powerful connections because when it comes to
        networking, quality trumps quantity. We are now launching its{' '}
        <TextLink to="https://cobuildlab.com/blog/minimum-viable-product/amp/">
          MVP (Minimum Viable Product)
        </TextLink>{' '}
        to start building a user base and it’s already available on the{' '}
        <TextLink to="https://apps.apple.com/us/app/id1516922160">Apple Store</TextLink> and{' '}
        <TextLink to="https://play.google.com/store/apps/details?id=com.cobuildlab.mama">
          Play Store
        </TextLink>{' '}
        as well. Try it out and feel free to let us know any suggestions in the comment section.
      </DetailParagraph>
      <div>
        <List>
          <ListItem>
            <TextOrange>Location:</TextOrange> Miami, Florida.
          </ListItem>
          <ListItem>
            <TextOrange>Industry:</TextOrange> Internet
          </ListItem>
          <ListItem>
            <TextOrange>Product:</TextOrange> Mobile App
          </ListItem>
        </List>
      </div>
    </DetailSection>
    <Section isPaddingless>
      <SlidersMama />
    </Section>
    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Mama.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/mama.png" }) {
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

export default Mama;
