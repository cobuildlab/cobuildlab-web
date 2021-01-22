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
import SlidersPitazo from '../../components/customer-success-stories/new/sliders/el-pitazo/Sliders';

const ElPitazo = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="El Pitazo"
      description="El Pitazo is Venezuela's main independent news website."
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>El Pitazo</DetailTitle>
            <DetailParagraph>
              <TextLink to="https://elpitazo.net/">El Pitazo</TextLink> is Venezuela{"'"}s main
              independent news website. The name {'"'}pitazo{'"'} refers to the colloquial notion of
              reporting irregularities, therefore the news agency intends to be an informative
              platform where irregularities aren{"'"}t swept under the rug. They contacted{' '}
              <TextLink to="https://www.linkedin.com/in/alacret/">Angel Lacret</TextLink>, Chief of
              Product Development of Cobuild Lab to transform this idea into a{' '}
              <TextLink to="https://cobuildlab.com/blog/software-development-for-new-products/">
                software product.
              </TextLink>
            </DetailParagraph>
            <br />
            <DetailParagraph>
              We started the{' '}
              <TextLink to="https://cobuildlab.com/blog/cobuild-process-part-1/">
                Cobuild Process
              </TextLink>{' '}
              during the initial meetings for its first stage:
              <TextLink to="https://cobuildlab.com/blog/validating-your-idea-the-first-step-to-create-your-startup/amp/">
                validating the idea
              </TextLink>
              , in other words, making sure the project is viable and continuing with the Cobuild
              stage in which we would be developing its{' '}
              <TextLink to="https://cobuildlab.com/blog/minimum-viable-product/amp/">
                MVP (Minimum Viable Product)
              </TextLink>
              . The main goal of the project consisted of creating a software solution that would
              give users the possibility of having up-to-date news available in the palm of their
              hands with no restrictions.
            </DetailParagraph>
            <DetailSubTitle>
              The <TextOrange> Challenge </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              The real challenge lies in the restrictions arbitrarily imposed by the Venezuelan
              government on some print, audiovisual and digital media, including El Pitazo, which
              website is currently blocked throughout the national territory.
              <List>
                <ListItem>
                  We had to develop a software solution capable of overcoming all the restrictions
                  imposed in Venezuela and that would also have a user-friendly interface with an
                  eye-pleasing design and a very intuitive{' '}
                  <TextLink to="https://cobuildlab.com/blog/user-experience/amp/">
                    user experience
                  </TextLink>
                  .
                </ListItem>
                <ListItem>
                  Since El Pitazo is a digital news media, it was crucial that the product
                  simultaneously displayed the same information posted on the web platform.
                </ListItem>
                <ListItem>
                  Users had to be able to download and view content offline and share it through
                  other channels or apps such as Whatsapp, Twitter, Facebook, etc.{' '}
                </ListItem>
                <ListItem>
                  We also had to build a system for the exclusive use of EL Pitazo{"'"}s technical
                  team, which would provide data on users{"'"} behavior and thus understand exactly
                  who is interested in their content.{' '}
                </ListItem>
              </List>
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage src={'./../../assets/images/customers/el-pitazo/pitazo-1.jpg'} alt="" />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>
    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/el-pitazo/pitazoo-6.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        Taking the above into consideration, we put together a team of the best developers, QA
        Analysts, and a Project Manager to create a roadmap to find the most suitable solution for
        the project. Due to restrictions in the country were carried through the domain as well as
        through the IP address, it was virtually impossible to implement a solution so people could
        have access to the platform with no problem.
      </DetailParagraph>
      <br />
      <DetailParagraph>
        El Pitazo’s audience is segmented into Venezuelans living in the country, Venezuelans living
        abroad, and foreigners interested in the news related to this country; which led us to find
        a proper solution for them. We then decided to build a{' '}
        <TextLink to="https://cobuildlab.com/blog/Mobile-Application-Development:-a-Starting-Guide-for-being-on-track-with-customers-demands-on-2020/amp/">
          Mobile App
        </TextLink>{' '}
        that would be compatible with both Android and iOS Operating Systems, since it was almost
        impossible for the Government to restrict an App, and this would allow users who live in the
        country to have full access to all the news by just downloading the App.
        <List>
          <ListItem>
            Since the web platform of El Pitazo was built using the{' '}
            <TextLink to="https://wordpress.org/">WordPress</TextLink> development tool, we were
            able to extract the information from the website and transfer it into the app using
            either of two methods:
          </ListItem>
          <ListItem>
            Making a scrapper of the website, which is a programming technique that allows us to
            extract information from any website.
          </ListItem>
          <ListItem>
            Obtaining the data from the portal through the{' '}
            <TextLink to="https://developer.wordpress.org/rest-api/">
              API (Application Programming Interface)
            </TextLink>
            offered by WordPress.{' '}
          </ListItem>
          <ListItem>
            After assessing both of these methods, our team chose to go with the second approach and
            to work with the{' '}
            <TextLink to="https://elpitazo.net/wp-json/wp/v2/posts">site{"'"}s API</TextLink>.{' '}
          </ListItem>
          <ListItem>
            The Project was developed with the JavaScript programming language, using the
            React-Native framework for the front-end development of the app, and for the back-end,
            we used the Node.js tool with the Express framework in the server part for the
            compilation and extraction of news from the API.{' '}
          </ListItem>
        </List>
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/el-pitazo/pitazo-2.png'} alt="" />}
      left>
      <DetailSubTitle>
        The <TextOrange>Result</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        After some weeks of teamwork, it was possible to build a Mobile app that is compatible with
        any device connected to the net, capable of bypassing every restriction imposed by the
        Venezuelan government, to provide a channel of information for all the users in and out of
        the country.
      </DetailParagraph>

      <DetailParagraph>
        <List>
          <ListItem>
            The app has a very intuitive interface that remains loyal to the{' '}
            <TextLink to="https://cobuildlab.com/blog/5-trends-in-web-design-2020-you-need-to-know/amp/">
              graphical line
            </TextLink>{' '}
            and brand personality of El Pitazo and can successfully extract all the information from
            the website to be simultaneously displayed in the app.
          </ListItem>
          <ListItem>
            The platform allows users to easily access the information, download it, share it, and
            visualize it later offline.
          </ListItem>
          <ListItem>
            We enable server administration which will be provided by our technical support
            department which will be responsible for keeping the application operating properly at
            all times, carrying out updates, and fixing any technical problems that may occur.{' '}
          </ListItem>
          <ListItem>
            We also include a series of features by using{' '}
            <TextLink to="https://firebase.google.com/">Firebase</TextLink> which allows El Pitazo
            {"'"}s technical team to track user traffic, click on advertising, and to measure user
            behavior and their content preferences.{' '}
          </ListItem>
        </List>
      </DetailParagraph>

      <DetailParagraph>
        In 2019 El Pitazo won the{' '}
        <TextLink to="https://en.wikipedia.org/wiki/Ortega_y_Gasset_Awards">
          Ortega y Gasset Award
        </TextLink>{' '}
        for best multimedia coverage, for a report on hungry children, {'"'}The Hunger Generation
        {'"'} and it is currently part of the Latin American media of the Rebel Alliance alongside
        other major digital media such as Tal Cual and Runrunes. The mobile app is now available for
        both Android and iOS and has +10k downloads in the Play Store with a rating of 4.3/5.
      </DetailParagraph>
      <div>
        <List>
          <ListItem>
            <TextOrange>Location:</TextOrange> Caracas, Venezuela
          </ListItem>
          <ListItem>
            <TextOrange>News, Digital Media</TextOrange>
          </ListItem>
          <ListItem>
            <TextOrange>Web Site:</TextOrange> https://elpitazo.net/
          </ListItem>
        </List>
      </div>
    </DetailSection>
    <Section isPaddingless>
      <SlidersPitazo />
    </Section>
    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

ElPitazo.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/pitazo.jpg" }) {
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

export default ElPitazo;
