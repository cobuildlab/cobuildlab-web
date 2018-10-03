import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { navigate } from "gatsby";

import LayoutLanding from '../components/layoutLanding'
import FormContact from '../components/FormContact'
import 'bulma'


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
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      landingName: 'Cobuild Lab',
    };
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <LayoutLanding location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        {/*HEADER*/}
        <Hero className="is-fullheight">
          <HeroBody className="bg-header">
            <Container isFluid className="is-hidden-mobile">
              <Columns>
                <Column isSize="1/2">
                <Title className="title-logo">Cobuild Lab</Title>
                <Title className="subtitle-logo">
                  Thanks for contacting Us!
                </Title>
                  <a hasTextAlign='centered' className="button is-primary is-medium is-rounded">
                    READ MORE
                  </a>
                </Column>
                <Column isSize="1/2">
                  <FormContact/>
                </Column>
              </Columns>
            </Container>

            <Container isFluid className="is-hidden-desktop is-hidden-tablet-only">
              <Columns>
                <Column isSize="1/2">
                <Title className="title-logo-mobile" hasTextAlign='centered'>Cobuild Lab</Title>
                <Title className="subtitle-logo-mobile" hasTextAlign='centered'>
                  Thanks for contacting Us!
                </Title>
                  <a className="button is-primary is-small is-rounded">
                    READ MORE
                  </a>
                </Column>
                <Column isSize="1/2">
                  <FormContact/>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        {/*HEADER*/}
      </LayoutLanding>
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
            category
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
