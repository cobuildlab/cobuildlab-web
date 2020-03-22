import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { 
  HeroHeader, 
  HeroBody, 
  Hero,
  Section 
} from 'bloomer';

import 'react-toastify/dist/ReactToastify.min.css'
import 'react-modal-video/scss/modal-video.scss'
import 'bulma'

import Layout from '@2020/components/Layout'
import Header from '@2020/components/Layout/Header';
import HeroBodyContent from '@2020/components/Hero';
import Service from '@2020/components/Service';


export default class HomePage extends React.Component {
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
        <Hero>
          <HeroHeader>
            <Header />
          </HeroHeader>
          <HeroBody>
            <HeroBodyContent />
          </HeroBody>
        </Hero>
        <Section>
          <Service />
        </Section>
      </Layout>
    )
  }
}

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
