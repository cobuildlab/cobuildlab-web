import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';
import Typrography from '../../../2020/Typography';
import ButtonSmoothScrolling from '../../../2020/Button/ButtonSmoothScrolling';
import AnimationImages from './AnimationImages';
import './banner.scss';

const title = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 1,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    fontWeight: 'normal',
  },
};

const Banner = () => {
  const data = useStaticQuery(query);

  const animation = data.animation.edges.map(({ node }, index) => (
    <AnimationImages node={node} key={node.id} index={index} />
  ));

  console.log(data);

  return (
    <Section isPaddingless id="banner">
      <div className="banner-wrapper demo1">
        <div className="banner-outer">
          <div className="slider-animation-images">{animation}</div>
          <Container>
            <Columns isDisplay="flex">
              <Column isSize={6}>
                <div className="row">
                  <div className="banner-content">
                    <Typrography tag="h2" className="sitemain-subtitle">
                      A PROCESS AND WORKFLOW AUTOMATION COMPANY
                    </Typrography>
                    <Typrography size={title} tag="h1">
                      Let’s <span className="enterprise-text-orange">Build</span> a <br />
                      Great<span className=" enterprise-text-orange"> Idea.</span>
                    </Typrography>
                    <Typrography size={subTitle} tag="p" className="banner-dec">
                      We transform Small and Medium-sized businesses by automating your processes
                      into optimized, and streamlined workflows with Web and Mobile custom software.
                    </Typrography>
                    <br />
                    <Typrography size={subTitle} tag="p" className="banner-dec">
                      At Cobuild Lab, we`ve been helping business owners, CTO`s, COO`s and IT
                      leaders get past the techno-speak and help them take a business process and
                      turn it into a custom software solution.
                    </Typrography>
                    <div className="banner-btn-wrapper">
                      <ButtonSmoothScrolling href="#services">
                        Explore Our Services
                      </ButtonSmoothScrolling>
                    </div>
                  </div>
                </div>
              </Column>
              <Column isHidden="mobile" isSize={6}>
                <Img fluid={data.heroImages.childImageSharp.fluid} alt="" />
              </Column>
            </Columns>
          </Container>
        </div>
      </div>
    </Section>
  );
};

const query = graphql`
  query {
    animation: allFile(filter: { relativeDirectory: { eq: "banner/animation" } }) {
      edges {
        node {
          id
          childImageSharp {
            resolutions(quality: 10) {
              height
              src
              width
            }
          }
        }
      }
    }
    heroImages: file(relativePath: { eq: "banner/group-banner-2.png" }) {
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
`;

export default Banner;
