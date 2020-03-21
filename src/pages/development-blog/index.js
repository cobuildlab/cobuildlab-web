import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Columns,
  Column,
  Card,
  Content,
  Tag,
} from 'bloomer';
import { Icon } from 'react-icons-kit';
import { clockO } from 'react-icons-kit/fa/clockO';
import 'bulma';
import '../../assets/fonts/Lato-Black.ttf';
import '../../assets/fonts/Lato-BlackItalic.ttf';
import '../../assets/fonts/Lato-Bold.ttf';
import '../../assets/fonts/Lato-BoldItalic.ttf';
import '../../assets/fonts/Lato-Hairline.ttf';
import '../../assets/fonts/Lato-HairlineItalic.ttf';
import '../../assets/fonts/Lato-Italic.ttf';
import '../../assets/fonts/Lato-Light.ttf';
import '../../assets/fonts/Lato-LightItalic.ttf';
import '../../assets/fonts/Lato-Regular.ttf';

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    const siteTitle = 'Software Development Blog';
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <Hero isColor="white" isSize="small">
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title className="title-blog" isSize={1}>
                    {siteTitle}
                  </Title>
                  <Subtitle isSize={5}>Development team playground.</Subtitle>
                  <br />
                  <hr />
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        <section className="section-blog">
          <Container>
            <Columns className="is-multiline">
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug;
                return (
                  <Column key={node.fields.slug} isSize="1/3">
                    <Link to={node.fields.slug}>
                      <Card className="card-p" style={{ height: '200px' }}>
                        <Content className="title-post">
                          <small>
                            {' '}
                            <Icon icon={clockO} style={{ paddingTop: 5 }} /> {node.frontmatter.date}
                          </small>
                          <Subtitle hasTextColor="white">{title}</Subtitle>
                        </Content>
                      </Card>
                    </Link>
                  </Column>
                );
              })}
            </Columns>
          </Container>
        </section>
      </Layout>
    );
  }
}

export default BlogIndex;

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
      limit: 1000
      filter: {fileAbsolutePath: {regex: "/(development-blog)/.*\\.md$/"}}
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
          }
        }
      }
    }
  }
`;
