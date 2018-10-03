import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import 'bulma'
import stories from '../resources/stories.png'
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
  Field,
  Label,
  Control,
  Input,
  TextArea,
  Hero,
  HeroBody,
  Tag,
} from 'bloomer'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      landingName: 'Cobuild Lab',
    }
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        {/*HEADER*/}
        <Hero isSize="large">
          <HeroBody className="bg-header">
            <Container isFluid className="is-hidden-mobile">
              <Title className="title-logo">Cobuild Lab</Title>
              <Title className="subtitle-logo">Thanks for Subscribing!</Title>
              <Columns>
                <Column isSize="1/2">
                  <a className="button is-primary is-medium is-rounded">
                    READ MORE
                  </a>
                </Column>
              </Columns>
            </Container>

            <Container
              isFluid
              className="is-hidden-desktop is-hidden-tablet-only"
            >
              <Title className="title-logo-mobile">Cobuild Lab</Title>
              <Title className="subtitle-logo-mobile">
                Thanks for Subscribing!
              </Title>
              <Columns>
                <Column isSize="1/2">
                  <a className="button is-primary is-small is-rounded">
                    READ MORE
                  </a>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        {/*HEADER*/}

        {/*Section Where we are? and Write Us! */}
        <section id="contact" className="section bg-section">
          <Container>
            <Columns isCentered>
              <Column className="p-f" isSize="1/2">
                <Title isSize={2} className="title-section" hasTextAlign="left">
                  Where we are?
                </Title>
                <Card>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.8011732692985!2d-80.194957!3d25.773847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0x16e796cf8c581432!2s66+W+Flagler+St+%23900%2C+Miami%2C+FL+33130%2C+EE.+UU.!5e0!3m2!1ses!2sve!4v1537197642139"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0, width: '100%' }}
                    allowFullScreen
                  />
                </Card>
              </Column>
              <Column className="p-f" isSize="1/2">
                <Title isSize={2} className="title-section" hasTextAlign="left">
                  Write Us!
                </Title>
                <Content isSize="small">
                  Your business takes off right now
                </Content>
                <form onSubmit={e => this.onSubmit(e)}>
                  <Columns>
                    <Column isSize="1/2">
                      <Field>
                        <Label>First Name</Label>
                        <Control>
                          <Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={e => this.handleChange(e)}
                          />
                        </Control>
                      </Field>
                    </Column>
                    <Column isSize="1/2">
                      <Field>
                        <Label>Last Name</Label>
                        <Control>
                          <Input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={e => this.handleChange(e)}
                          />
                        </Control>
                      </Field>
                    </Column>
                  </Columns>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Comment or Message</Label>
                    <Control>
                      <TextArea
                        name="comment"
                        placeholder="Your message or comment goes here"
                        value={this.state.comment}
                        onChange={e => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field isGrouped>
                    <Control>
                      <button
                        className="button is-primary is-medium is-rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </Control>
                  </Field>
                  <Content hasTextAlign="centered">
                    <Subtitle>Privacy Policy</Subtitle>
                    <Link to="/privacy-policy">
                      Here you can access the information about how we treat
                      your data.
                    </Link>
                  </Content>
                </form>
              </Column>
            </Columns>
          </Container>
        </section>
        {/*Section Where we are? and Write Us! */}
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
