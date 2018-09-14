import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import 'bulma';
import bg from '../resources/background-1.png'
import { Container, Title, Column, Columns, Notification  } from 'bloomer';

class Index extends React.Component {
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
        <section className="hero is-white is-large">
          <div className="hero-body" style={{
                backgroundImage: `url(${bg})`,
                width: '100%',
                height: 'auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                }}>
            <div className="container">
              <h1 className="title">
                Cobuild Lab <br/>
                Let’s Build a Great Idea
              </h1>
              <h2 className="subtitle">
              We help entrepreneurs create amazing Products with our streamlined, lean and phased Software Development Process. Since day one, our technique is focused on early results and transparent communication.
              </h2>
              <a className="button is-primary is-medium is-rounded">READ MORE</a>
            </div>
          </div>
        </section>

          <section className="section">
          <Container hasTextAlign='centered'>
              <Title>Cobuild Process</Title>
              <Title isSize={6}>Is the process of transforming an idea in a sustainable business, through the combination and collaboration of the areas of Lean <br/> Entrepreneurship, Business Strategy, Technological Innovation and Exponential Growth</Title>
              <Columns isCentered>
                <Column isSize='1/4'>
                <Title>Validation</Title>
                </Column>
                <Column isSize='1/4'>
                <Title>CoBuilding</Title>
                </Column>
                <Column isSize='1/4'>
                <Title>Close the Circle</Title>
                </Column>
                <Column isSize='1/4'>
                <Title>Aceleration</Title>
                </Column>
            </Columns>

          </Container>
          </section>
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
