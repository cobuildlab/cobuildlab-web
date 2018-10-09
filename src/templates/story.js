import React from 'react'
import Helmet from 'react-helmet'
import LayoutPost from '../components/layoutPost'
import { Link, graphql } from 'gatsby'
import Share from '../components/Share'
import Title2 from '../components/Title2'
import Carousel from '../components/Carousel'
import Title3 from '../components/Title3'
import Title4 from '../components/Title4'
import Title5 from '../components/Title5'
import Title6 from '../components/Title6'
import BlockQuote from '../components/BlockQuote'
import ImagePost from '../components/ImagePost'
import Credits from '../components/Credits'
import get from 'lodash/get'
import defaultImg from '../resources/default-post.jpg'
import rehypeReact from 'rehype-react'
import { Hero, HeroBody, Container, Title, Columns, Column } from 'bloomer'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'title-2': Title2,
    'title-3': Title3,
    'title-4': Title4,
    'title-5': Title5,
    'title-6': Title6,
    'block-quote': BlockQuote,
    credits: Credits,
    carousel: Carousel,
  },
}).Compiler

class StoryTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const twitterHandle = get(
      this.props,
      'data.site.siteMetadata.twitterHandle'
    )
    const slug = post.fields.slug
    const url = get(this.props, 'data.site.siteMetadata.siteUrl')
    const siteTitle = 'Cobuild Lab'
    const siteDescription = post.excerpt
    const image = get(post, 'frontmatter.image.publicURL') || defaultImg

    return (
      <LayoutPost>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <Hero isColor="white" isSize="large">
          <Container hasTextAlign="centered">
            <Title tag="h3" isSize={1} hasTextColor="Black">
              {post.frontmatter.title}
            </Title>
            <br />
            <hr />
          </Container>
          <HeroBody
            className="bg-post"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </Hero>

        <section id="section-post" className="section">
          <Container>
            <Columns isCentered>
              <Column hasTextAlign="left">{renderAst(post.htmlAst)}</Column>
            </Columns>

            <Share
              socialConfig={{
                twitterHandle,
                config: {
                  url: `${url}/${slug}`,
                  title: `${siteTitle}`,
                },
              }}
            />
          </Container>
        </section>
      </LayoutPost>
    )
  }
}

export default StoryTemplate

export const pageQuery = graphql`
  query StoryBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
        twitterHandle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      htmlAst
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
