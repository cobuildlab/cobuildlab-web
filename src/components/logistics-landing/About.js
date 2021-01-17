import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Typrography from '../../components/2020/Typography';
import ButtonSmoothScrolling from '../../components/2020/Button/ButtonSmoothScrolling';
import '../enterprise/containers/about/about.scss';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <Section isPaddingless id="about">
      <div className="about-wrapper gradient-color">
        <Container>
          <Columns isDisplay="flex-mobile" isCentered>
            <Column isSize={{ mobile: 11, desktop: 7 }}>
              <div className="row">
                <div className="about-content-block main-title-wrapper">
                  <div className="row mb-2">
                    <Typrography tag="h2" className="sitemain-subtitle">
                      Solving Logistics and Supply Chain Problems:
                    </Typrography>
                  </div>
                  <ul>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Shipping Time: Spot potential issues in your order fulfilment process
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Order Accuracy: Monitor the degree of incidents
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Delivery Time: Track your average delivery time in detail
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Transportation Costs: Analyze all costs from the order placement to
                        delivery
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Warehousing Costs: Optimize the expenses of your warehouse
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Number of Shipments: Understand how many orders are shipped
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Inventory Accuracy: Avoid problems because of inaccurate inventory
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Inventory Turnover: Track how many times your entire inventory is sold
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Inventory to Sales Ratio: Identify a potential overstock
                      </Typrography>
                    </li>
                  </ul>
                  <ButtonSmoothScrolling href="#" isCapitalize={false}>
                    Get a Free Consultation
                  </ButtonSmoothScrolling>
                </div>
              </div>
            </Column>
            <Column isSize={{ mobile: 10, desktop: 4 }} isHidden="mobile" isVCentered>
              <StaticImage
                src="../../assets/images/about/group-banner.png"
                alt="Logistics and Supply Chain"
              />
            </Column>
          </Columns>
        </Container>
        <br />
        <br />
        <br />
        <Container>
          <Columns isDisplay="flex-mobile" isCentered>
            <Column isSize={{ mobile: 10, desktop: 4 }} isHidden="mobile">
              <StaticImage
                src="../../assets/images/skills/cobuild-lab-customers.png"
                alt="Productivity Problems"
              />
            </Column>
            <Column isSize={{ mobile: 11, desktop: 7 }}>
              <div className="row">
                <div className="about-content-block main-title-wrapper">
                  <div className="sub-title-wrapper">
                    <div className="row mb-2">
                      <Typrography tag="h2" className="sitemain-subtitle">
                        Solving Productivity problems
                      </Typrography>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Track, Manage and Automate custom processes in your organization
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Obtain 360 degrees visibility of your Business
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Identify instantly and Fix errors in your processes.
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Automate reporting and KPIs
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Follow and automate compliance
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Streamline time-consuming approvals workflows
                      </Typrography>
                    </li>
                  </ul>
                  <ButtonSmoothScrolling href="#" isCapitalize={false}>
                    Get a Free Consultation
                  </ButtonSmoothScrolling>
                </div>
              </div>
            </Column>
          </Columns>
        </Container>
      </div>
    </Section>
  );
};

export { About };
