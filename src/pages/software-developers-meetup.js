import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Column, Columns, Image } from 'bloomer';
// import 'react-toastify/dist/ReactToastify.min.css';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import { ClipLoader } from 'react-spinners';

// RESOURCES
import meetupImage from '../resources/meetup.jpeg';
import { PropTypes } from 'prop-types';

// TYPOGRAPHY
import { 
  CustomH1 as H1, 
  CustomH2 as H2, 
} from '../components/2020/LandingTypography';

import Styled from 'styled-components';

const StyledLoading = Styled.div`
  margin: 0px auto;
  textAlign: center;
  width: 600px;
  height: 338px,
`;

class SoftwareDevelopersMeetup extends Component {

  componentDidMount() {
    window.location.replace('https://www.meetup.com/Software-Developers-of-Florida/');
  }

  render() {
    const siteDescription = 'The Software Developers of Florida is here to demonstrate the power of programming languages , technologies and frameworks to people of Florida.';
    
    return (
      <LandingPageLayout
        siteDescription={siteDescription}
      >
        
        <Columns isCentered isVCentered>
          <Column isCentered isVCentered isSize="1">
            <StyledLoading  className="loading">
             <Image isRatio="16:9" src={meetupImage} />
            </StyledLoading>
            <H1
              className="subtitle-logo-landing has-text-centered">
              Software Developers of Florida
            </H1>
            <br />
            <br />
            <div className="loading" style={{ margin: 'auto', textAlign: 'center' }}>
              <ClipLoader size={90} color={'#e76c29'} loading={true} />
              <br />
              <H2>Redirecting...</H2>
            </div>
          </Column>
      </Columns>

      </LandingPageLayout>
    );
  }
}

SoftwareDevelopersMeetup.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SoftwareDevelopersMeetup;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
