import React from 'react';
import SeoMetaTags from '../components/SeoMetaTags';
import LayoutPost from '../components/layoutPost';
import Share from '../components/Share';
import Title2 from '../components/Title2';
import Carousel from '../components/Carousel';
import Title3 from '../components/Title3';
import Title4 from '../components/Title4';
import Title5 from '../components/Title5';
import Title6 from '../components/Title6';
import BlockQuote from '../components/BlockQuote';
import Credits from '../components/Credits';
import get from 'lodash/get';
import defaultImg from '../resources/default-post.jpg';
import rehypeReact from 'rehype-react';
import { Hero, HeroBody, Container, Title, Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css';
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
import { PropTypes } from 'prop-types';

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
}).Compiler;

/**
 *
 */
class StoryCommon extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const twitterHandle = get(this.props, 'data.site.siteMetadata.twitterHandle');
    const slug = post.fields.slug;
    const url = get(this.props, 'data.site.siteMetadata.siteUrl');
    const siteTitle = 'Cobuild Lab';
    const siteDescription = post.excerpt;
    const image = get(post, 'frontmatter.image.publicURL') || defaultImg;

    return (
      <LayoutPost>
        <SeoMetaTags title={post.frontmatter.title} description={siteDescription} />
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
    );
  }
}

StoryCommon.propTypes = {
  data: PropTypes.object.isRequired,
};

export { StoryCommon };
