import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container, Columns, Column } from 'bloomer';
import SeoMetaTags from '../../components/SeoMetaTags';

import DetailLayout from '../../components/customer-success-stories/DetailLayout';
import DetailTitle from '../../components/customer-success-stories/DetailTitle';
import DetailSubTitle from '../../components/customer-success-stories/DetailSubTitle';
import DetailParagraphTitle from '../../components/customer-success-stories/DetailParagraphTitle';
import DetailParagraph from '../../components/customer-success-stories/DetailParagraph';
import DetailSectionImageLeft from '../../components/customer-success-stories/DetailSectionImageLeft';
import DetailSectionImageRight from '../../components/customer-success-stories/DetailSectionImageRight';
// import DetailTeam from '../../components/customer-success-stories/DetailTeam';
// import DetailCarousel from '../../components/customer-success-stories/detail-carousel/DetailCarousel';
import DetailVideo from '../../components/customer-success-stories/DetailVideo';
import DetailImageLogo from '../../components/customer-success-stories/details-images/DetailImageLogo';
import DetailHeroRightContainer from '../../components/customer-success-stories/DetailHeroRightContainer';
import DetailsOtherStories from '../../components/customer-success-stories/DetailsOtherStories';

import { TextOrange } from '../../components/Typography/TextHelpers';

const title = 'Collabtogrow™';
const description =
  'collabtogrow™ is a Boston-based technology-enabled managed services and advisory firm that specializes in improving the performance of strategic alliances.';

