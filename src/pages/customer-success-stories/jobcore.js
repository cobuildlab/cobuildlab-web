import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraphTitle from '../../components/customer-success-stories/DetailParagraphTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailSectionImageLeft from '../../components/customer-success-stories/DetailSectionImageLeft';
import DetailSectionImageRight from '../../components/customer-success-stories/DetailSectionImageRight';
import DetailImagesDescription from '../../components/customer-success-stories/details-images/DetailImagesDescription';
// import DetailTeam from '../../components/customer-success-stories/DetailTeam';
import DetailCarousel from '../../components/customer-success-stories/detail-carousel/DetailCarousel';
import DetailImageLogo from '../../components/customer-success-stories/details-images/DetailImageLogo';
import DetailHeroRightContainer from '../../components/customer-success-stories/DetailHeroRightContainer';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';

import { TextOrange } from '../../components/Typography/TextHelpers';

const Jobcore = ({ data }) => (
  <DetailLayout>
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>Jobcore</DetailTitle>
            <DetailParagraph>
              Get work fast and get paid the same day with Jobcore. This is a web platform that
              allows employers to post job applications for candidates using the mobile and web app.
              It is the first distributed talent pool for the hospitality industry.
            </DetailParagraph>
            <DetailSubTitle>
              Introducing the <TextOrange>founders:</TextOrange>
            </DetailSubTitle>
            <DetailParagraphTitle>Alejandro Sanchez</DetailParagraphTitle>
            <DetailParagraph>
              <a href="(https://www.linkedin.com/in/alesanchezr/?locale=es_ES">Alejandro Sánchez</a>{' '}
              has a certificate in business administration Entrepreneurship/Entrepreneurial Studies,
              he has dedicated his life to coding since he was 13 years old and now he makes a
              living out of building and teaching code to others
            </DetailParagraph>
            <DetailParagraph>
              He is founder of Geeks Developers Community, a company specialized in developing Web
              Apps and Mobile Apps. With offices in 7 different countries, 300 employees and more
              than $8,000,000 in revenues; this company connects developers from all over Latin
              America to share technology knowledge and a geek&apos;s own interests.
            </DetailParagraph>
            <DetailParagraph>
              He is passionate about teaching others to code, that&apos;s how he created{' '}
              <a href="https://www.4geeksacademy.co/es/inicio/">4Geeks Academy</a> The academy has
              500+ alumni worldwide, 87% of the graduates had an average 20% increase in salary
              after completing the program. It managed to generate $1,000,000+ in annual revenues in
              5 locations. Then he launched a Not-for-profit open source community.{' '}
              <a href="https://breatheco.de/">BreatheCode</a> aims to accelerate the way junior
              developers learn and evolve using technology.
            </DetailParagraph>
            <DetailParagraph>
              Source: <a href="https://www.linkedin.com/in/alesanchezr/?locale=es_ES">LinkedIn</a>
            </DetailParagraph>
            <DetailParagraphTitle>Juan Carlos</DetailParagraphTitle>
            <DetailParagraph>
              <a href="https://www.linkedin.com/in/juan-carlos-miranda-8494a3aa/">
                Juan Carlos Alvarez-Miranda{' '}
              </a>
              is the CEO and founder of{' '}
              <a href="https://bestmiamiweddings.com/?gclid=CjwKCAjwr8zoBRA0EiwANmvpYEvMKSx01ODW0kTooBv-sSfNwl6ODH0OKORoHKnIA_lRbOsE-UM8JRoCP7IQAvD_BwE">
                Fetes & Events
              </a>
              , a full-service event planning and management company based in Coral Gables, Florida.
              With more than 10 years of experience in event planning, business development, and
              management, he began “Best Miami Weddings” in 2004, now known as Fetes & Events.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroRightContainer>
              <DetailImageLogo src={data.logo.childImageSharp.fluid} />
              <DetailImagesDescription src={data.text.childImageSharp.fluid} alt="" />
            </DetailHeroRightContainer>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSectionImageLeft
      src={data.textImagesOne.childImageSharp.fluid}
      alt="What is the Succeed Platform?">
      <DetailSubTitle>
        What is the <TextOrange>Jobcore</TextOrange> platform?
      </DetailSubTitle>
      <DetailParagraph>
        Jobcore is a web and mobile platform where employers can create a job opening to search
        talent in the hospitality industry. The talent by using the mobile app is able to apply and
        work using this incredible platform and get paid faster than ever.
      </DetailParagraph>
      <DetailParagraph>
        The Employer interface is a website where he can plan his shifts and invite talents to work
        for them. This interface allows you not only to manage your schedules but also to see the
        activity for the specific job, and track the time that your talents work on each shift. In
        the next release, the capabilities of making payroll will become available.
      </DetailParagraph>
      <DetailParagraph>
        For the talent, the mobile app allows them to get notifications for open positions, apply,
        and full fill the shift and track payments all in one place.
      </DetailParagraph>
    </DetailSectionImageLeft>

    <DetailSectionImageRight
      src={data.textImagesTwo.childImageSharp.fluid}
      alt="What is the Succeed Platform?">
      <DetailSubTitle>
        How everything <TextOrange>started:</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The idea comes from Alejandro and Juan Carlos. Juan Carlos is the owner of Best Miami
        Weddings and for years he has had problems keeping track of how his workers report hours,
        because the applications on the market don&apos;t work for him. Alejandro, his director of
        marketing and technology proposed this idea about building a web and mobile platform custom
        made to its needs, and so the project began.
      </DetailParagraph>
      <DetailParagraph>
        Alejandro has known <a href="https://www.linkedin.com/in/alacret/">Angel Lacret</a> , Chief
        of Product Development at <a href="https://cobuildlab.com/">Cobuild Lab</a> for about 6
        years now from working together in a software company and in 4Geeks Academy. Sánchez gets in
        touch with Lacret so that he can put a team together and start developing this project
        together with them. After several iteration, the concept was expanded to create a complete
        marketplace for the industry, where employer can publish their position needs to a wider
        audience.
      </DetailParagraph>
    </DetailSectionImageRight>

    {/* <Section>
      <Container>
      <DetailTeam />
      </Container>
     </Section> */}

    <Section isPaddingless>
      <DetailCarousel data={data.slider.edges} />
    </Section>
    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Jobcore.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "customers/jobcore/job-logo.jpeg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
    text: file(relativePath: { eq: "customers/jobcore/Texto-corto.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
    textImagesOne: file(relativePath: { eq: "customers/jobcore/text-img-1.png" }) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
    textImagesTwo: file(relativePath: { eq: "customers/jobcore/text-img-2.jpg" }) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
    slider: allFile(filter: { relativeDirectory: { eq: "customers/jobcore/slider" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(quality: 100) {
              src
              srcSet
              sizes
              aspectRatio
              base64
            }
          }
        }
      }
    }
  }
`;

export default Jobcore;
