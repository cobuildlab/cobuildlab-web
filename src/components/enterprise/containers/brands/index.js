import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Section } from 'bloomer';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import './brands.scss';
import H4 from '../../../Typography/H4';

const settings = {
  autoplaySpeed: 3000,
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const Brand = () => {
  const data = useStaticQuery(query);
  const items = data.allFile.edges.map(({ node }) => (
    <div className="brand-item" key={node.id}>
      <div className="brand-content">
        <Img fluid={node.childImageSharp.fluid} alt="" />
      </div>
    </div>
  ));

  return (
    <Section isPaddingless>
      <div className="brand-slider">
        <div className="enterprise-section" style={{ paddingTop: 0 }}>
          <Container>
            <H4>
              Battle Proof <span className="enterprise-text-orange sub-title">Stack</span>{' '}
            </H4>
            <Slider {...settings}>{items}</Slider>
          </Container>
        </div>
      </div>
    </Section>
  );
};

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "logos/brands" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(quality: 30) {
              src
              base64
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
  }
`;

export default Brand;
