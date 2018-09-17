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

            <Column>
              <Content>
                <Subtitle isSize={4}>Step 1. Prototyping</Subtitle>
                <p>
                  At the initial stage of transforming the product into a
                  product we need to start with a <b>prototype</b>. A prototype,
                  depending of the case can have none, one or some of the
                  functionality that the final product will have, enough to been
                  available to present and explain:{' '}
                  <b>
                    how the product is going to work, how it can look like and
                    how the user is gonna use it.
                  </b>
                </p>
                <Subtitle isSize={4}>Step 2: Customers Archetypes</Subtitle>
                <p>
                  Once we have a prototype around the table, it's time to{' '}
                  <b>review the first version of the Customer Archetype. </b>
                  At this point we have enough information about the market and
                  the product to lain down the <b>2nd version</b> reviewing the
                  initial demographic y making the necessary adjustments.
                </p>
                <Subtitle isSize={4}>
                  Step 3: Minimum Viable Product (MVP)
                </Subtitle>
                <p>
                  <b>It's time to build!</b>
                  <br />
                  In this step we start building the product using{' '}
                  <b>agile techniques and early retrospective.</b> The average
                  time to have the first functional version is a month, and
                  since that moment every week new functionality is added or
                  tested. Having an early feedback of the product is very
                  important in this Step. It is also important to remember that,
                  maybe not all of the features discussed in the prototype have
                  to be include it in the MVP, as its main goal is to have
                  enough to test the <b>Value Hypothesis</b>
                </p>
                <Subtitle isSize={4}>Step 4: Live testing</Subtitle>
                <p>
                  One the most important thing about building and idea is to
                  have tested as soon as it's testable. This can occur even if
                  the MVP is not fully featured. The main goal here is to find a
                  group of{' '}
                  <b>potential customers and start rolling out the product</b>.
                  This can be coworkers, stakeholders, family, close friends,
                  suppliers, so on. The most important part here is to get and
                  honest a usable feedback by conducting interviews to this
                  customers to really know about the impact on the product.
                </p>

                <Subtitle isSize={4}>Step 5: A/B Testing</Subtitle>
                <p>
                  This is a critical step that depends a lot of the result of
                  the previous activities. You have the MVP, the results of the
                  tests, and now what? Usually if the product is generally
                  criticized and qualified as not satisfying the need, well it's
                  an easy decision to make, just head back to step one, with the
                  information and start the prototype again. Also this decision
                  comes very easy if the product is broadly accepted, you need
                  to move on to the next step as quickly as possible. The real
                  challenge here is probably having around a 30-40% of
                  acceptance, it's a critical choice to decide whether to move
                  on with the product or head back to the prototyping step.
                  There is no formula or rules that applies here because many
                  things can happen, we selected the wrong audience, we didn't
                  provide an MVP reflecting the value hypothesis, the product is
                  slow or not complete yet. So, the best way to take here should
                  be toreview carefully the feedback from the Live Test along
                  with the stakeholders and all members of the group, and make
                  the call:
                </p>
                <ul>
                  <li>
                    Get the feedback and head back to step 1 (Prototyping)
                  </li>
                  <li>
                    Change the test group and re do the Live Testing to validate
                    the current feedback
                  </li>
                  <li>
                    Tweak the MVP according to the &Acirc;&nbsp;feedback and re
                    do the Live Testing. (Minimum changes)
                  </li>
                  <li>
                    Add or remove some features of the MVP according to feedback
                    obtain. This is A/B testing
                  </li>
                </ul>
                <p>
                  A/B testing allow you to split the testing groups into
                  subgroups for testing features that feel misused, unnecessary
                  or that they are missing from the original MVP. There is no
                  short way here, prepare the team for test, the customers
                  group, and we star testing as soon as possible.
                </p>
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
