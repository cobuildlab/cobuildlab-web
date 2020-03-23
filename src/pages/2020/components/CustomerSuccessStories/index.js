import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'bloomer';
import Slider from 'react-slick';
import Typography from '@2020/components/Typography';
import './css/index.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const title = {
  default: {
    level: 4,
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
  autoplay: false, //TODO set this true when finish
  slidesToShow: 3,
  speed: 2500,
  variableWidth: true,
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

const CustomerSuccessStories = () => {
  const data = useStaticQuery(pageQuery);

  // dont remove inline styles or react slick is going to overwrite the css class
  //TODO add redirect to customer view

  const items = data.customerSuccessStories.edges.map(({ node }) => (
    <div style={{ width: 300 }} key={node.fields.slug}>
      <div
        style={{
          width: '100%',
          height: 385,
          display: 'flex',
          alignItems: 'center',
        }}>
        <div className="carousel-item">
          <img
            src={node?.frontmatter?.image?.publicURL}
            alt={node?.frontmatter?.title}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <Container isFluid className="container-not-margin">
      <div className="section-title">
        <Typography tag="h2" size={title} hasTextAlign="centered">
          Customer Success Stories
        </Typography>
      </div>
      <Slider {...settings}>{items}</Slider>
    </Container>
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
