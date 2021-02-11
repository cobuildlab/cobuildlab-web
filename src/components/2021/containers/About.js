import React from 'react';
import { Container, Columns, Column, Section, Title, Subtitle } from 'bloomer';
import { SmoothScrollingButton } from '../button/SmoothScrollingButton';
import '../../../assets/2021/scss/about.scss';
import { StaticImage } from 'gatsby-plugin-image';

import '../../../assets/images/customers/collabtogrow/collab-1.jpg';
import '../../../assets/images/customers/jobcore/text-img-2.jpg';
import '../../../assets/images/customers/my-voice/2.png';
import { AlignCenter } from '../text/TextHelpers';

const About = () => {
  return (
    <Section>
      <AlignCenter>
        <Title isSize={1}>We turn your problems into Advantages</Title>
      </AlignCenter>
      <br />
      <br />
      <Container>
        <Columns isDisplay="flex-mobile" isCentered isVCentered>
          <Column isSize={{ mobile: 11, desktop: 7 }}>
            <Subtitle isSize={2}>We solve Logistics and Supply Chain challenges:</Subtitle>
            <ul>
              <li>
                <p>☛ Improve Shipping time</p>
              </li>
              <li>
                <p>☛ Order accuracy enhancement</p>
              </li>
              <li>
                <p>☛ Delivery time Tracking</p>
              </li>
              <li>
                <p>☛ Warehousing and Transportation Costs optimization</p>
              </li>
            </ul>
            <SmoothScrollingButton href="#" isCapitalize={false}>
              Get a Free Consultation
            </SmoothScrollingButton>
          </Column>
          <Column isSize={{ mobile: 10, desktop: 4 }} isHidden="mobile" isVCentered>
            <StaticImage
              src="../../../assets/images/customers/collabtogrow/collab-1.jpg"
              alt="Logistics and Supply Chain"
            />
          </Column>
        </Columns>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <Columns isDisplay="flex-mobile" isCentered isVCentered>
          <Column isSize={{ mobile: 10, desktop: 4 }} isHidden="mobile">
            <StaticImage
              src="../../../assets/images/customers/jobcore/text-img-2.jpg"
              alt="Productivity Problems"
            />
          </Column>
          <Column isSize={{ mobile: 11, desktop: 7 }}>
            <Subtitle isSize={2}>We solve Productivity challenges</Subtitle>
            <ul>
              <li>
                <p>☛ Track, Manage and Automate custom processes in your organization</p>
              </li>
              <li>
                <p>☛ Obtain 360 degrees visibility of your Business</p>
              </li>
              <li>
                <p>☛ Streamline time-consuming approvals workflows</p>
              </li>
              <li>
                <p>☛ Identify instantly and Fix errors in your processes</p>
              </li>
            </ul>
            <SmoothScrollingButton href="#" isCapitalize={false}>
              Get a Free Consultation
            </SmoothScrollingButton>
          </Column>
        </Columns>
      </Container>
      <br />
      <br />
      <br />
      <Container>
        <Columns isDisplay="flex-mobile" isCentered isVCentered>
          <Column isSize={{ mobile: 11, desktop: 7 }}>
            <Subtitle isSize={2}>We solve Trucking and Transportation troubles:</Subtitle>
            <ul>
              <li>
                <p>☛ Route optimization </p>
              </li>
              <li>
                <p>☛ Labor productivity</p>
              </li>
              <li>
                <p>☛ Loading or unloading time </p>
              </li>
              <li>
                <p>☛ Analysis of the number of claims filed, resolved, and resolution time</p>
              </li>
            </ul>
            <SmoothScrollingButton href="#" isCapitalize={false}>
              Get a Free Consultation
            </SmoothScrollingButton>
          </Column>
          <Column isSize={{ mobile: 10, desktop: 4 }} isHidden="mobile" isVCentered>
            <StaticImage
              src="../../../assets/images/customers/my-voice/2.png"
              alt="Trucking and transportation"
            />
          </Column>
        </Columns>
      </Container>
    </Section>
  );
};

export { About };
