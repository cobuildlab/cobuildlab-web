import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';
import Typrography from '../../../2020/Typography';
import BannerButtons from './BannerButtons';
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
    <AnimationImages
      width={node.childImageSharp.resolutions.width}
      height={node.childImageSharp.resolutions.height}
      src={node.childImageSharp.resolutions.srcWebp}
      key={node.id}
      index={index}
    />
  ));

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
                      Let’s <span className="entegitrprise-text-orange">Build</span> a <br />
                      Great<span className=" enterprise-text-orange"> Idea.</span>
                    </Typrography>
                    <Typrography size={subTitle} tag="p" className="banner-dec">
                      We transform Small and Medium-sized businesses by automating manual processes
                      and tasks into optimized and streamlined workflows with Web and Mobile custom
                      software.
                    </Typrography>
                    <br />
                    <Typrography size={subTitle} tag="p" className="banner-dec">
                      At Cobuild Lab, we`ve been helping business owners, CTO`s, COO`s and IT
                      leaders get past the techno-speak and help them take a business process and
                      turn it into a custom software solution.
                    </Typrography>
                    <div className="banner-btn-wrapper">
                      <BannerButtons />
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
              width
              srcWebp
            }
          }
        }
      }
    }
    heroImages: file(relativePath: { eq: "banner/group-banner-2.png" }) {
      childImageSharp {
        fluid(webpQuality: 72) {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`;

export default Banner;
