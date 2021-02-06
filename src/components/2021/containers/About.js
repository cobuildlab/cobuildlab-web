import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { SmoothScrollingButton } from '../button/SmoothScrollingButton';
import '../../../assets/2021/scss/about.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { SubTitle } from '../../2020/LandingTypography';

import '../../../assets/images/customers/collabtogrow/collab-1.jpg';
import '../../../assets/images/customers/jobcore/text-img-2.jpg';
import '../../../assets/images/customers/my-voice/2.png';

const About = () => {
  return (
    <Section>
      <Container>
        <Columns isDisplay="flex-mobile" isCentered isVCentered>
          <Column isSize={{ mobile: 11, desktop: 7 }}>
            <SubTitle isSize={4}>Solving Logistics and Supply Chain Problems:</SubTitle>
            <ul>
              <li>
                <p>☛ Shipping Time: Spot potential issues in your order fulfilment process</p>
              </li>
              <li>
                <p>☛ Order Accuracy: Monitor the degree of incidents</p>
              </li>
              <li>
                <p>☛ Delivery Time: Track your average delivery time in detail</p>
              </li>
              <li>
                <p>
                  ☛ Transportation Costs: Analyze all costs from the order placement to delivery
                </p>
              </li>
              <li>
                <p>☛ Warehousing Costs: Optimize the expenses of your warehouse</p>
              </li>
              <li>
                <p>☛ Number of Shipments: Understand how many orders are shipped</p>
              </li>
              <li>
                <p>☛ Inventory Accuracy: Avoid problems because of inaccurate inventory</p>
              </li>
              <li>
                <p>☛ Inventory Turnover: Track how many times your entire inventory is sold</p>
              </li>
              <li>
                <p>☛ Inventory to Sales Ratio: Identify a potential overstock</p>
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
            <SubTitle isSize={4}>Solving Productivity problems</SubTitle>
            <ul>
              <li>
                <p>☛ Track, Manage and Automate custom processes in your organization</p>
              </li>
              <li>
                <p>☛ Obtain 360 degrees visibility of your Business</p>
              </li>
              <li>
                <p>☛ Identify instantly and Fix errors in your processes.</p>
              </li>
              <li>
                <p>☛ Automate reporting and KPIs</p>
              </li>
              <li>
                <p>☛ Follow and automate compliance</p>
              </li>
              <li>
                <p>☛ Streamline time-consuming approvals workflows</p>
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
            <SubTitle isSize={4}>Solving Trucking and Transportation Problems:</SubTitle>
            <ul>
              <li>
                <p>☛ Route optimization </p>
              </li>
              <li>
                <p>
                  ☛ Cost-per-Mile: Knowing what your operational costs are on a per-mile basis
                  allows you to manage expenses efficiently
                </p>
              </li>
              <li>
                <p>☛ Loading or unloading time </p>
              </li>
              <li>
                <p>
                  ☛ Freight Claim: Analysis of the number of claims filed, resolved and resolution
                  time
                </p>
              </li>
              <li>
                <p>☛ Labor productivity </p>
              </li>
              <li>
                <p>
                  ☛ Equipment Utilization: Efficiency is measured differently in every industry.
                </p>
              </li>
              <li>
                <p>☛ Track Damages</p>
              </li>
              <li>
                <p>☛ Fuel Efficiency</p>
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
