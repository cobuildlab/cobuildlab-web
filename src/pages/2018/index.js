import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import 'react-toastify/dist/ReactToastify.min.css';

import Layout from './components/layout';
import Contact from './components/Contact';
import 'bulma';
import './assets/fonts/Lato-Black.ttf';
import './assets/fonts/Lato-BlackItalic.ttf';
import './assets/fonts/Lato-Bold.ttf';
import './assets/fonts/Lato-BoldItalic.ttf';
import './assets/fonts/Lato-Hairline.ttf';
import './assets/fonts/Lato-HairlineItalic.ttf';
import './assets/fonts/Lato-Italic.ttf';
import './assets/fonts/Lato-Light.ttf';
import './assets/fonts/Lato-LightItalic.ttf';
import './assets/fonts/Lato-Regular.ttf';

import propagadImg from './customer-success-stories/media/5-1280x1080p-1024x864.png';
import academyImg from './customer-success-stories/media/fondo-2-1024x511nuew.jpg';
import paykleverImg from './customer-success-stories/media/payklever-cover.jpg';
import marcelo from './resources/marceloicigliani.jpg';
import angel from './resources/anglelacret.jpg';
import alejandro from './resources/alejandrosanchez.jpg';
import defaultImg from './resources/default-post.jpg';

import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/check';
import { code } from 'react-icons-kit/fa/code';
import { ic_layers } from 'react-icons-kit/md/ic_layers';
import { slideshare } from 'react-icons-kit/fa/slideshare';
import { envelopeO } from 'react-icons-kit/fa/envelopeO';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { clockO } from 'react-icons-kit/fa/clockO';

import {
  Container,
  Title,
  Subtitle,
  Column,
  Columns,
  Card,
  CardImage,
  Image,
  Content,
  CardContent,
  Hero,
  HeroBody,
  Tag,
} from 'bloomer';

