import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.min.css'
import '../assets/prism.css'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import 'bulma'
import '../assets/fonts/Lato-Black.ttf'
import '../assets/fonts/Lato-BlackItalic.ttf'
import '../assets/fonts/Lato-Bold.ttf'
import '../assets/fonts/Lato-BoldItalic.ttf'
import '../assets/fonts/Lato-Hairline.ttf'
import '../assets/fonts/Lato-HairlineItalic.ttf'
import '../assets/fonts/Lato-Italic.ttf'
import '../assets/fonts/Lato-Light.ttf'
import '../assets/fonts/Lato-LightItalic.ttf'
import '../assets/fonts/Lato-Regular.ttf'
import 'react-modal-video/scss/modal-video.scss'
import marcelo from '../resources/marceloicigliani.jpg'
import angel from '../resources/anglelacret.jpg'
import alejandro from '../resources/alejandrosanchez.jpg'
import defaultImg from '../resources/default-post.jpg'

import { Icon } from 'react-icons-kit'
import { check } from 'react-icons-kit/fa/check'
import { code } from 'react-icons-kit/fa/code'
import { ic_layers } from 'react-icons-kit/md/ic_layers'
import { slideshare } from 'react-icons-kit/fa/slideshare'
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare'
import { clockO } from 'react-icons-kit/fa/clockO'
import { commentingO } from 'react-icons-kit/fa/commentingO'
import { play } from 'react-icons-kit/fa/play'
import comic from '../resources/icons/comic.svg'
import { H2Blue } from '../components/text/H2Blue'
import { H3Blue } from '../components/text/H3Blue'
import { H1Blue } from '../components/text/H1Blue'
import { H4Blue } from '../components/text/H4Blue'

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
  Hero,
  HeroBody,
} from 'bloomer'
import ModalVideo from 'react-modal-video'
import * as PropTypes from 'prop-types'
// import NewsletterModal from '../components/NewsletterModal'

function ReadMore(props) {
  return (
    <Columns>
      <Column isSize="1/2">
        <Link
          className="button is-primary is-medium is-rounded"
          to="#"
          onClick={props.onClick}
        >
          <Icon size="26" icon={play} /> &nbsp; VIDEO &nbsp;
        </Link>
      </Column>
      <Column isSize="1/2">
        <Link
          className="button is-primary is-medium is-rounded"
          target="_blank"
          to="/blog/best-software-development-process/"
        >
          READ MORE
        </Link>
      </Column>
    </Columns>
  )
}

