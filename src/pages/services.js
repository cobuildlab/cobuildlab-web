import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Columns, Column } from 'bloomer';
import 'bulma';

// ICONS
import { Icon } from 'react-icons-kit';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';

// TYPOGRAPHY
import { SubTitle, SubTitle2 } from '../components/2020/LandingTypography';
import Paragraph from '../components/Typography/Paragraph';

import Styled from 'styled-components';

const Section = Styled.div`
  margin-bottom: 3rem;
`;

class Services extends Component {
  render() {
    const siteTitle = 'Services | Cobuild Lab';
    return (
      <LandingPageLayout
        withFooter
        siteDescription="Privacy Policy for the Cobuild Lab"
        siteTitle={siteTitle}>
        <Section>
          <Columns>
            <Column>
              <SubTitle className="mb-2">
                <Icon size={32} icon={checkmark} /> Cobuild: Product Development
              </SubTitle>
              <SubTitle2>
                Cobuild Is the process of transforming an idea in a sustainable business, through
                the combination and collaboration of the areas of Lean Entrepreneurship, Business
                Strategy, Technological Innovation, and Exponential Growth.
              </SubTitle2>
              <Paragraph>
                In this process, we evaluate your idea and help you shape it into a Value
                Proposition, and test it if necessary. After that, we design together the first
                version of your product with the purpose of Market Validation, or Product Market Fit
                to test if we satisfy the need that we intend to satisfy and to acquire our first
                Customers. From this point and forward we focus on improving the experience, acquire
                customer and growth.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <SubTitle className="mb-2">
                <Icon size={32} icon={checkmark} /> Software Development
              </SubTitle>
              <SubTitle2>
                We transform requirements into computer programs. We specialize in building
                websites, web applications, and mobiles applications.
              </SubTitle2>
              <Paragraph>
                Software development is the process of conceiving, specifying, designing,
                programming, documenting, testing, and bug fixing involved in creating and
                maintaining applications, frameworks, or other software components. Software
                development is a process of writing and maintaining the source code, but in a
                broader sense, it includes all that is involved between the conception of the
                desired software through to the final manifestation of the software, sometimes in a
                planned and structured process With our streamlined, lean and phased Process we
                achieve incredible results. From day one, our technique is focused on early results
                and transparent communication.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <SubTitle className="mb-2">
                <Icon size={32} icon={checkmark} /> Training
              </SubTitle>
              <SubTitle2>
                With over 10 years of experience developing web and mobile applications withour
                agile techniques we can drive success to your Software Development Team.
              </SubTitle2>
              <Paragraph>We provide training in the areas of:</Paragraph>
              <ul>
                <li>
                  <Paragraph>- Scrum framework</Paragraph>
                </li>
                <li>
                  <Paragraph>
                    - Continuous integration and Continuous Delivery for Web Development
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>- React and React Native development</Paragraph>
                </li>
                <li>
                  <Paragraph>- API design and development</Paragraph>
                </li>
              </ul>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <SubTitle className="mb-2">
                <Icon size={32} icon={checkmark} /> Agile Project Management
              </SubTitle>
              <SubTitle2>Let our experience drive the success of your projects.</SubTitle2>
              <Paragraph>
                Our senior&rsquo;s product managers and agile coaches work with you to build and
                deliver software effectively. Your team would be transformed through education of
                the most appropriate agile techniques and best practices
              </Paragraph>
            </Column>
          </Columns>
        </Section>
      </LandingPageLayout>
    );
  }
}

export default Services;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
