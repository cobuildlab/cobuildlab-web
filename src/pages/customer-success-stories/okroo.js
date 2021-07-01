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
import { List, ListItem } from '../../components/Typography/List';
import { StaticImage } from 'gatsby-plugin-image';

const Okroo = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="Okroo"
      description="Mobile app that would let you know the best promotions of the restaurants and bars closest to you"
      image={data.seoImages.childImageSharp.gatsbyImageData}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Okroo</DetailTitle>
            <div>
              <List>
                <ListItem>
                  <TextOrange>Location:</TextOrange> Miami, US
                </ListItem>
                <ListItem>
                  <TextOrange>Industry:</TextOrange> Retail
                </ListItem>
                <ListItem>
                  <TextOrange>Product:</TextOrange> Mobile App
                </ListItem>
              </List>
            </div>
            <DetailParagraph>
              Some of Miami&apos;s most interesting dishes are found in the heart of Downtown, and
              its restaurants are a reflection of its melting pot quality. Whether you work Downtown
              and have to buy lunch daily, or you are meeting with friends for some after-office
              drinks, it would be really useful to know which places near you have promotions and
              thus save time and money.
            </DetailParagraph>
            <DetailParagraph>
              That&apos;s when <TextLink to="https://okroo.com/">Okroo</TextLink> came to life, a
              mobile app that would let you know the best promotions of the restaurants and bars
              closest to you. According to the{' '}
              <TextLink to="https://indicators.kauffman.org/">Kauffman Index</TextLink>, Miami is
              the second most entrepreneurial city in the U.S., and that&apos;s exactly what
              inspired Craig Miller and{' '}
              <TextLink to="https://bisprofiles.com/search/fl?query=Brenton%20Kossally">
                Brenton Kosally
              </TextLink>{' '}
              to shake up the culinary route Downtown with a marvelous app.
            </DetailParagraph>
            <DetailParagraph>
              They got in touch with{' '}
              <TextLink to="https://www.linkedin.com/in/alacret/">Angel Lacret</TextLink>, Chief of
              Product Development and Cobuild Lab’s CTO to build a{' '}
              <TextLink to="https://cobuildlab.com/blog/software-development-for-new-products/">
                software product
              </TextLink>{' '}
              that would solve two problems: first, the app would allow users to look for food or
              drink promotions near them and secondly, it would also bring some traffic to those
              places opening an opportunity for restaurant & bar owners who could become commercial
              allies by promoting with Okroo.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage src={'./../../assets/images/customers/okroo/logo.jpg'} alt="" />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/okroo/1.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange>Challenges</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The main problem that most businesses are facing is to get traffic to their stores and to be
        able to communicate their promotions, so most of them go to social media, influencers, or
        invest in a community event or sponsor a charity. The{' '}
        <TextLink to="https://pos.toasttab.com/resources/restaurant-success-industry-report">
          2019 Restaurant Success Report
        </TextLink>{' '}
        showed that 67% of restaurants paid for social media ads; Okroo&apos;s value proposition is
        to enable users to discover promotions, increasing traffic, and their likelihood to spend.
        Therefore, there were some objectives we needed to meet when building this{' '}
        <TextLink to="https://cobuildlab.com/blog/improve-your-business-with-a-software-solution/">
          software solution
        </TextLink>
        :
      </DetailParagraph>
      <List>
        <ListItem>
          <TextLink to="https://www.restaurant.org/downloads/pdfs/research/soi/restaurant_industry_fact_sheet_2019.pdf">
            According to the 2019 Restaurant Industry Factbook
          </TextLink>
          , 56% of Consumers say the ability to walk there from their home would make them choose
          one restaurant over another. So we needed to build an app that could easily search for
          places near the user.
        </ListItem>
        <ListItem>
          The app not only had to be able to record the user&apos;s location in real-time but also
          to locate the business partners -bars & restaurants- with promotions closest to the user.
        </ListItem>
        <ListItem>
          As a mobile application, it had to be easy to use, attractive to the eye, facilitate
          purchasing processes as well as allow for a lot of interaction between the app and the
          user.
        </ListItem>
        <ListItem>
          Users had to be able to view all available promotions without taking up all the space on
          the screen. It was also required that users could buy as many items as were available.
        </ListItem>
      </List>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/okroo/2.png'} alt="" />}
      left>
      <DetailSubTitle>
        The <TextOrange>Solution</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        Our{' '}
        <TextLink to="https://cobuildlab.com/blog/cobuild-process-part-1/">
          Cobuild Process
        </TextLink>{' '}
        consists of two stages:{' '}
        <TextLink to="https://cobuildlab.com/blog/validating-your-idea-the-first-step-to-create-your-startup/">
          validate
        </TextLink>{' '}
        and cobuild. When{' '}
        <TextLink to="https://cobuildlab.com/blog/planning-a-software-project/">
          planning the software project
        </TextLink>{' '}
        for Okroo we held about five meetings where we used a{' '}
        <TextLink to="https://www.upstrategylab.com/blog/create-strong-value-proposition-b2b#:~:text=The%20value%20proposition%20canvas%20consist,customer%20profile%20and%20your%20offering.&text=Your%20offering%20displays%20the%20products,have%20a%20product%2Dmarket%20fit.">
          Value Proposition Canvas
        </TextLink>{' '}
        and other entrepreneurial tools to determine the viability of the product. Then we started
        the cobuild process, where we planned the development stages, and we put together a managed
        team of our best Mobile Developers, a QA Analyst and a Product Manager to transform this
        idea into a Software Product.
      </DetailParagraph>
      <List>
        <ListItem>
          For the app to be able to show the user the developments near him, we added a geolocation
          function, which uses the GPS of the user&apos;s mobile device to record his current
          location and also locate the closest developments.
        </ListItem>
        <ListItem>
          This is a completely visual app, so it was imperative to have a clean design with solid
          colors to make the promotions stand out.
        </ListItem>
        <ListItem>
          We incorporated a newsfeed to the app, making it easier for the users to scroll through
          the promotions shown on screen.
        </ListItem>
        <ListItem>
          To speed up the selection process we put up a “add to the cart” option to the main screen,
          making it possible to pick more than one item of each product.
        </ListItem>
        <ListItem>
          The cart is configured to show the user a list of the promotions or coupons they are
          buying and allows them to add or reduce the number of items they want or to remove a
          purchase.
        </ListItem>
        <ListItem>
          We made the purchasing process very quick and simple by linking Okroo’s mobile app to the
          Google Pay platform.
        </ListItem>
      </List>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/okroo/3.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange>Results</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The result was a software product that serves as a newsfeed or social network to connect
        customers with businesses. Okroo is a{' '}
        <TextLink to="https://cobuildlab.com/blog/mobile-apps-web-apps-or-cross-platform-what%E2%80%99s-the-best-for-my-small-business/amp/">
          mobile app
        </TextLink>{' '}
        that allows you to discover surrounding promotions for meals and drinks closest to you and
        at the same time driving traffic to establishments promoting the app.
      </DetailParagraph>
      <DetailParagraph>
        When open, the app geolocates the users and the spots closest to their location. It then
        filters the places that are commercial allies and are promoting with Okroo, showing them to
        the users on their feed so they can make a choice.
      </DetailParagraph>
      <DetailParagraph>
        We built a user-friendly interface with a very intuitive process where you just sign up, log
        in with your email, or log in with your Facebook account. All promotions are shown to you
        and once you select those you like the most you make your purchase. What’s interesting here
        is that the app is saving your preferences so next time you use it, it will show the
        promotions from your most visited restaurant first. The redemption process can be easily
        done from the app at the place you’re visiting.
      </DetailParagraph>
      <DetailParagraph>
        A{' '}
        <TextLink to="https://www.juniperresearch.com/press/press-releases/digital-coupon-redemptions-to-surpass-$90-billion">
          Juniper Research{' '}
        </TextLink>
        showed that digital coupon redemption is projected to rise by 94% by 2022, so things are
        looking good for Okroo which is already in Beta available for{' '}
        <TextLink to="https://play.google.com/store/apps/details?id=com.okrooapp&hl=en">
          Android
        </TextLink>
      </DetailParagraph>
    </DetailSection>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Okroo.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/okroo/logo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;

export default Okroo;
