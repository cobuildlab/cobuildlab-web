import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Container, Columns, Column } from 'bloomer';
import Typography from '../Typography';
import Image from '../Image';
import styles from './css/index.module.scss';
import icon from '../../../resources/2020/home/icon-footer.png';

const title = {
  default: {
    level: 11,
    fontWeight: 'bold',
  },
};

const description = {
  default: {
    level: 12,
    fontWeight: 'normal',
  },
};

const Title = ({ children }) => (
  <Typography tag="h6" size={title} className={styles.text_color_white}>
    {children}
  </Typography>
);

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Description = ({ children }) => (
  <Typography tag="p" size={description} className={styles.text_color_white}>
    {children}
  </Typography>
);

Description.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const LastPostItem = ({ src, alt, title, date, slug }) => (
  <Link to={slug} className={styles.last_post_item}>
    <div className={styles.last_post_img_container}>
      <Image src={src} alt={alt} />
    </div>
    <div className={styles.last_post_preview}>
      <Description>{title}</Description>
      <Description>
        <strong>{date}</strong>
      </Description>
    </div>
  </Link>
);

LastPostItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

const Footer = () => {
  const data = useStaticQuery(pageQuery);
  const lastPost = data.allMarkdownRemark.edges.map(({ node }) => (
    <LastPostItem
      key={node?.fields?.slug}
      slug={node?.fields?.slug}
      src={node?.frontmatter?.image?.publicURL}
      alt={node?.frontmatter?.date}
      title={node?.frontmatter?.title}
      date={node?.frontmatter?.date}
    />
  ));

  return (
    <Container>
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 1 }}>
          <Image src={icon} alt="footer icon" className={styles.icon_footer} />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 2 }}>
          <Title>Services</Title>
          <Description>Product development Software development Education and training</Description>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 2 }}>
          <Title>Value</Title>
          <Description>
            Business Value <br /> Technology Value
          </Description>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 2 }}>
          <Title>Customer Success Stories</Title>
          <Description>
            Okroo <br /> MyVoice <br /> Balz
          </Description>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 4 }} isOffset={{ mobile: 0, desktop: 1 }}>
          <Title>Latest Blog Post</Title>
          {lastPost}
        </Column>
      </Columns>
    </Container>
  );
};

const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
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
  }
`;

export default Footer;
