import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Img from 'gatsby-image';
import Typrography from '../../../2020/Typography';
import ButtonSmoothScrolling from '../../../2020/Button/ButtonSmoothScrolling';
import './about.scss';

const About = () => {
  const data = useStaticQuery(query);
  return (
    <Section isPaddingless id="about">
      <div className="about-wrapper gradient-color">
        <Container>
          <Columns isDisplay="flex-mobile" isCentered>
            <Column isSize={{ mobile: 11, desktop: 6 }}>
              <div className="row">
                <div className="about-content-block main-title-wrapper">
                  <div className="sub-title-wrapper">
                    <Typrography tag="h2" className="sitemain-subtitle">
                      Software Development
                    </Typrography>
                    {/*<Typrography tag="h3" className="about-dec about-dec-1">*/}
                    {/*  Since 2012 we've focused on developing and combining agile techniques, tools, and technologies to*/}
                    {/*  increase development speed to deliver faster results!*/}
                    {/*</Typrography>*/}
                    {/*<Typrography tag="h3" className="site-subtitle2">*/}
                    {/*  We give you the best:*/}
                    {/*</Typrography>*/}
                  </div>

                  <ul>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Quality apps utilizing modern technologies
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Rapid development and feature-rich
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Custom mobile and cloud solutions
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ iOS and Android experience
                      </Typrography>
                    </li>
                    <li>
                      <Typrography tag="h3" className="about-twosub-title">
                        ☛ Marketing and Launch Services
                      </Typrography>
                    </li>
                  </ul>

                  {/*<Typrography className="about-dec">*/}
                  {/*  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem*/}
                  {/*  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,*/}
                  {/*  when an*/}
                  {/*</Typrography>*/}
                  <div className="about-button-container">
                    <ButtonSmoothScrolling href="#enterprise-css" type="primary">
                      See Our Portfolio
                    </ButtonSmoothScrolling>
                  </div>
                </div>
              </div>
            </Column>
            <Column isSize={{ mobile: 11, desktop: 6 }} isHidden="mobile">
              <Img fluid={data.file.childImageSharp.fluid} alt="" />
            </Column>
          </Columns>
        </Container>
      </div>
    </Section>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "about/group-banner.png" }) {
      childImageSharp {
        fluid(quality: 30) {
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

export default About;
