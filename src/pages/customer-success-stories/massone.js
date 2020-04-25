import React from 'react';
import { Section, Container, Columns, Column } from 'bloomer';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailSectionImageLeft from '../../components/customer-success-stories/DetailSectionImageLeft';
// import DetailTeam from '../../components/customer-success-stories/DetailTeam';
import DetailCarousel from '../../components/customer-success-stories/DetailCarousel';
import DetailImageLogo from '../../components/customer-success-stories/DetailImageLogo';
import DetailHeroRightContainer from '../../components/customer-success-stories/DetailHeroRightContainer';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';
import DetailImagesDescription from '../../components/customer-success-stories/DetailImagesDescription';
import { List, ListItem } from '../../components/Typography/List';

import { TextOrange } from '../../components/Typography/TextHelpers';

import logo from '../../assets/images/customers/massone/logo.jpg';
import text from '../../assets/images/customers/massone/text-corto.jpg';

import textImg1 from '../../assets/images/customers/massone/text-img-1.png';
//slider images
import slider1 from '../../assets/images/customers/massone/slider/ma-1.jpg';
import slider2 from '../../assets/images/customers/massone/slider/ma-2.jpg';
import slider3 from '../../assets/images/customers/massone/slider/ma-3.jpg';
import slider4 from '../../assets/images/customers/massone/slider/ma-4.jpg';
import slider5 from '../../assets/images/customers/massone/slider/ma-5.jpg';
import slider6 from '../../assets/images/customers/massone/slider/ma-6.jpg';
import slider7 from '../../assets/images/customers/massone/slider/ma-7.jpg';
import slider8 from '../../assets/images/customers/massone/slider/ma-8.jpg';
import slider9 from '../../assets/images/customers/massone/slider/ma-9.jpg';
import slider10 from '../../assets/images/customers/massone/slider/ma-10.jpg';

const Massone = () => (
  <DetailLayout>
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Massone Mechanical</DetailTitle>
            <DetailParagraph>
              Massone Mechanical offers maintenance and installation services to commercial
              refrigeration companies. Offering high quality products to meet the needs of its
              customers. The site has a pleasing design with multiple functions where you can
              contact the company, know the services they offer, the projects they are working on,
              as well as their customers and partners, achieving an integrative experience with
              customers.
            </DetailParagraph>
            <DetailParagraph>
              The Owner of Massone was born and raised in the East Bay and is an advocate of
              community-based partnerships
            </DetailParagraph>
            <DetailSubTitle>
              What is the Massone <TextOrange> platform? </TextOrange>
            </DetailSubTitle>
            <DetailParagraph>
              Massone Mechanical sought to improve its processes in terms of customer service
              delivery and information management, mainly needed to automate the recording of calls
              or service orders maintenance or installation of refrigeration equipment, improve
              communication of services and reception of them to field workers.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroRightContainer>
              <DetailImageLogo src={logo} />
              <DetailImagesDescription src={text} />
            </DetailHeroRightContainer>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSectionImageLeft src={textImg1} alt="What is the Succeed Platform?">
      <DetailSubTitle>
        How everything <TextOrange>started:</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        I met Robert Mitchell, Head of IT for Massone about 3 years ago, we started since then
        working on possible solutions to improve the workflow for the company, we try different
        version of ERP applications and Third Party solutions. More than a year ago we realized that
        to improve Massone’s processes a Custom Application needed it to be developed, we spend
        several months reviewing the current process on the Company and what to do to improve them.
        Finally, we lock down a budget to start with the solution around September of 2018, in
        January 2019 we released the first version and we keep adding new features until today.
      </DetailParagraph>
      <DetailParagraph>
        Like any project, doubts and concerns arise about the achievement of the objective: to
        satisfy the client`s needs. In the beginning, there were many obstacles, problems with
        development, many changes in requirements (which were accepted). After completing the first
        phase there was a functional product, which met its measure with customer satisfaction.
        There was always communication with it, and a lot of support and understanding on their part
        to achieve this product that continues and hopefully will continue to grow with us.
      </DetailParagraph>
      <div>
        <List>
          <ListItem>
            <TextOrange>Location:</TextOrange> Miami, US
          </ListItem>
          <ListItem>
            <TextOrange>Web Site:</TextOrange> https://massonemechanical.com/
          </ListItem>
        </List>
      </div>
    </DetailSectionImageLeft>

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
        <div>
          <img src={slider8} alt="jobcore app" />
        </div>
        <div>
          <img src={slider9} alt="jobcore app" />
        </div>
        <div>
          <img src={slider10} alt="jobcore app" />
        </div>
      </DetailCarousel>
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

export default Massone;
