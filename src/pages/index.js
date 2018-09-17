import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import 'bulma';
import stories from '../resources/stories.png'
import marcelo from '../resources/marceloicigliani.jpg'
import angel from '../resources/anglelacret.jpg'
import alejandro from '../resources/alejandrosanchez.jpg'

import { Icon } from 'react-icons-kit'
import {check} from 'react-icons-kit/fa/check'
import {code} from 'react-icons-kit/fa/code'
import {ic_layers} from 'react-icons-kit/md/ic_layers'
import {slideshare} from 'react-icons-kit/fa/slideshare'
import {envelopeO} from 'react-icons-kit/fa/envelopeO'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'

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
  Media,
  MediaContent,
  MediaLeft,
  Field,
  Label,
  Control,
  Select,
  Input,
  TextArea,
  Checkbox,
  Button,
  Radio,
  Hero,
  HeroBody,
  } from 'bloomer';

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.8011732692985!2d-80.194957!3d25.773847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0x16e796cf8c581432!2s66+W+Flagler+St+%23900%2C+Miami%2C+FL+33130%2C+EE.+UU.!5e0!3m2!1ses!2sve!4v1537197642139" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {/* {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })} */}

        {/*HEADER*/}
        <Hero isSize='large'>
          <HeroBody className="bg-header">
          <Container>
            <Title className="title-logo">Cobuild Lab</Title>
            <Title className="subtitle-logo">Let’s Build a Great Idea</Title>
            <Columns>
              <Column isSize='1/2'>
              <Title isSize={6}>
                We help entrepreneurs create amazing Products with our streamlined, lean and phased <span style={{color: '#fff'}}>Software Development Process.</span> Since day one, our technique is focused on early results and transparent communication.
              </Title>
              <a className="button is-primary is-medium is-rounded">Read more</a>
              </Column>
            </Columns>
          </Container>
          </HeroBody>
        </Hero>
        {/*HEADER*/}
        
        {/*Section Cobuild Process*/}
        <section id="process" className="section">
          <Container hasTextAlign='centered'>
            <Title isSize={2} className="title-section">Cobuild Process</Title>
            <hr/>
            <Subtitle isSize={6}>Is the process of transforming an idea in a sustainable business, through the combination and collaboration of the areas of Lean <br/> Entrepreneurship, Business Strategy, Technological Innovation and Exponential Growth</Subtitle>
            <Columns isCentered className="p-2">
              <Column isSize='1/4'>
              <div className="icon-process">
                <Icon size="24" icon={check}/>
              </div>
              <Title isSize={4}>Validation</Title>
                <p>Plain and simple: Don't offer what people doesn't want. - Idea Validation: (Technical and Economical) - Market Validation: (Estimation and Competitors Analysis) - Value and Growth Hypothesis.</p>
              </Column>
              <Column isSize='1/4'>
              <div className="icon-process">
                <Icon size="24" icon={code}/>
              </div>
              <Title isSize={4}>CoBuilding</Title>
                <p>It's time to build!. In this phase we combine a multidisciplinary team to actually build the idea. - Prototyping - Customers Archetypes - Minimum Viable Product (MVP) - Live testing - A/B Testing - Product Market Fit - Value and Growth Hypothesis (Again)</p>
              </Column>
              <Column isSize='1/4'>
              <div className="icon-process">
                <Icon size="24" icon={ic_layers}/>
              </div>
              <Title isSize={4}>Close the Circle</Title>
                <p>A very important step. Here we make sure that the idea has every detail that is needed for been available to transform effectively: Identity, purpose, values, and the correct tools for launching are the main purpose of this step. - Branding - WebSite and Social Networks - Strategy</p>
              </Column>
              <Column isSize='1/4'>
              <div className="icon-process">
                <Icon size="24" icon={slideshare}/>
              </div>
              <Title isSize={4}>Aceleration</Title>
                <p>Congratulations! We have proved to have a sustainable business with a healthy growth rate. It's time to accelerate. At this point our business strategy and marketing strategy must be on the right track, so it's time to create High Impact. - Growth Hacking: Short-Term Exponential Growth</p>
              </Column>
            </Columns>
            <Columns isCentered>
            <Column><a className="button is-primary is-medium is-rounded"><small>Learn more</small></a></Column>
            </Columns>
          </Container>
        </section>
        {/*Section Cobuild Process*/}

        {/*Section Latest News*/}
          <section className="section">
          <Container hasTextAlign='centered'>
            <Title className="title-section">Latest News</Title>
            <Columns isCentered>
              <Column isSize='1/3'>
                <a>
                <Card className="link-card">
                  <CardImage>
                      <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
                  </CardImage>
                  <CardContent>
                    <Content>
                      <small>11:09 PM - 30 October 2014</small>
                      <br/>
                      <p>People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.</p>
                    </Content>
                  </CardContent>
                </Card>
                </a>
              </Column>
              <Column isSize='1/3'>
                <a>
                <Card className="link-card">
                  <CardImage>
                    <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
                  </CardImage>
                  <CardContent>
                    <Content>
                      <small>11:09 PM - 30 October 2014</small>
                      <br/>
                      <p>People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.</p>
                    </Content>
                  </CardContent>
                </Card>
                </a>
              </Column>
              <Column isSize='1/3'>
                <a>
                <Card className="link-card">
                  <CardImage>
                    <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
                  </CardImage>
                  <CardContent>
                    <Content>
                      <small>11:09 PM - 30 October 2014</small>
                      <br/>
                      <p>People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.</p>
                    </Content>
                  </CardContent>
                </Card>
                </a>
              </Column>
            </Columns>
          </Container>
          </section>
          {/*Section Latest News*/}

          {/*Section Customer Success Stories*/}
          <section className="section bg-section">
            <Container hasTextAlign='centered'>
              <Title className="title-section">Customer Success Stories</Title>
              <Columns isCentered>
                <Column isSize='1/3'>
                  <Card className="link-card">
                    <Content>
                      <img src={stories} />
                    </Content>
                  </Card>
                </Column>
              </Columns>
            </Container>
          </section>
          <section className="section">
          <Container hasTextAlign='centered'>
            <Title className="title-section">Our Team</Title>
            <Columns isCentered>
              <Column isSize='1/3'>
                <Card>
                  <a>
                  <CardImage>
                    <Image isRatio='4:8' src={marcelo} />
                  </CardImage>
                  </a>
                </Card>
                <Content>
                  <br/>
                  <small>Co-founded Startups in Venezuela, Ecuador y USA: Vikua, <br/> 4Geeks Academy, Siplik, Hack, InTraffic.</small>
                  <p>
                    <br/>
                    <Icon size="18" icon={envelopeO}/>
                    <a className="icon-link" href="https://www.linkedin.com/in/marcelo-ricigliano-32440379" target="_blank"><Icon size="18" icon={linkedinSquare}/></a>
                  </p>
                </Content>
              </Column>
              <Column isSize='1/3'>
                <Card>
                  <a>
                  <CardImage>
                    <Image isRatio='4:8' src={angel} />
                  </CardImage>
                  </a>
                </Card>
                <Content>
                  <br/>
                  <small>Technical Product Owner and Software Developer</small>
                  <p>
                    <br/>
                    <Icon size="18" icon={envelopeO}/>
                    <a className="icon-link" href="https://www.linkedin.com/in/alacret/" target="_blank"><Icon size="18" icon={linkedinSquare}/></a>
                  </p>
                </Content>
              </Column>
              <Column isSize='1/3'>
                <Card>
                  <a>
                  <CardImage>
                    <Image isRatio='4:8' src={alejandro} />
                  </CardImage>
                  </a>
                </Card>
                <Content>
                  <br/>
                  <small>I'm a computer engineer with all my life dedicated to the coding industry through several initiatives.</small>
                  <p>
                    <br/>
                    <Icon size="18" icon={envelopeO}/>
                    <a className="icon-link" href="https://www.linkedin.com/in/alesanchezr/" target="_blank"><Icon size="18" icon={linkedinSquare}/></a>
                  </p>
                </Content>
              </Column>
            </Columns>
          </Container>
          </section>
          {/*Section Customer Success Stories*/}

          {/*Section Where we are? and Write Us! */}
          <section className="section bg-section">
            <Container>
              <Columns isCentered>
                <Column className="p-f" isSize='1/2'>
                <Title className="title-section" hasTextAlign='left'>Where we are?</Title>
                  <Card>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.8011732692985!2d-80.194957!3d25.773847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0x16e796cf8c581432!2s66+W+Flagler+St+%23900%2C+Miami%2C+FL+33130%2C+EE.+UU.!5e0!3m2!1ses!2sve!4v1537197642139" width="600" height="450" frameBorder="0" style={{border: 0, width: '100%'}} allowFullScreen></iframe>
                  </Card>
                </Column>
                <Column className="p-f" isSize='1/2'>
                <Title className="title-section" hasTextAlign='left'>Write Us!</Title>
                  <Content isSize='small'>
                  Your business takes off right now
                  </Content>
                  <Columns>
                  <Column isSize='1/2'>
                    <Field>
                      <Label>Name</Label>
                      <Control>
                          <Input type="text" placeholder='Name'/>
                      </Control>
                    </Field>
                  </Column>
                  <Column isSize='1/2'>
                    <Field>
                      <Label>Last Name</Label>
                      <Control>
                          <Input type="text" placeholder='Last Name'/>
                      </Control>
                    </Field>
                  </Column>
                  </Columns>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                        <Input type="text" placeholder='Last Name'/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Comment or Message</Label>
                    <Control>
                        <TextArea placeholder={''} />
                    </Control>
                  </Field>
                  <Field isGrouped>
                    <Control>
                      <a className="button is-primary is-medium is-rounded">Submit</a>
                    </Control>
                  </Field>
                  <Content hasTextAlign='centered'>
                    <Subtitle>
                      Privacy Policy
                    </Subtitle>
                    <a>Here you can access the information about how we treat your data.</a>
                  </Content>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
