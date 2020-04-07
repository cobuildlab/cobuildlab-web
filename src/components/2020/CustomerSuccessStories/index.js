import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Container } from 'bloomer';
import Slider from 'react-slick';
import Image from '../Image';
import Typography from '../Typography';
import background from '../../../resources/2020/home/background.svg';
import './css/index.scss';

const title = {
  default: {
    level: 7,
    fontWeight: 'bold',
  },
  lg: {
    level: 2,
    fontWeight: 'bold',
  },
};

const settings = {
  className: 'customer-success-stories-carousel',
  touchMove: false,
  centerMode: true,
  infinite: true,
  autoplay: true, //TODO set this true when finish
  slidesToShow: 3,
  speed: 2500,
  variableWidth: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 0,
        speed: 1000,
        autoplay: false,
        touchMove: true,
      },
    },
  ],
};

const OverlayBackground = () => (
  <div className="overlay_background">
    <img src={background} alt="b" />
  </div>
);

//TODO add redirect to customer view
// DONT REMOVE inline styles or react slick is going to overwrite the css class
const CarouselItem = ({ src, alt, slug }) => (
  <div style={{ width: 300 }}>
    <div
      style={{
        width: '100%',
        height: 385,
        display: 'flex',
        alignItems: 'center',
      }}>
      <div className="customer-carousel-item">
        <Link to={slug}>
          <Image src={src} alt={alt} />
        </Link>
      </div>
    </div>
  </div>
);

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

const CustomerSuccessStories = () => {
  const data = useStaticQuery(pageQuery);

  const items = data.customerSuccessStories.edges.map(({ node }) => (
    <CarouselItem
      key={node.fields.slug}
      slug={node.fields.slug}
      src={node?.frontmatter?.image?.publicURL}
      alt={node?.frontmatter?.title}
    />
  ));

  return (
    <div className="position-relative">
      <OverlayBackground />
      <Container isFluid className="container-full-width">
        <div className="section-title">
          <Typography tag="h2" size={title} hasTextAlign="centered">
            Customer Success Stories
          </Typography>
        </div>
        <Slider {...settings}>{items}</Slider>
      </Container>
    </div>
  );
};

const pageQuery = graphql`
  query {
    customerSuccessStories: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/(pages/customer-success-stories)/.*\\.md$/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 480) {
                  aspectRatio
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

export default CustomerSuccessStories;
