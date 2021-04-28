import React, { Component } from 'react';
import LayoutPost from '../components/layoutPost';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { DiscussionEmbed } from 'disqus-react';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';

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
import 'bulma/css/bulma.css';

import { Hero, Container, Title, Columns, Column, Card, CardContent, Content } from 'bloomer';
import TTSVoice from '../components/TTSVoice';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;

const SectionPost = Styled.section`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
  line-height: 1.125;
  color: #264A60;
  letter-spacing: 0;
  opacity: 1;
  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 400;
  position: relative;
  margin-bottom: 22px;
  text-align: justify;
  & ul > li {
    list-style: disc;
    margin-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
`;

const StyledContainer = Styled(Container)`
  margin-top: 6rem;
  margin-bottom: 5rem;
`;

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
    // 'contact-us': BlogPostContactUs,
  },
}).Compiler;

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    console.log('DEBUG', post.frontmatter.title, post.frontmatter);
    const twitterHandle = get(this.props, 'data.site.siteMetadata.twitterHandle');
    const disqusShortname = 'cobuildlab';
    const disqusConfig = { identifier: post.id, title: post.frontmatter.title };
    const slug = post.fields.slug;
    const url = get(this.props, 'data.site.siteMetadata.siteUrl');
    const siteTitle = 'Cobuild Lab';
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;
    const previousImage = get(previous, 'frontmatter.image.publicURL') || defaultImg;
    const nextImage = get(next, 'frontmatter.image.publicURL') || defaultImg;
    const seoImages = get(this, 'props.data.seoImages.frontmatter.image.childImageSharp.resize');
    return (
      <LayoutPost>
        <SeoMetaTags
          title={post.frontmatter.title}
          titleTemplate=""
          description={siteDescription}
          image={seoImages}
        />

        <Hero isSize="large">
          <StyledContainer hasTextAlign="centered">
            <StyledTitle tag="h1" isSize={1} hasTextColor="Black">
              {post.frontmatter.title}
            </StyledTitle>
            <br />
            <hr />
          </StyledContainer>
          {/* WITH GATSBY ALWAYS USE <IMG fluid={}>
            Because it handles the device size img for you*/}
          {/* <HeroBody
            className="bg-post"
            style={{
              backgroundImage: `url(${image})`
            }}
          /> */}
          <Img
            className="bg-post"
            fluid={post.frontmatter.image.childImageSharp.fluid}
            alt={post.frontmatter.title}
          />
        </Hero>

        <SectionPost id="section-post" className="section">
          <Container>
            <Columns isMultiline>
              <Column isSize={12} hasTextAlign="left">
                <TTSVoice text={post.rawMarkdownBody} />
                {renderAst(post.htmlAst)}
              </Column>
              <Column isSize={12}>
                <BlogPostContactUs />
              </Column>
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
            <Columns style={{ marginTop: 30 }} isCentered>
              <Column hasTextAlign="centered">
                <StyledTitle tag="h6" isSize={3}>
                  READ MORE
                </StyledTitle>
              </Column>
            </Columns>

            <Columns isCentered>
              {previous ? (
                <Column isSize="1/3">
                  <StyledTitle tag="h6" isSize={5} hasTextColor="Black" hasTextAlign="centered">
                    Previous Post
                  </StyledTitle>
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
                  <StyledTitle tag="h6" isSize={5} hasTextColor="Black" hasTextAlign="centered">
                    Next Post
                  </StyledTitle>
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
        </SectionPost>
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
