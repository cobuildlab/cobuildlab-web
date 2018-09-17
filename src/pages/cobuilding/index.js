import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Columns,
  Column,
  Menu,
  MenuList,
  MenuLink,
  Content,
} from 'bloomer'

class CobuildingIndex extends React.Component {
  render() {
    const siteTitle = 'Cobuilding | Cobuild Lab'
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <Hero isColor="white" isSize="medium">
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title isSize={1} hasTextColor="black">
                    Cobuilding
                  </Title>
                  <Subtitle tag="h3">
                    Is the process of transforming an idea in a sustainable
                    business, through the combination and collaboration of the
                    areas of Lean Entrepreneurship, Business Strategy,
                    Technological Innovation and Exponential Growth
                  </Subtitle>
                  <Subtitle tag="h3" className="has-text-weight-bold">
                    4Geeks divides the cobuilding process in 4 phases:
                  </Subtitle>
                  <hr />
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>

        <Container>
          <Columns>
            <Column isSize="1/3">
              <Menu>
                <MenuList>
                  <li>
                    <MenuLink className="is-uppercase">
                      Phase 1: Validation
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink className="is-uppercase">
                      Phase 2: Cobuilding
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink className="is-uppercase">
                      Phase 3: Close the Circle
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink className="is-uppercase">
                      Phase 4: Acceleration
                    </MenuLink>
                  </li>
                </MenuList>
              </Menu>
            </Column>

            <Column>
              <Content>
                <Title tag="h2">Plain and simple:</Title>
                <p>
                  Don't offer what people don't want. The purpose of this phase
                  is to validate that your idea is aiming a problem that
                  actually exists; Along with that, that the solution is
                  something doable.
                </p>
                <Subtitle isSize={4}>
                  Step 1. Idea Validation: Technical and Economical
                </Subtitle>
                <p>
                  This step we consult with experts on the company about the
                  feasibility of the solution to be build. This quick analysis
                  would reveal basically two things:{' '}
                  <b>
                    The idea is built in a reasonable amount of time (1 – 6
                    months) with a reasonable amount of money
                  </b>{' '}
                  In this step is also important to write the specs to any{' '}
                  <b>Proof of Concept</b> needed in the next Phase. A Proof of
                  Concept, is indeed a proof that the idea can be built, usually
                  use for mitigating any doubts from the technical perspective
                  and gain stakeholders support.
                </p>
                <Subtitle isSize={4}>
                  Step 2. Market Validation: Estimation and Competitors Analysis
                </Subtitle>
                <p>
                  Market validation is the way to confirm that your idea is a
                  solution to a problem people actually have. Is this step and
                  before building anything we <b>close test your idea</b> with a
                  small group inside the company to get an honest feedback. In
                  this same step we take the time to build the first{' '}
                  <b>Customer Archetype</b>, defining some aspects of our Market
                  Audience: Age Range, Income, Work Sector, Job Titles, suffer
                  from the problem we are trying to solve, how is the best to
                  find them and how can we expose the product to them. At the
                  same time we start <b>researching your competitors</b>{' '}
                  investigating ways in which the problem was solve before,
                  their weakness and their power points, also how this solutions
                  get to market and how well they are doing SEO.
                </p>
                <Subtitle isSize={4}>
                  Step 3. Value and Growth Hypothesis
                </Subtitle>
                Once we had established ground, we build our first version of
                our Startup Hypothesis:
                <ul>
                  <li>
                    Value Hypothesis: We write down our idea will provide value
                    for those who are willing to use it
                  </li>
                  <li>
                    Growth Hypothesis: Once we got the point in which we are
                    providing value, we write down the ways we can massively
                    reach potential customers
                  </li>
                </ul>
              </Content>
            </Column>
          </Columns>
        </Container>
      </Layout>
    )
  }
}

export default CobuildingIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
