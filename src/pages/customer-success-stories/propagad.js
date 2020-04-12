import React from 'react';
import { Section, Container, Columns, Column } from 'bloomer';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailTeam from '../../components/customer-success-stories/DetailTeam';
import DetailCarousel from '../../components/customer-success-stories/DetailCarousel';
import DetailVideo from '../../components/customer-success-stories/DetailVideo';
import DetailImageLogo from '../../components/customer-success-stories/DetailImageLogo';
import DetailHeroRightContainer from '../../components/customer-success-stories/DetailHeroRightContainer';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/Typography/TextHelpers';
import logo from '../../assets/images/customers/collabtogrow-logo.png';

const Propagad = () => (
  <DetailLayout>
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Propagad</DetailTitle>
            <DetailSubTitle>
              Introducing<TextOrange> Cesar Lang (Jr):</TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              Propagad founder Cesar Lang has a Bachelor and Masters in interior architecture and
              design. His 12+ years of experience working with small architectural, design,
              remodeling, and development companies has pushed him to find creatives solutions that
              were not only beautiful but marketable and business-oriented. Thanks to this
              experience, Cesar has built a unique professional profile with experience in
              integrated design and marketing solutions.
            </DetailParagraph>
            <DetailParagraph>
              In 2016, in mid-August, Cesar Lang Sr. contacted me, at that time Director of Sales of
              4Geeks, to begin work on a project that they had been formulating for a good time.
              This project was a platform to solve a very clear need for them in the advertising
              space markets empowering their owners to promote them and get in touch directly with
              their potential clients, and these in turn, also, be able to examine all the different
              existing offers to contract spaces for their establishments.
            </DetailParagraph>
            <DetailParagraph>
              This is how an idea developed by Cesar begins to enter a new stage, the construction
              of the platform begins in December 2016 with all the challenges that entails a venture
              of this scope.
            </DetailParagraph>
            <DetailParagraph>
              The platform consists of a website for registering its users with an interface
              carefully designed to work on any type of screen favoring the user experience.
            </DetailParagraph>
            <DetailParagraph>
              In addition to this, it has an administration panel to report everything that happened
              on the platform.
            </DetailParagraph>
            <div>
              <List>
                <ListItem href="https://www.linkedin.com/in/cesarlang/">
                  <TextOrange>Cesar Lang LinkedIn Bio</TextOrange>
                </ListItem>
                <ListItem href="https://www.crunchbase.com/person/cesar-lang#/entity">
                  <TextOrange>Cesar Lang CrunchBase Bio</TextOrange>
                </ListItem>
                <ListItem href="https://www.crunchbase.com/organization/propagad#/entity">
                  <TextOrange>Propagad Crunchbase BIO</TextOrange>
                </ListItem>
                <ListItem href="https://www.youtube.com/watch?v=uh78xpIeGzc">
                  <TextOrange>Propagad Pitch</TextOrange>
                </ListItem>
              </List>
            </div>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroRightContainer>
              <DetailImageLogo src={logo} />
              <DetailVideo />
            </DetailHeroRightContainer>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <DetailTeam />
      </Container>
    </Section>

    <Section isPaddingless>
      <DetailCarousel />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

export default Propagad;
