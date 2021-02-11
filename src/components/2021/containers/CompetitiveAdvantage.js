import React from 'react';
import { Container, Columns, Column, Section, Title } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import '../../../assets/2021/scss/about.scss';

import { SmoothScrollingButton } from '../button/SmoothScrollingButton';
import { SubTitle } from '../../2020/LandingTypography';
import { AlignCenter } from '../text/TextHelpers';

const CompetitiveAdvantage = () => {
  return (
    <Section>
      <AlignCenter>
        <Title isSize={1}>Competitive Advantage</Title>
      </AlignCenter>
      <br />
      <br />
      <Container>
        <Columns isDisplay="flex-mobile" isCentered>
          <Column isSize={{ mobile: 11, desktop: 6 }}>
            <SubTitle isSize={4}>Business Value</SubTitle>
            <br />
            <ul>
              <li>
                <p>☛ Strong engineering background</p>
              </li>
              <li>
                <p> ☛ iOS and Android experience </p>
              </li>
              <li>
                <p> ☛ Zero waste, sustainable process </p>
              </li>
            </ul>
            <SmoothScrollingButton href="#" isCapitalize={false}>
              Learn More
            </SmoothScrollingButton>
          </Column>
          <Column isSize={{ mobile: 10, desktop: 5 }} isHidden="mobile">
            <StaticImage src={'../../../assets/2021/images/group-banner.png'} />
          </Column>
        </Columns>
      </Container>
      <Container>
        <Columns isDisplay="flex-mobile" isCentered>
          <Column isSize={{ mobile: 10, desktop: 5 }} isHidden="mobile">
            <StaticImage src={'../../../assets/2021/images/cobuild-lab-customers.png'} />
          </Column>
          <Column isSize={{ mobile: 11, desktop: 6 }}>
            <SubTitle isSize={4}>Industry Experience:</SubTitle>
            <ul>
              <li>
                <p> ☛ Logistics and productivity challenges turned into competitive advantages. </p>
              </li>
              <li>
                <p> ☛ Process and Workflow Automation. </p>
              </li>
              <li>
                <p> ☛ Risk, errors and cost reduction </p>
              </li>
            </ul>
            <SmoothScrollingButton href="#" isCapitalize={false}>
              Learn More
            </SmoothScrollingButton>
          </Column>
        </Columns>
      </Container>
      ;
    </Section>
  );
};

export default CompetitiveAdvantage;
export { CompetitiveAdvantage };
