import React from 'react'
import Helmet from 'react-helmet'
import LayoutPost from '../components/layoutPost'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import rehypeReact from 'rehype-react'
import { Hero, HeroBody, Container, Title, Columns, Column } from 'bloomer'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    title: Title,
    columns: Columns,
    column: Column,
  },
}).Compiler

export default () => (
  <StaticQuery
    query={graphql`
      query StoriesBySlug {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
        markdownRemark {
          id
          excerpt
          htmlAst
          frontmatter {
            title
          }
        }
      }
    `}
    render={post => (
      <LayoutPost>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: post.excerpt }]}
          title={`${post.frontmatter.title} | Cobuild Lab`}
        />

        <Hero isColor="black" isSize="medium">
          <HeroBody
            className="bg-post"
            style={{
              backgroundImage: `url(${post.frontmatter.image.publicURL})`,
            }}
          >
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title isSize={1} hasTextColor="white">
                    {post.frontmatter.title}
                  </Title>
                  <br />
                  <hr />
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>

        <section className="section">
          <Container>
            <Columns isCentered>
              <Column
                hasTextAlign="left"
                // dangerouslySetInnerHTML={{ __html: post.html }}
              >
                {renderAst(post.htmlAst)}
              </Column>
            </Columns>
            <Columns isCentered>
              <Column>
                <Img sizes={post.frontmatter.image.childImageSharp.fluid} />
              </Column>
            </Columns>
          </Container>
        </section>
      </LayoutPost>
    )}
  />
)

/* export const pageQuery = graphql`
  query StoriesBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      htmlAst
      frontmatter {
        title
      }
    }
  }
` */
