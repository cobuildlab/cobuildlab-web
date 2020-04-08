import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Column, Columns, Image } from 'bloomer';
// import Helmet from 'react-helmet';
// import 'react-toastify/dist/ReactToastify.min.css';
// import LayoutLanding from '../components/layoutLanding';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';
import { ClipLoader } from 'react-spinners';

// RESOURCES
import meetupImage from '../resources/meetup.jpeg';

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

    return (
      <LandingPageLayout>
        
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

    // return (
    //   <LayoutLanding location={this.props.location}>
    //     <Helmet
    //       htmlAttributes={{ lang: 'en' }}
    //       meta={[
    //         {
    //           name: 'description',
    //           content:
    //             'The Software Developers of Florida is here to demonstrate the power of programming languages , technologies and frameworks to people of Florida.',
    //         },
    //         { property: 'og:image', name: 'og:image', content: meetupImage },
    //       ]}
    //       title={'Meetup: Software Developers of Florida'}>
    //       <meta property="og:type" content="article" />
    //       <meta property="og:image" content={meetupImage} />
    //       <meta property="twitter:image" content={meetupImage} />
    //     </Helmet>

    //     <Container isFluid className="is-hidden-mobile">
    //       <Hero className="is-fullheight">
    //         <Columns isCentered isVCentered>
    //           <Column isCentered isVCentered isSize="1" className="space-title">
    //             <div
    //               className="loading"
    //               style={{
    //                 margin: '0px auto',
    //                 textAlign: 'center',
    //                 width: '600px',
    //                 height: '338px',
    //               }}>
    //               <Image isRatio="16:9" src={meetupImage} />
    //             </div>
    //             <Subtitle
    //               isCentered
    //               className="subtitle-logo-landing"
    //               style={{ margin: 'auto', textAlign: 'center' }}>
    //               Software Developers of Florida
    //             </Subtitle>
    //             <br />
    //             <br />
    //             <div className="loading" style={{ margin: 'auto', textAlign: 'center' }}>
    //               <ClipLoader size={90} color={'#e76c29'} loading={true} />
    //               <br />
    //               <Subtitle isSize={5}>Redirecting...</Subtitle>
    //             </div>
    //           </Column>
    //         </Columns>
    //       </Hero>
    //     </Container>

    //     <Container isFluid className="is-hidden-desktop">
    //       <Hero className="is-fullheight">
    //         <Columns isCentered isVCentered>
    //           <Column isCentered isVCentered isSize="1" className="space-title">
    //             <div
    //               className="loading"
    //               style={{
    //                 margin: '-50px auto',
    //                 textAlign: 'center',
    //                 width: '700px',
    //                 height: '260px',
    //               }}>
    //               <Image isRatio="16:9" src={meetupImage} />
    //             </div>
    //             <Subtitle
    //               isCentered
    //               className="subtitle-logo-landing"
    //               style={{ margin: 'auto', textAlign: 'center' }}>
    //               Software Developers of Florida
    //             </Subtitle>
    //             <br />
    //             <div className="loading" style={{ margin: 'auto', textAlign: 'center' }}>
    //               <ClipLoader size={90} color={'#e76c29'} loading={true} />
    //               <br />
    //               <Subtitle isSize={5}>Redirecting...</Subtitle>
    //             </div>
    //           </Column>
    //         </Columns>
    //       </Hero>
    //     </Container>
    //   </LayoutLanding>
    // );
  }
}

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
