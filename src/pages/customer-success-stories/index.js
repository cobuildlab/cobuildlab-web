import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { 
  HeroHeader, 
  HeroBody, 
  Hero, 
  Section, 
  Container,
  Columns,
  Column
} from 'bloomer';


import H1 from '../../components/Typography/H1';
import Paragraph from '../../components/Typography/Paragraph';
import { TextOrange } from '../../components/Typography/TextHelpers';


import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import CustomerSuccessStoriesCard from '../../components/2020/CustomerSuccessStoriesCard';

import data from '../../data/customer/customer-success-stories';


const TitleContainer = styled.div`
  margin-top: 6.5em;
  & > p {
    margin-top: 3em;
    width: 50%;
  }
`;

export default class CustomerSuccessStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  render() {
    const siteTitle = 'Customer Success Stories - Miami Labs | Cobuild Lab';
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'Success Cases for the Cobuild Lab in Miami' }]}
          title={siteTitle}
        />
        <Hero>
          <HeroHeader>
            <Header />
          </HeroHeader>
          <HeroBody>
            <Container>
              <TitleContainer>
                <H1>
                  New <TextOrange>Ideas</TextOrange>, forged <br />
                  at <TextOrange>Cobuild Lab</TextOrange> 
                </H1>
                <Paragraph>
                  Many enter, others leave. In the end, the most restless and daring to undertake the digital 
                  world have found them perfect place because they have been cared for and understood
                  in the particularities of their local businesses. The laboratories in Miami by Cobuild Lab has 
                  allowed creating new and better ideas, born of other ideas.
                </Paragraph>
              </TitleContainer>
            </Container>
          </HeroBody>
        </Hero>
        <Section>
          <Container>
            <Columns isMultiline>
              <Column isSize={3} isPaddingless>
                <CustomerSuccessStoriesCard title={data[0].title} description={data[0].description} image={data[0].image} />
              </Column>
              <Column isSize={3} isPaddingless>
                <CustomerSuccessStoriesCard title={data[1].title} description={data[1].description} image={data[1].image} />
              </Column>
              <Column isSize={3} isPaddingless>
                <CustomerSuccessStoriesCard title={data[2].title} description={data[2].description} image={data[2].image} />
              </Column>
              <Column isSize={3} isPaddingless>
                <CustomerSuccessStoriesCard title={data[3].title} description={data[3].description} image={data[3].image} />
              </Column>
              <Column isSize={3} isPaddingless>
                <CustomerSuccessStoriesCard title={data[4].title} description={data[4].description} image={data[4].image} />
              </Column>
              <Column isSize={3} isPaddingless>
                <CustomerSuccessStoriesCard title={data[5].title} description={data[5].description} image={data[5].image} />
              </Column>
            </Columns>
          </Container>
        </Section>
      </Layout>
    );
  }
}


