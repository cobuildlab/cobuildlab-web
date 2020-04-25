import React from 'react';
import { Section, Container, Columns, Column } from 'bloomer';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailSectionImageLeft from '../../components/customer-success-stories/DetailSectionImageLeft';
import DetailSectionImageRight from '../../components/customer-success-stories/DetailSectionImageRight';
// import DetailTeam from '../../components/customer-success-stories/DetailTeam';
import DetailCarousel from '../../components/customer-success-stories/DetailCarousel';
import DetailVideo from '../../components/customer-success-stories/DetailVideo';
import DetailImageLogo from '../../components/customer-success-stories/DetailImageLogo';
import DetailHeroRightContainer from '../../components/customer-success-stories/DetailHeroRightContainer';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/Typography/TextHelpers';

import logo from '../../assets/images/customers/4geek/logo.png';

import textImg1 from '../../assets/images/customers/4geek/text-img-1.png';
//slider images
import slider1 from '../../assets/images/customers/4geek/slider/1.png';
import slider2 from '../../assets/images/customers/4geek/slider/2.png';
import slider3 from '../../assets/images/customers/4geek/slider/3.png';
import slider4 from '../../assets/images/customers/4geek/slider/4.png';
import slider5 from '../../assets/images/customers/4geek/slider/5.png';
import slider6 from '../../assets/images/customers/4geek/slider/6.png';
import slider7 from '../../assets/images/customers/4geek/slider/7.png';

const GeeksAcademy = () => (
  <DetailLayout>
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>4Geeks Academy</DetailTitle>
            <DetailSubTitle>
              <TextOrange> Beginning </TextOrange> of 4GeeksSucceed Platform?
            </DetailSubTitle>
            <DetailParagraph>
              The idea of an academy of programmers was an idea in Alejandro Sanchez mind since
              2009. By then, the Co-Founder and former CEO of some of the most important
              Accelerators in Venezuela had already met with all the challenges that the application
              development market when trying to find the best talent This company, already
              positioned at the forefront of software development, was constantly in the situation
              of finding new members for its projects, which by 2009 had been complicated by the
              shortage of trained personnel in the software developer market. Given this situation,
              a series of initiatives around the company’s activities are beginning to be developed
              to begin to recognize and attract the surrounding talent in the software world:
            </DetailParagraph>
            <List>
              <ListItem>
                <TextOrange>
                  The Tech Meetup: Event to gather entrepreneurs and developers
                </TextOrange>
              </ListItem>
              <ListItem>
                <TextOrange>
                  Workshops: Workshops in the company offices to train developers
                </TextOrange>
              </ListItem>
              <ListItem>
                <TextOrange>La Carta: The community newsletter</TextOrange>
              </ListItem>
              <ListItem>
                <TextOrange>
                  All these initiatives product of the experience of the company, but especially the
                  tastes and needs of its members will constitute 4Geeks Developers Community.
                </TextOrange>
              </ListItem>
            </List>
            <DetailParagraph>
              All these initiatives product of the experience of the company, but especially the
              tastes and needs of its members will constitute 4Geeks Developers Community.
            </DetailParagraph>
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

    <DetailSectionImageLeft src={textImg1} alt="What is the Succeed Platform?">
      <DetailSubTitle>
        The Academy in <TextOrange>Venezuela</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        After many years of initiatives in 2014, it emerged in Venezuela: Academia Hack, an
        initiative of 4Geeks to solve a need that continued to grow very rapidly worldwide. The
        result was amazing, in October of 2014 Hack opens with an incredible demand, being the first
        success of the dream of having an academy for developers.
      </DetailParagraph>
    </DetailSectionImageLeft>

    <DetailSectionImageRight src={textImg1} alt="What is the Succeed Platform?">
      <DetailSubTitle>
        4Geeks Academy: <TextOrange> Maturity and experience</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        After a year of emotions and successes, Alejandro decided to take a much more ambitious step
        and set himself the task of launching this project in the city of Miami. With the experience
        gathered for more than 8 years promoting projects, the support of the 4Geeks community and
        the perfect sidekick (Marcelo Ricigliano, Vice President of 4Geeks Academy), the idea of
        4Geeks Academy, a part-time developer academy with a innovative study program for the city
        of Miami. Having almost 2 years of success and more than 250 stories in its participants the
        idea of 4Geeks Academy suffered the fate of all the projects carried out with experience,
        intelligence, passion and perseverance, demonstrating that in 4Geeks we can build
        sustainable businesses. Today, Alejandro works full time as {'  '}
        <TextOrange>CEO of 4Geeks Academy</TextOrange> and President of
        <TextOrange>{'  '}4Geeks Developers </TextOrange>
      </DetailParagraph>
      <List>
        <ListItem href="https://www.linkedin.com/in/alesanchezr/">
          <TextOrange>Alejandro Sanchez LinkedIn Bio</TextOrange>
        </ListItem>
        <ListItem href="https://www.linkedin.com/in/marcelo-ricigliano-32440379/">
          <TextOrange>Marcelo Ricigliano Linkedin Bio</TextOrange>
        </ListItem>
        <ListItem href="http://www.newsweek.com/insights/coding-career-and-you-top-coding-schools-2017/4geeks-academy">
          <TextOrange>A CODING CAREER AND YOU – TOP CODING SCHOOLS 2017</TextOrange>
        </ListItem>
      </List>
    </DetailSectionImageRight>

    {/* <Section>
      <Container>
      <DetailTeam />
      </Container>
     </Section> */}

    <Section isPaddingless>
      <DetailCarousel>
        <div>
          <img src={slider1} alt="jobcore app" />
        </div>
        <div>
          <img src={slider2} alt="jobcore app" />
        </div>
        <div>
          <img src={slider3} alt="jobcore app" />
        </div>
        <div>
          <img src={slider4} alt="jobcore app" />
        </div>
        <div>
          <img src={slider5} alt="jobcore app" />
        </div>
        <div>
          <img src={slider6} alt="jobcore app" />
        </div>
        <div>
          <img src={slider7} alt="jobcore app" />
        </div>
      </DetailCarousel>
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

export default GeeksAcademy;
