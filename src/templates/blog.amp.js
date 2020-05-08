import React from 'react';
import LayoutPost from '../components/layoutPost';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import SeoMetaTags from '../components/SeoMetaTags';
import BlogPostContactUs from '../components/blog-post/BlogPostContactUs';
import Share from '../components/Share';
import Carousel from '../components/Carousel';
import Title2 from '../components/Title2';
import Title3 from '../components/Title3';
import Title4 from '../components/Title4';
import Title5 from '../components/Title5';
import Title6 from '../components/Title6';
import YouTubeVideo from '../components/YouTubeVideo';
import BlockQuote from '../components/BlockQuote';
import Banner from '../components/Banner';
import Credits from '../components/Credits';
import get from 'lodash/get';
import defaultImg from '../resources/default-post.jpg';
import rehypeReact from 'rehype-react';
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
import { Hero, Container, Title, Columns, Column, Card, CardContent, Content } from 'bloomer';
import TTSVoice from '../components/TTSVoice';
import PropTypes from 'prop-types';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'title-2': Title2,
    'title-3': Title3,
    'title-4': Title4,
    'title-5': Title5,
    'title-6': Title6,
    'block-quote': BlockQuote,
    'youtube-video': YouTubeVideo,
    banner: Banner,
    credits: Credits,
    carousel: Carousel,
    'contact-us': BlogPostContactUs,
  },
}).Compiler;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const twitterHandle = get(this.props, 'data.site.siteMetadata.twitterHandle');
    const disqusShortname = 'cobuildlab';
    const disqusConfig = { identifier: post.id, title: post.frontmatter.title };
    const slug = post.fields.slug;
    const url = get(this.props, 'data.site.siteMetadata.siteUrl');
    const siteTitle = 'Cobuild Lab';
    const siteDescription = post.excerpt;
    const { previous, next, slug: origanlPath } = this.props.pageContext;
    const previousImage = get(previous, 'frontmatter.image.publicURL') || defaultImg;
    const nextImage = get(next, 'frontmatter.image.publicURL') || defaultImg;

    const imageAmp = post.frontmatter.image.childImageSharp;
    const seoImages = get(this, 'props.data.seoImages.frontmatter.image.childImageSharp.resize');

    return (
      <LayoutPost>
        <SeoMetaTags
          title={post.frontmatter.title}
          description={siteDescription}
          image={seoImages}
          canonical={origanlPath}
        />
        <Hero isColor="white" isSize="large">
          <Container hasTextAlign="centered">
            <Title tag="h3" isSize={1} hasTextColor="Black">
              {post.frontmatter.title}
            </Title>
            <br />
            <hr />
          </Container>
          {/* WITH GATSBY ALWAYS USE <IMG fluid={}>
            Because it handles the device size img for you*/}
          {/* <HeroBody
            className="bg-post"
            style={{
              backgroundImage: `url(${image})`
            }}
          /> */}
          {/*<Img className="bg-post" fluid={post.frontmatter.image.childImageSharp.fluid}/>*/}
          <amp-img
            src-set={imageAmp.srcSet}
            src={imageAmp.src}
            width={imageAmp.width}
            height={imageAmp.height}
            alt={post.frontmatter.title}
            layout="responsive"
          />
        </Hero>

        <section id="section-post" className="section">
          <Container>
            <Columns isCentered>
              <Column hasTextAlign="left">{renderAst(post.htmlAst)}</Column>
            </Columns>
            <TTSVoice text={post.rawMarkdownBody} />
            <Share
              socialConfig={{
                twitterHandle,
                config: {
                  url: `${url}/${slug}`,
                  title: `${siteTitle}`,
                },
              }}
            />

            <Columns style={{ marginTop: 30 }} isCentered>
              <Column hasTextAlign="centered">
                <Title tag="h6" isSize={3}>
                  READ MORE
                </Title>
              </Column>
            </Columns>

            <Columns isCentered>
              {previous ? (
                <Column isSize="1/3">
                  <Title tag="h6" isSize={5} hasTextColor="Black" hasTextAlign="centered">
                    Previous Post
                  </Title>
                  <Link to={previous.fields.slug} rel="prev">
                    <Card className="card-p">
                      <CardContent
                        className="card-post"
                        style={{
                          backgroundImage: `url(${previousImage})`,
                        }}
                      />
                      <Content className="link-post">← {previous.frontmatter.title}</Content>
                    </Card>
                  </Link>
                </Column>
              ) : null}

              {next ? (
                <Column isSize="1/3">
                  <Title tag="h6" isSize={5} hasTextColor="Black" hasTextAlign="centered">
                    Next Post
                  </Title>
                  <Link to={next.fields.slug} rel="next">
                    <Card className="card-p">
                      <CardContent
                        className="card-post"
                        style={{
                          backgroundImage: `url(${nextImage})`,
                        }}
                      />
                      <Content className="link-post">{next.frontmatter.title} →</Content>
                    </Card>
                  </Link>
                </Column>
              ) : null}
            </Columns>
            <Columns isCentered>
              <Column>
                <DiscussionEmbed
                  style={{ width: '100% !important' }}
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </Column>
            </Columns>
          </Container>
        </section>
      </LayoutPost>
    );
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
        twitterHandle
      }
    }
    seoImages: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          publicURL
          childImageSharp {
            resize(width: 1200, height: 1200) {
              width
              height
              src
            }
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      rawMarkdownBody
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
`;
