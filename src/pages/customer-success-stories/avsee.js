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
import SlidersAvsee from '../../components/customer-success-stories/new/sliders/avsee/Sliders';
import { StaticImage } from 'gatsby-plugin-image';
import TextLink from '../../components/Typography/TextLink';

const Avsee = ({ data }) => (
  <DetailLayout>
    <SeoMetaTags
      title="AVSEE"
      description="The Avsee team chose Cobuild Lab to be their technology partner in developing a
              platform that helps physicians and patients by facilitating follow-ups as well as
              providing assistance to patients by giving them guided information so they can comply
              with the medical plan laid out by their physician"
      image={data.seoImages.childImageSharp.resize}
    />
    <Section>
      <Container>
        <Columns isMultiline>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailTitle>AVSEE</DetailTitle>
            <DetailParagraph>
              The Avsee team chose Cobuild Lab to be their technology partner in developing a
              platform that helps physicians and patients by facilitating follow-ups as well as
              providing assistance to patients by giving them guided information so they can comply
              with the medical plan laid out by their physician.
            </DetailParagraph>
            <DetailParagraph>
              It is no secret that many patients find it extremely difficult to follow the treatment
              recommendations provided by their doctor. According to a{' '}
              <TextLink to="https://www.paho.org/en">
                Pan American Health Organization{"'"}s
              </TextLink>{' '}
              research about adherence to long-term medical treatment, it is estimated that{' '}
              <TextLink to="https://www.paho.org/spanish/ad/dpc/nc/adherencia-largo-plazo.pdf">
                adherence to long-term treatment of chronic diseases
              </TextLink>{' '}
              in developed countries averages 50%; in developing countries, the rates are even lower
              and this is reflected not only in poor health outcomes but also in increased
              healthcare costs, which is why Avsee seeks to improve patients{"'"} adherence to
              treatment by modifying the effectiveness of the healthcare system.
            </DetailParagraph>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <DetailHeroImagesContent>
              <StaticImage src={'./../../assets/images/customers/avsee/avsee-logo.jpg'} alt="" />
            </DetailHeroImagesContent>
          </Column>
        </Columns>
      </Container>
    </Section>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/4geek/2.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange> Problem </TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        Patients require support. When talking about therapeutic adherence, there is a tendency to
        blame the patient for not following medical orders without taking into account the
        determinants related to the health system that can significantly affect therapeutic
        adherence. The reality is that therapeutic adherence is a very dynamic process that requires
        a continuous tracking and improvement approach; interventions must be adapted to the
        patients and for this, it is essential that professionals are trained in therapeutic
        adherence as they should be able to assess the patient{"'"}s willingness to comply with what
        is indicated, advise on how to do so and follow the patient{"'"}s process every step of the
        way.
      </DetailParagraph>

      <DetailParagraph>
        Like any process, when the first stages are not fulfilled, the rest of the system is always
        affected to a greater or lesser extent. When the patient goes for consultation, he/she
        receives a series of steps to follow, either laboratory tests, imaging studies, or
        consulting with other specialists; when this fails to happen, a chain decline develops; that
        is, if there are fewer and fewer patients who follow medical indications, then fewer and
        fewer laboratory tests are performed, fewer imaging studies, fewer consultations; this
        results in higher costs of maintenance of equipment, reagents, health care staff, and a
        lower rate of income in these areas of the system.
      </DetailParagraph>

      <DetailParagraph>
        In a parallel way, we can also appreciate that the patient doesn{"'"}t take the necessary
        tests to guide to an adequate diagnosis and subsequent treatment, which results in a
        worsening of his condition, becoming in many occasions a chronic condition, which will
        represent an increase in health costs a posteriori as well as a progressive and silent
        deterioration of the patient. The healthcare system is facing new challenges and Avsee seeks
        to be the tool that facilitates its evolution in order to successfully face them.
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/4geek/1.png'} alt="" />}
      left>
      <DetailSubTitle>
        The <TextOrange> Solution </TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        Therapeutic adherence requires a stronger commitment with a multidisciplinary approach to
        achieve advances in this topic, and with the rise of{' '}
        <TextLink to="https://cobuildlab.com/blog/what-is-digital-transformation-and-how-can-small-businesses-take-advantage-of-it-this-2020/amp/">
          Digital Transformation
        </TextLink>{' '}
        , it is not surprising that a software product is an ideal tool to accelerate these
        advances; so we manage to put together a top software engineering team to start building a
        <TextLink to="https://cobuildlab.com/blog/what-is-digital-transformation-and-how-can-small-businesses-take-advantage-of-it-this-2020/amp/">
          Custom Software Solution
        </TextLink>{' '}
        .
      </DetailParagraph>
      <DetailParagraph>
        In order for health centers to be able to keep a dynamic and close follow-up of patients and
        their treatment, it was ideal to start developing a{' '}
        <TextLink to="https://cobuildlab.com/blog/what-is-crm-software/amp/">
          Custom CRM (Customer Relationship Manager) Software.
        </TextLink>{' '}
        A CRM software is part of a customer-oriented strategy (in this case patients) in which all
        actions have the ultimate goal of improving the attention and relationships with customers
        and prospects; therefore using a CRM tool will allow healthcare providers to easily share,
        track and maximize the information about a given patient, its treatment, and thus understand
        their needs and anticipate them.
      </DetailParagraph>
      <DetailParagraph>
        Since the platform would handle high traffic of information, we decided to use a{' '}
        <TextLink to="https://www.8base.com/blog/saas-application-development-for-non-technical-founders-part-i">
          SaaS (Software-as-a-Service)
        </TextLink>{' '}
        method to allow data to be accessed from basically any device with an internet connection,
        and by using this cloud-based model we aimed to lower down costs and improve effectiveness.
        Now, the cornerstone of this project was to ensure the data safety; since organizations that
        will use this platform work the PHI (Protected Health Information), it was imperative to
        make Avsee HIPAA-compliant.
      </DetailParagraph>

      <DetailParagraph>
        <TextLink to="https://www.hhs.gov/hipaa/index.html">
          HIPAA (Health Insurance Portability and Accountability Act)
        </TextLink>{' '}
        is a set of standards or regulations to protect the privacy and security of certain health
        information, so We made sure to comply with HIPAA{' '}
        <TextLink to="https://www.hhs.gov/hipaa/for-professionals/privacy/index.html">
          Privacy Rule
        </TextLink>{' '}
        (for the privacy of individually identifiable health information), the HIPAA{' '}
        <TextLink to="https://www.hhs.gov/hipaa/for-professionals/security/index.html">
          Security Rule
        </TextLink>{' '}
        (for the protection of electronically protected health information) as well as the
        Enforcement Rule and the Breach Notification Rule which all of them apply to every party
        involved, from doctors to developers.
      </DetailParagraph>
    </DetailSection>

    <DetailSection
      image={<StaticImage src={'./../../assets/images/customers/4geek/1.png'} alt="" />}
      right>
      <DetailSubTitle>
        The <TextOrange> Result </TextOrange>
      </DetailSubTitle>
      <DetailParagraph>
        AVSEE is a platform that assists patients by updating them with their pending medical
        appointments and tests to keep track of their full recovery and wellbeing. Not only makes it
        possible to give a more dynamic approach to patients offering them the personalized medical
        attention that fulfills their expectations, making them feel better-taken care of and thus,
        increasing adherence to medical treatment but improves the whole healthcare system
        eliminating wasteful visits, increasing patient populations as well as revenue per patient
        encounter.
      </DetailParagraph>
      <DetailParagraph>
        We built a HIPAA-compliant, highly secure Healthcare Custom CRM Software from scratch; its
        back-end system is made according to{' '}
        <TextLink to="https://www.hhs.gov/hipaa/index.html">HIPAA safeguards</TextLink> and the
        platform is able to:
        <List>
          <ListItem>
            Help patients navigate the health system and comply with their medical plan.
          </ListItem>
          <ListItem>
            It lets the users know how their data is protected and how it will be used and it
            encrypts it along the way.
          </ListItem>
          <ListItem>
            It tracks patient progress and events to understand better what drives compliance.
          </ListItem>
          <ListItem>
            It analyzes aggregate data through custom reports and dashboard to increase compliance{' '}
          </ListItem>
          <ListItem>
            The system sends an encrypted link to the patient via SMS where, after a safety
            verification procedure to guarantee their privacy, they can access their list of pending
            appointments.{' '}
          </ListItem>
          <ListItem>
            It also has a full EHR Integration which means no extra work for physicians.{' '}
          </ListItem>
        </List>
        Avsee effectively helps patients comply with their medical plan which benefits everyone
        involved in the medical care chain, from patients and doctors to hospitals and insurance
        companies taking the healthcare and patient approach onto the next level.
      </DetailParagraph>
    </DetailSection>

    <Section isPaddingless>
      <SlidersAvsee />
    </Section>

    <Section isPaddingless>
      <DetailsOtherStories />
    </Section>
  </DetailLayout>
);

Avsee.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    seoImages: file(relativePath: { eq: "customers/avsee-logo.jpg" }) {
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

export default Avsee;