class Backup extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            {
              name: 'description',
              content:
                'We help entrepreneurs create amazing Products with our streamlined, lean and phased Software Development Process. Since day one, our technique is focused on early results and transparent communication.',
            },
          ]}
          title={'Cobuild Lab | Miami Accelerator'}
        />
        {/*HEADER*/}
        <Hero isSize="large">
          <HeroBody className="bg-header-backup">
            <Container isFluid className="is-hidden-mobile">
              <Title className="title-logo-backup">Cobuild Lab</Title>
              <Title className="subtitle-logo-backup">Let’s Build a Great Idea</Title>
              <Columns>
                <Column isSize="1/2">
                  <Title isSize={4}>
                    We help entrepreneurs create amazing Products with our streamlined, lean and
                    phased <span style={{ color: '#fff' }}>Software Development Process.</span>{' '}
                    Since day one, our technique is focused on early results and transparent
                    communication.
                  </Title>
                  <Link
                    className="button is-primary is-medium is-rounded"
                    target="_blank"
                    to="/blog/best-software-development-process/">
                    READ MORE
                  </Link>
                </Column>
              </Columns>
            </Container>

            <Container isFluid className="is-hidden-desktop is-hidden-tablet-only">
              <Title className="title-logo-mobile">Cobuild Lab</Title>
              <Title className="subtitle-logo-mobile">Let’s Build a Great Idea</Title>
              <Columns>
                <Column isSize="1/2">
                  <Title isSize={6}>
                    We help entrepreneurs create amazing Products with our streamlined, lean and
                    phased <span style={{ color: '#fff' }}>Software Development Process.</span>{' '}
                    Since day one, our technique is focused on early results and transparent
                    communication.
                  </Title>
                  <Link className="button is-primary is-small is-rounded" to="#">
                    READ MORE
                  </Link>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        {/*HEADER*/}

        {/*Section Cobuild Process*/}
        <section id="process" className="section">
          <Container hasTextAlign="centered">
            <Title isSize={2} className="title-section">
              Cobuild Process
            </Title>
            <hr />
            <Subtitle isSize={6}>
              Is the process of transforming an idea in a sustainable business, through the
              combination and collaboration of the areas of Lean <br /> Entrepreneurship, Business
              Strategy, Technological Innovation and Exponential Growth
            </Subtitle>
            <Columns isCentered className="p-2">
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={check} className="icon-center" />
                </div>
                <Title isSize={3}>Validation</Title>
                <p>
                  Plain and simple: Don't offer what people doesn't want. - Idea Validation:
                  (Technical and Economical) - Market Validation: (Estimation and Competitors
                  Analysis) - Value and Growth Hypothesis.
                </p>
              </Column>
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={code} className="icon-center" />
                </div>
                <Title isSize={3}>CoBuild</Title>
                <p>
                  It's time to build!. In this phase we combine a multidisciplinary team to actually
                  build the idea. - Prototyping - Customers Archetypes - Minimum Viable Product
                  (MVP) - Live testing - A/B Testing - Product Market Fit - Value and Growth
                  Hypothesis (Again)
                </p>
              </Column>
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={ic_layers} className="icon-center" />
                </div>
                <Title isSize={3}>Plan</Title>
                <p>
                  A very important step. Here we make sure that the idea has every detail that is
                  needed for been available to transform effectively: Identity, purpose, values, and
                  the correct tools for launching are the main purpose of this step. - Branding -
                  WebSite and Social Networks - Strategy
                </p>
              </Column>
              <Column isSize="1/4">
                <div className="icon-process">
                  <Icon size="24" icon={slideshare} className="icon-center" />
                </div>
                <Title isSize={3}>Accelerate</Title>
                <p>
                  Congratulations! We have proved to have a sustainable business with a healthy
                  growth rate. It's time to accelerate. At this point our business strategy and
                  marketing strategy must be on the right track, so it's time to create High Impact.
                  - Growth Hacking: Short-Term Exponential Growth
                </p>
              </Column>
            </Columns>
          </Container>
        </section>
        {/*Section Cobuild Process*/}

        {/*Section Latest News*/}
        <section className="section">
          <Container hasTextAlign="centered">
            <Title isSize={2} className="title-section">
              Latest News
            </Title>
            <Columns isCentered>
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug;
                const image = get(node, 'frontmatter.image.publicURL') || defaultImg;
                return (
                  <Column isSize="1/3" key={node.fields.slug}>
                    <Link to={node.fields.slug}>
                      <Card className="card-p">
                        <CardContent
                          className="card-post"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        />
                        <Content className="title-post">
                          <small>
                            {' '}
                            <Icon icon={clockO} style={{ paddingTop: 5 }} /> {node.frontmatter.date}
                          </small>
                          <Subtitle hasTextColor="white">{title}</Subtitle>
                        </Content>
                      </Card>
                    </Link>
                  </Column>
                );
              })}
            </Columns>
          </Container>
        </section>
        {/*Section Latest News*/}

        {/*Section Customer Success Stories*/}
        <section className="section bg-section">
          <Container hasTextAlign="centered">
            <Link to="/customer-success-stories">
              <Title className="title-section">Customer Success Stories</Title>
            </Link>
            <Columns isCentered>
              <Column isSize="1/3">
                <Card>
                  <Link to="/customer-success-stories/propagad">
                    <CardImage>
                      <Image isRatio="4:8" src={propagadImg} />
                      <p className="name-team">
                        <strong>PROPAGAD</strong>
                      </p>
                    </CardImage>
                  </Link>
                </Card>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <Link to="/customer-success-stories/4geeks-academy">
                    <CardImage>
                      <Image isRatio="4:8" src={academyImg} />
                      <p className="name-team">
                        <strong>4Geeks Academy</strong>
                      </p>
                    </CardImage>
                  </Link>
                </Card>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <Link to="/customer-success-stories/payklever-campaign-manager">
                    <CardImage>
                      <Image isRatio="4:8" src={paykleverImg} />
                      <p className="name-team">
                        <strong>Payklever Campaign Manager</strong>
                      </p>
                    </CardImage>
                  </Link>
                </Card>
              </Column>
            </Columns>
          </Container>
        </section>
        {/*Section Customer Success Stories*/}

        <section className="section">
          <Container hasTextAlign="centered">
            <Title isSize={2} className="title-section">
              Our Team
            </Title>
            <Columns isCentered>
              <Column isSize="1/3">
                <Card>
                  <a href="https://www.linkedin.com/in/marcelo-ricigliano-32440379" target="_blank">
                    <CardImage>
                      <Image isRatio="4:8" src={marcelo} />
                      <p className="name-team">
                        Marcelo Ricigliano <br /> COO at 4Geeks Academy
                      </p>
                    </CardImage>
                  </a>
                </Card>
                <Content>
                  <br />
                  <small>
                    Co-founded Startups in Venezuela, Ecuador y USA: Vikua, <br /> 4Geeks Academy,
                    Siplik, Hack, InTraffic.
                  </small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/marcelo-ricigliano-32440379"
                    target="_blank">
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <a href="https://www.linkedin.com/in/alacret/" target="_blank">
                    <CardImage>
                      <Image isRatio="4:8" src={angel} />
                      <p className="name-team">
                        Angel Lacret <br /> Chief of Product Development at Cobuild Lab
                      </p>
                    </CardImage>
                  </a>
                </Card>
                <Content>
                  <br />
                  <small>Technical Product Owner and Software Developer</small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/alacret/"
                    target="_blank">
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <a href="https://www.linkedin.com/in/alesanchezr/" target="_blank">
                    <CardImage>
                      <Image isRatio="4:8" src={alejandro} />
                      <p className="name-team">
                        Alejandro Sanchez <br /> CEO of 4Geeks Academy. Software Developer and
                        Data-Oriented Marketeer
                      </p>
                    </CardImage>
                  </a>
                </Card>
                <Content>
                  <br />
                  <small>
                    I'm a computer engineer with all my life dedicated to the coding industry
                    through several initiatives.
                  </small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/alesanchezr/"
                    target="_blank">
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
            </Columns>
          </Container>
        </section>
        {/*Section Customer Success Stories*/}

        {/*Section Where we are? and Write Us! */}
        <Contact />
      </Layout>
    );
  }
}

export default Backup;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 480) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
/* <Columns isCentered>
    <Column>
      <Link className="button is-primary is-medium is-rounded">
        <small>Learn more</small>
      </Link>
    </Column>
  </Columns> */
