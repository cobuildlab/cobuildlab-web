import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import 'react-toastify/dist/ReactToastify.min.css';
import LayoutLanding from '../components/layoutLanding';
import FormContact from '../components/FormContact';
import { Container, Title, Column, Columns, Hero, Image, Subtitle } from 'bloomer';
import 'bulma';
import '../assets/fonts/Lato-Black.ttf';
import '../assets/fonts/Lato-BlackItalic.ttf';
import '../assets/fonts/Lato-Bold.ttf';
import '../assets/fonts/Lato-BoldItalic.ttf';
import '../assets/fonts/Lato-Hairline.ttf';
import '../assets/fonts/Lato-HairlineItalic.ttf';
import '../assets/fonts/Lato-Italic.ttf';
import '../assets/fonts/Lato-Light.ttf';
import '../assets/fonts/Lato-LightItalic.ttf';
import '../assets/fonts/Lato-Regular.ttf';
import { ClipLoader } from 'react-spinners'
import meetupImage from '../resources/meetup.jpeg';

class Index extends React.Component {

  // componentDidMount() {
  //   window.location.replace("https://www.meetup.com/Software-Developers-of-Florida/");
  // }

  render() {
    return (
      <LayoutLanding location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'The Software Developers of Florida is here to demonstrate the power of programming languages , technologies and frameworks to people of Florida.' }]}
          title={'Meetup: Software Developers of Florida'}
        />

        {/*HEADER*/}
        <Container isFluid>
          <Hero className="is-fullheight">
            <Columns isCentered isVCentered>
              <Column isCentered isVCentered isSize="1" className="space-title">
                <div className="loading" style={{ margin: 'auto', textAlign: 'center', width: '900px', height: '506px' }}>
                  <Image isRatio="16:9" src={meetupImage} />
                </div>

                <Subtitle isCentered className="subtitle-logo-landing" style={{ margin: 'auto', textAlign: 'center' }}>
                  Software Developers of Florida
                  </Subtitle>
                <br />
                <br />
                <div className="loading" style={{ margin: 'auto', textAlign: 'center' }}>
                  <ClipLoader size={90} color={'#e76c29'} loading={true} />
                  <br />
                  <Subtitle isSize={5}>Redirecting...</Subtitle>
                </div>
              </Column>
            </Columns>
          </Hero>
        </Container>
        {/*HEADER*/}
      </LayoutLanding>
    );
  }
}

export default Index;

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
