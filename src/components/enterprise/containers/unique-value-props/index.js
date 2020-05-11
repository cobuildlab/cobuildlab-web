import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Typography from '../../../2020/Typography';
import './unique-value-props.scss';
import { money, bolt, bullhorn } from 'react-icons-kit/fa';
import ValuePropsCard from './ValuePropsCard';

const BLOG_DATA = [
  {
    id: 1,
    Icon: bolt,
    title: 'Scale your Business Faster',
    subtitle: 'Williamson',
    subcontent: 'Web designer',
    content:
      'The problem reveals itself when you try to locate a software solution that takes the various spreadsheets, emails, web bots and website utilities that you regularly use and combine them into a solid, reliable, yet still intuitive and accessible software package.',
  },
  {
    id: 2,
    Icon: bullhorn,
    title: 'Differentiate From Competitors',
    subtitle: 'Miranda Roy',
    subcontent: 'Web developer',
    content:
      'Find your unique space in the market. Leverage your knowledge and expertise by building the tools that will make you stand and attract your customers.',
  },
  {
    id: 3,
    Icon: money,
    title: 'Offer more value to your Customers',
    subtitle: 'Steve Thomas',
    subcontent: 'Web developer',
    content:
      'Be the reference in your industry by providing cutting edge value. Saas products, remote support, mobile presence. etc',
  },
];

const UniqueValueProps = () => {
  const data = useStaticQuery(query);
  return (
    <Section id="unique-value-props">
      <div className="blog-wrapper">
        <div className="enterprise-section">
          <Container>
            <div className="main-title-wrapper">
              <div className="sub-title-wrapper">
                <Typography className="site-subtitle" tag="h3">
                  OUR MAIN MISSION
                </Typography>
              </div>
              <Typography className="sitemain-subtitle" tag="h2">
                Rapid Application Development
              </Typography>
              <Typography className="site-dec" tag="p">
                Since 2012 we`ve focused on developing and combining agile techniques, tools, and
                technologies to increase development speed to deliver faster results!
              </Typography>
            </div>
            <Columns>
              <Column isSize={{ mobile: 12, desktop: 4 }}>
                <ValuePropsCard
                  image={data.imagesCardOne.childImageSharp.fluid}
                  title={BLOG_DATA[0].title}
                  icon={BLOG_DATA[0].Icon}
                  content={BLOG_DATA[0].content}
                  index={BLOG_DATA[0].id}
                />
              </Column>
              <Column isSize={{ mobile: 12, desktop: 4 }}>
                <ValuePropsCard
                  image={data.imagesCardTwo.childImageSharp.fluid}
                  title={BLOG_DATA[1].title}
                  icon={BLOG_DATA[1].Icon}
                  content={BLOG_DATA[1].content}
                  index={BLOG_DATA[1].id}
                />
              </Column>
              <Column isSize={{ mobile: 12, desktop: 4 }}>
                <ValuePropsCard
                  image={data.imagesCardThree.childImageSharp.fluid}
                  title={BLOG_DATA[2].title}
                  icon={BLOG_DATA[2].Icon}
                  content={BLOG_DATA[2].content}
                  index={BLOG_DATA[2].id}
                />
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
    imagesCardOne: file(relativePath: { eq: "blog/css1.jpg" }) {
      childImageSharp {
        fluid {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
    imagesCardTwo: file(relativePath: { eq: "blog/css2.jpg" }) {
      childImageSharp {
        fluid {
          base64
          sizes
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
    imagesCardThree: file(relativePath: { eq: "blog/css3.jpg" }) {
      childImageSharp {
        fluid {
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

export default UniqueValueProps;
