import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import get from 'lodash/get';
import 'react-toastify/dist/ReactToastify.min.css';
import { Columns, Column } from 'bloomer';

import LandingPageLayout from '../components/2020/LandingPageLayout';
// import Contact from '../components/2020/HomePageContact';
import Title from '../components/Typography/H2';
import Styled from 'styled-components';
import EnterpriseRecentPost from '../components/enterprise/containers/EnterpriseRecentPost';

const StyledColumns = Styled(Columns)`
  margin-top: 15px;
`;

class ThanksContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingName: 'Cobuild Lab',
    };
  }

  render() {
    const siteDescription = get(this, 'props.data.site.siteMetadata.description');

    return (
      <LandingPageLayout withFooter siteDescription={siteDescription}>
        <Title className="title-logo">Thanks!</Title>
        <Title className="subtitle-logo">{`We'll get back to you shortly.`}</Title>
        <StyledColumns>
          <Column isSize="1/2">
            <Link
              className="button is-primary is-medium is-rounded"
              to="/"
              style={{ marginRight: 15 }}>
              Home
            </Link>
            <Link
              className="button is-primary is-medium is-rounded"
              to="/blog"
              style={{ marginRight: 15 }}>
              Blog
            </Link>
            <Link
              className="button is-primary is-medium is-rounded"
              to="/portfolio"
              style={{ marginRight: 15 }}>
              Portfolio
            </Link>
          </Column>
        </StyledColumns>
        <EnterpriseRecentPost />
        {/* <Section>
          <Container>
            <Contact />
          </Container>
        </Section> */}
      </LandingPageLayout>
    );
  }
}

export default ThanksContact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;
