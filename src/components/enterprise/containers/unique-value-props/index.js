import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Columns, Column, Section } from 'bloomer';
import Typography from '../../../2020/Typography';
import './unique-value-props.scss';
import { money, bolt, bullhorn } from 'react-icons-kit/fa';
import ValuePropsCard from './ValuePropsCard';

const icons = {
  money: money,
  bolt: bolt,
  bullhorn: bullhorn,
};

const UniqueValueProps = () => {
  const data = useStaticQuery(query);

  const items = data.allOurMainMissionJson.edges.map((data, index) => (
    <Column key={data.node.id} isSize={{ mobile: 12, desktop: 4 }}>
      <ValuePropsCard
        image={data.node.images.childImageSharp.fluid}
        title={data.node.title}
        icon={icons[data.node.icon]}
        content={data.node.content}
        index={index}
      />
    </Column>
  ));

  return (
    <Section>
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
                Since 2012 we’ve been focused on developing and combining agile techniques, tools,
                and technologies to increase development speed in order to deliver faster results!
              </Typography>
            </div>
            <Columns>{items}</Columns>
          </Container>
        </div>
      </div>
    </Section>
  );
};

const query = graphql`
  query {
    allOurMainMissionJson {
      edges {
        node {
          title
          subtitle
          subcontent
          content
          id
          icon
          images {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default UniqueValueProps;
