import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Columns,
  Column
} from 'bloomer';
import { Icon } from 'react-icons-kit';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import 'bulma';
import '../assets/fonts/Lato-Black.ttf';
import '../assets/fonts/Lato-BlackItalic.ttf';
import '../assets/fonts/Lato-Bold.ttf';
import '../assets/fonts/Lato-BoldItalic.ttf';
import '../assets/fonts/Lato-Hairline.ttf';
import '../assets/fonts/Lato-HairlineItalic.ttf';
import '../assets/fonts/Lato-Italic.ttf';
import '../assets/fonts/Lato-Light.ttf';
import '../assets/fonts/Lato-LightItalic.ttf';
import '../assets/fonts/Lato-Regular.ttf';

class ServicesIndex extends React.Component {
  render() {
    const siteTitle = 'Services | Cobuild Lab';
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'Services Offer by the Cobuild Lab in Miami' }]}
          title={siteTitle}
        />

        <Hero isColor="white" isSize="medium">
          <HeroBody className="bg-services">
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title isSize={1} hasTextColor="black">
                    Our Services
                  </Title>
                  <br/>
                  <hr/>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        <section className="section">
          <Container>
            <Columns>
              <Column>
                <Title isSize={2} hasTextColor="black" className="mb-2">
                  <Icon size={32} icon={checkmark}/>
                  Cobuild: Product Development
                </Title>
                <Subtitle isSize={4}>
                  <strong>
                    Cobuild Is the process of transforming an idea in a sustainable
                    business, through the combination and collaboration of the areas
                    of Lean Entrepreneurship, Business Strategy, Technological
                    Innovation, and Exponential Growth.
                  </strong>
                </Subtitle>
                <p>
                  In this process, we evaluate your idea and help you shape it
                  into a Value Proposition, and test it if necessary. After that,
                  we design together the first version of your product with the
                  purpose of Market Validation, or Product Market Fit to test if
                  we satisfy the need that we intend to satisfy and to acquire our
                  first Customers. From this point and forward we focus on
                  improving the experience, acquire customer and growth.
                </p>
              </Column>
            </Columns>

            <Columns>
              <Column>
                <Title isSize={2} hasTextColor="black" className="mb-2">
                  <Icon size={32} icon={checkmark}/>
                  Software Development
                </Title>
                <Subtitle isSize={5}>
                  <strong>
                    We transform requirements into computer programs. We specialize
                    in building websites, web applications, and mobiles
                    applications.
                  </strong>
                </Subtitle>
                <p>
                  Software development is the process of conceiving, specifying,
                  designing, programming, documenting, testing, and bug fixing
                  involved in creating and maintaining applications, frameworks,
                  or other software components. Software development is a process
                  of writing and maintaining the source code, but in a broader
                  sense, it includes all that is involved between the conception
                  of the desired software through to the final manifestation of
                  the software, sometimes in a planned and structured process With
                  our streamlined, lean and phased Process we achieve incredible
                  results. Since day one, our technique is focused on early
                  results and transparent communication.
                </p>
              </Column>
            </Columns>

            <Columns>
              <Column>
                <Title isSize={2} hasTextColor="black" className="mb-2">
                  <Icon size={32} icon={checkmark}/> Training
                </Title>
                <Subtitle isSize={5}>
                  <strong>
                    With over 10 years of experience developing web and mobile applications with our agile techniques we can drive success to your Software Development Team.
                  </strong>
                </Subtitle>
                <p>
                  We provide training in the areas of:
                  <ul>
                    <li>- Scrum framework</li>
                    <li>- Continuous integration and Continuous Delivery for Web Development</li>
                    <li>- React and React Native development</li>
                    <li>- API design and development</li>
                  </ul>
                </p>
              </Column>
            </Columns>

            <Columns>
              <Column>
                <Title isSize={2} hasTextColor="black" className="mb-2">
                  <Icon size={32} icon={checkmark}/> Agile Project Management
                </Title>
                <Subtitle isSize={5}>
                  <strong>
                    Let our experience drive the success of your projects.
                  </strong>
                </Subtitle>
                <p>
                  Our senior's product managers and agile coaches work with you to build and deliver software
                  effectively. Your team would be transformed through education of the most appropriate agile techniques
                  and best practices
                </p>
              </Column>
            </Columns>
          </Container>
        </section>
      </Layout>
    );
  }
}

export default ServicesIndex;

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