ReadMore.propTypes = { onClick: PropTypes.func }

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showVideoModal: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({
      showVideoModal: true,
    })
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const customerSuccessStories = get(
      this,
      'props.data.customerSuccessStories.edges'
    )
    const siteKey = process.env.RECAPTCHA_SITEKEY

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        {/* FIXME: Newsletter Modal */}
        {/* <NewsletterModal /> */}

        {/*HEADER*/}
        <Hero isSize="large">
          <HeroBody
            className="bg-header"
            style={{ paddingTop: '2rem', paddingBottom: '11rem' }}
          >
            <Container isFluid className="is-hidden-mobile no-margin">
              <Columns>
                <Column isSize="1/2">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <H3Blue>Software Development Company</H3Blue>
                  <H1Blue>
                    Let’s <span className={'orange-text'}>Build</span> a Great{' '}
                    <span className={'orange-text'}>Idea.</span>
                  </H1Blue>
                  <H4Blue>
                    We partner with new and early-stage non-technical
                    entrepreneurs and industry experts to transforms ideas into{' '}
                    <span className={'orange-text'}>
                      Web and Mobile Software Products.
                    </span>
                    <br />
                    <br />
                    Since day one, our technique is focused on early results and
                    transparent communication.
                  </H4Blue>
                  <ReadMore onClick={this.openModal} />
                </Column>
                <Column isSize="1/2">
                  <br />
                  <br />
                  <img
                    alt={'main comic'}
                    src={comic}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Column>
              </Columns>
            </Container>

            <Container
              isFluid
              className="is-hidden-desktop is-hidden-tablet-only no-margin"
              hasTextAlign="centered"
            >
              <H4Blue>Software Development Company</H4Blue>
              <img
                alt={'main comic'}
                src={comic}
                style={{ width: '85%', height: 'auto' }}
              />
              <H2Blue>
                Let’s <span className={'orange-text'}>Build</span> a Great{' '}
                <span className={'orange-text'}>Idea.</span>
              </H2Blue>
              <Columns>
                <Column isSize="1/2">
                  <H4Blue>
                    We partner with new and early-stage non-technical
                    entrepreneurs and industry experts to transforms ideas into{' '}
                    <span className={'orange-text'}>
                      Web and Mobile Software Products.
                    </span>
                    <br />
                    <br />
                    Since day one, our technique is focused on early results and
                    transparent communication.
                  </H4Blue>
                  <ReadMore onClick={this.openModal} />
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
              Is the process of transforming an idea in a sustainable business,
              through the combination and collaboration of the areas of Lean{' '}
              <br /> Entrepreneurship, Business Strategy, Technological
              Innovation and Exponential Growth
            </Subtitle>
            <Columns isCentered className="p-2">
              <Column isSize="1/5">
                <div className="icon-process">
                  <Icon size="24" icon={commentingO} className="icon-center" />
                </div>
                <Title isSize={3}>Think</Title>
                <p>
                  Problem-solution fit: Observe the Customer, think as the
                  Customer, be the Customer.
                </p>
              </Column>
              <Column isSize="1/5">
                <div className="icon-process">
                  <Icon size="24" icon={check} className="icon-center" />
                </div>
                <Title isSize={3}>Validate</Title>
                <p>
                  Plain and simple: Don't offer what people doesn't want. - Idea
                  Validation: Technical and Economical - Market Validation:
                  Estimation and Competitors Analysis - Value and Growth
                  Hypothesis.
                </p>
              </Column>
              <Column isSize="1/5">
                <div className="icon-process">
                  <Icon size="24" icon={code} className="icon-center" />
                </div>
                <Title isSize={3}>CoBuild</Title>
                <p>
                  It's time to build!. We combine a multidisciplinary team to
                  build the idea. Minimum Viable Product (MVP)
                </p>
              </Column>
              <Column isSize="1/5">
                <div className="icon-process">
                  <Icon size="24" icon={ic_layers} className="icon-center" />
                </div>
                <Title isSize={3}>Plan</Title>
                <p>
                  Identity, purpose, values, and the correct tools for launching
                  are the main purpose of this step. - Branding - WebSite and
                  Social Networks - Strategy
                </p>
              </Column>
              <Column isSize="1/5">
                <div className="icon-process">
                  <Icon size="24" icon={slideshare} className="icon-center" />
                </div>
                <Title isSize={3}>Accelerate</Title>
                <p>
                  Congratulations! We have proved to have a sustainable business
                  with a healthy growth rate. It's time to accelerate.
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
                const title = get(node, 'frontmatter.title') || node.fields.slug
                const image =
                  get(node, 'frontmatter.image.publicURL') || defaultImg
                return (
                  <Column isSize="1/3" key={node.fields.slug}>
                    <Link to={node.fields.slug}>
                      <Card className="card-p">
                        <CardImage className="card-post">
                          <Image
                            isRatio="4:8"
                            src={image}
                            className="card-post"
                          />
                          <Content className="title-post">
                            <small>
                              {' '}
                              <Icon
                                icon={clockO}
                                style={{ paddingTop: 5 }}
                              />{' '}
                              {node.frontmatter.date}
                            </small>
                            <Subtitle hasTextColor="white">{title}</Subtitle>
                          </Content>
                        </CardImage>
                      </Card>
                    </Link>
                  </Column>
                )
              })}
            </Columns>
          </Container>
        </section>
        {/*Section Latest News*/}

        {/*Section Latest News*/}
        <section className="section">
          <Container hasTextAlign="centered">
            <Link to="/customer-success-stories">
              <Title className="title-section">Customer Success Stories</Title>
            </Link>
            <Columns isCentered>
              {customerSuccessStories.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                const image =
                  get(node, 'frontmatter.image.publicURL') || defaultImg
                return (
                  <Column isSize="1/3" key={node.fields.slug}>
                    <Link to={node.fields.slug}>
                      <CardImage>
                        <Image isRatio="4:8" src={image} />
                        <Content className="title-post">
                          <small>
                            {' '}
                            <Icon
                              icon={clockO}
                              style={{ paddingTop: 5 }}
                            />{' '}
                            {node.frontmatter.date}
                          </small>
                          <Subtitle hasTextColor="white">{title}</Subtitle>
                        </Content>
                      </CardImage>
                    </Link>
                  </Column>
                )
              })}
            </Columns>
          </Container>
        </section>
        {/*Section Latest News*/}

        <section className="section">
          <Container hasTextAlign="centered">
            <Title isSize={2} className="title-section">
              Our Team
            </Title>
            <Columns isCentered>
              <Column isSize="1/3">
                <Card>
                  <a
                    href="https://www.linkedin.com/in/marcelo-ricigliano-32440379"
                    target="_blank"
                  >
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
                    Co-founded Startups in Venezuela, Ecuador y USA: Vikua,{' '}
                    <br /> 4Geeks Academy, Siplik, Hack, InTraffic.
                  </small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/marcelo-ricigliano-32440379"
                    target="_blank"
                  >
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <a
                    href="https://www.linkedin.com/in/alacret/"
                    target="_blank"
                  >
                    <CardImage>
                      <Image isRatio="4:8" src={angel} />
                      <p className="name-team">
                        Angel Lacret <br /> Chief of Product Development at
                        Cobuild Lab
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
                    target="_blank"
                  >
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Card>
                  <a
                    href="https://www.linkedin.com/in/alesanchezr/"
                    target="_blank"
                  >
                    <CardImage>
                      <Image isRatio="4:8" src={alejandro} />
                      <p className="name-team">
                        Alejandro Sanchez <br /> CEO of 4Geeks Academy. Software
                        Developer and Data-Oriented Marketeer
                      </p>
                    </CardImage>
                  </a>
                </Card>
                <Content>
                  <br />
                  <small>
                    I'm a computer engineer with all my life dedicated to the
                    coding industry through several initiatives.
                  </small>
                  <br />
                  <Icon size="18" icon={envelopeO} />
                  <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/alesanchezr/"
                    target="_blank"
                  >
                    <Icon size="18" icon={linkedinSquare} />
                  </a>
                </Content>
              </Column>
            </Columns>
          </Container>
        </section>
        {/*Section Customer Success Stories*/}

        {/*Section Where we are? and Write Us! */}
        <Contact siteKey={siteKey} />

        {/*Video*/}
        <ModalVideo
          channel="youtube"
          autoplay={this.state.showVideoModal}
          isOpen={this.state.showVideoModal}
          videoId="AlU5h2xrQ5M"
          onClose={() => this.setState({ showVideoModal: false })}
        />
      </Layout>
    )
  }
}

export default Index

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
      filter: {fileAbsolutePath: {regex: "/(pages/blog)/.*\\.md$/"}}
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
    customerSuccessStories:allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: {fileAbsolutePath: {regex: "/(pages/customer-success-stories)/.*\\.md$/"}}
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
`