const Collabtogrow = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags title={title} description={description} />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>{title}</DetailTitle>
            <DetailParagraph>
              is a Boston-based technology-enabled managed services and advisory firm that
              specializes in improving the performance of strategic alliances. Leveraging their
              proven framework of industry-leading practices, standards, and tools, we help our
              clients unlock the growth potential of collaborative relationships. collabtogrow™ was
              founded by senior consulting executives with diverse industry backgrounds. Whether
              you&aposre a business that&aposs new to strategic alliances, or you&aposre looking to
              revitalize your existing strategic alliance programs, collabtogrow’s services and
              tools can help you expand market share, increase revenue, and establish meaningful
              relationships with your strategic partners. collabtogrow™ combines the best of the ISO
              44001 Collaborative Relationship framework with real-world alliance know-how to
              provide our clients with technology and services that deliver operational excellence
              with experience-based insights and focus. We provide tangible value to clients by
              improving performance and enabling clients to grow and be successful. Storytelling of
              how the idea was conceived and moved forward
              <DetailParagraphTitle>Founders</DetailParagraphTitle>
              Founders: Ken Coppins es cofundador de collabtogrow ™ y un distinguido ejecutivo de
              servicios profesionales globales, consultor de gestión y emprendedor. Tiene una amplia
              experiencia en negocios, tecnología y consultoría, habiendo desempeñado cargos de
              liderazgo sénior para KPMG, Answerthink (Hackett Group), Kanbay y Capgemini. Ken ha
              estado asociado con servicios profesionales durante más de 30 años, habiendo sido
              responsable de numerosas alianzas y asociaciones, incluidas Oracle y SAP. Bob Jones is
              a Co-founder of collabtogrow™ and a highly experienced corporate executive and
              management consultant. He possesses extensive experience in Business Transformation,
              IT Management, and Management Consulting. Bob is a proven executive who works well
              combining business and technology to deliver complex programs. He is a highly
              sought-after Large-Scale Program Manager who is often called upon to resolve complex
              issues facing business information technology programs. Bob has been a CIO and was the
              Business Unit Executive running Xerox’s largest BPO contract, a $2.3 billion program
              with the US Department of Education. As a management consultant, Bob has provided IT
              advisory, diagnostic, and benchmarking services to C-level executives from Fortune 500
              companies around the world. Jerry Harris is an original member of the collabtogrow™
              team and an experienced alliance executive with over twenty years of experience
              working for global consulting services firms. His extensive experience includes
              leading the Global IBM Alliance for Capgemini Financial Services, a $100 million,
              strategic-alliance relationship. Jerry also has extensive experience driving
              innovative enterprise business solutions in complex multi-provider environments.
              Source https://collabtogrow.com/team-1
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroRightContainer>
              <DetailImageLogo src={data.logo.childImageSharp.fluid} />
              <DetailVideo />
            </DetailHeroRightContainer>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSectionImageLeft
      src={data.textImagesOne.childImageSharp.fluid}
      alt="What is the Succeed Platform?">
      <DetailSubTitle>
        What is the <TextOrange>Succeed Platform?</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        Collabtogrow™ Succeed platform is a unique collaboration tool to manage strategic alliances.
        A one-of-a-kind SaaS platform incorporating industry-leading practices, workflows, and tools
        to help executives unlock the growth potential of their strategic alliances. Collabtogrow™
        Succeed is built to automate and enable the processes and deliverables across eight key
        alliance dimensions. Companies that consistently succeed in getting value from strategic
        alliances demonstrate high capability across all dimensions measured and tracked within the
        platform.
      </DetailParagraph>
      <DetailSubTitle>
        How to <TextOrange>relationship</TextOrange>started
      </DetailSubTitle>
      <DetailParagraph>
        Collabtogrow™ Succeed platform is a unique collaboration tool to manage strategic alliances.
        A one-of-a-kind SaaS platform incorporating industry-leading practices, workflows, and tools
        to help executives unlock the growth potential of their strategic alliances. Collabtogrow™
        Succeed is built to automate and enable the processes and deliverables across eight key
        alliance dimensions. Companies that consistently succeed in getting value from strategic
        alliances demonstrate high capability across all dimensions measured and tracked within the
        platform.
      </DetailParagraph>
    </DetailSectionImageLeft>

    <DetailSectionImageRight
      src={data.textImagesOne.childImageSharp.fluid}
      alt="What is the Succeed Platform?">
      <DetailSubTitle>
        Starting from <TextOrange>Zero</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        The initial plan for developing the app was created by the 8base executive team, Albert
        Santalo and Oscar Perez. Carlos Arevalo worked on the technical designs and wireframes of
        the application, and Cobuild Lab led the architecture and development of the platform. When
        Cobuild Lab joined the project, we began having weekly meetings to define the priorities and
        the strategy that we would use for creating the product. During these meetings, Bob and
        Jerry’s practical know-how was directly taken into account when developing features which
        they wanted to manage inside the application, and from there early designs and proposals
        were created to solve each of those features that were needed.
      </DetailParagraph>
      <DetailSubTitle>
        Cobuild Lab’s<TextOrange>Collaborative</TextOrange>
        <br />
        Approach
      </DetailSubTitle>
      <DetailParagraph>
        One of the reasons why Cobuild Lab was brought to the team was for our extensive experience
        building web applications, especially with the ReactJS framework, which is a core element in
        the 8base stack.
      </DetailParagraph>
      <DetailParagraph>
        By using 8base Platform services and low-code Platform, collabtogrow™ will accelerate the
        delivery of a robust, cloud-based SaaS solution to more effectively structure, organize and
        govern corporate strategic alliances.
      </DetailParagraph>
      <DetailParagraph>
        By using 8base Platform services and low-code Platform, collabtogrow™ will accelerate the
        delivery of a robust, cloud-based SaaS solution to more effectively structure, organize and
        govern corporate strategic alliances. “With the 8base Platform, we are able to rapidly bring
        to market an innovative new system that is cost-effective and improves strategic alliance
        performance. We carefully investigated development alternatives including existing “no code”
        vendors. 8base was the only company that could equip our subject matter experts with
        powerful and agile tools to deliver a solution that will be capable of scaling and evolving
        with collabtogrow™ itself.”
      </DetailParagraph>
      <DetailParagraph>
        Our developers are battle-tested React frontend experts with great skills in coding HTML,
        CSS, and Javascript.
      </DetailParagraph>
      <DetailParagraph>
        Cobuild Lab’s collaborative approach is something that sets us apart, we are not simply a
        development shop that produces mass-produced projects. We take the time and effort to really
        understand the problems that need to be solved in a user and business centric approach.
      </DetailParagraph>
    </DetailSectionImageRight>

    <DetailSectionImageLeft
      src={data.textImagesOne.childImageSharp.fluid}
      alt="What is the Succeed Platform?">
      <DetailSubTitle>
        Target <TextOrange>Demographic</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        CollabtogrowTM Succeed platform is a tool that enables executives to leverage all the power
        of modern technologies to effectively execute and manage strategic alliances.
      </DetailParagraph>
      <DetailSubTitle>
        Product <TextOrange>Development</TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        After dozens of alpha product iterations, we are excited to present the first full version
        of the platform. Almost a year later we have created an amazing dynamic. between all the
        participants on the project.
      </DetailParagraph>
      <DetailParagraph>
        Early in the development process, we started with bi-weekly meetings for creating all the
        basic features, once we started creating more specialized features and powerful tools we
        decided to meet 3 times a week to have a more iterative approach solving small pieces at a
        time, creating more agile and efficient development cycles.
      </DetailParagraph>
      <DetailParagraph>
        During these meetings, we discussed along with Bob, Jerry, Oscar, and Carlos the features to
        be developed, the business requirements, and how this should be implemented in the product.
      </DetailParagraph>
      <DetailParagraph>
        Carlos was in charge of creating the visual representations of the features, validating
        those ideas with the team, which would be implemented in the following weeks.
      </DetailParagraph>
      <DetailParagraph>
        During the later sprints, another development team was added in order to complete the more
        robust features to the platform in a timely manner, those features included the “balanced
        scorecard”, a summary view of the status of the alliance designed by the collabtogrowTM
        team; and a powerful “reports system” to query real time data and analytics, both unique
        values of how collabtogrowTM handles the process of strategic alliances. Technology Stack To
        develop the product we used the 8base Platform, which is a complete set of backend tools to
        enable Frontend developers to create amazing products faster. This also included the 8base
        boost kit, a ReactJS components library focused on simplicity, 8base Graphql API and Cloud
        Functions, Auth0 as an authentication provider, and SendGrid for email notifications. During
        the development over 6 Cobuild Lab developers participated in the coding process, all
        frontend specialists on Javascript and ReactJs.
      </DetailParagraph>
    </DetailSectionImageLeft>

    {/* <Section>
      <Container>
      <DetailTeam />
      </Container>
     </Section> 

  
    <Section isPaddingless>
      <DetailCarousel  />
    </Section>*/}

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Collabtogrow.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    textImagesOne: file(relativePath: { eq: "customers/laptop-left.png" }) {
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
    logo: file(relativePath: { eq: "customers/4geek/logo.png" }) {
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
  }
`;

export default Collabtogrow;
