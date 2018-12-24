import React from 'react'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.min.css'
import NewLandingForm from '../components/NewLadingForm'
import BadgeIndustry from '../components/BadgeIndustry'
import { Title, Subtitle } from 'bloomer'
import 'bulma'
import '../assets/fonts/Lato-Black.ttf'
import '../assets/fonts/Lato-BlackItalic.ttf'
import '../assets/fonts/Lato-Bold.ttf'
import '../assets/fonts/Lato-BoldItalic.ttf'
import '../assets/fonts/Lato-Hairline.ttf'
import '../assets/fonts/Lato-HairlineItalic.ttf'
import '../assets/fonts/Lato-Italic.ttf'
import '../assets/fonts/Lato-Light.ttf'
import '../assets/fonts/Lato-LightItalic.ttf'
import '../assets/fonts/Lato-Regular.ttf'

import logo from '../resources/cobuildlab.png'
import badge1 from '../resources/badges1.png'
import badge2 from '../resources/badges2.png'
import badge3 from '../resources/badges3.png'
import badge4 from '../resources/badges4.png'

class Index extends React.Component {
  render() {
    const siteTitle = 'Cobuild: Idea Accelerator in Miami'
    const siteDescription = 'We accelerate Ideas into Products'
    const landingName = 'Idea Accelerator in Miami'
    const text =
      'Lorem ipsum dolor sit amet, maecenas dictum in est, tincidunt nec suscipit vitae et et est. Justo vel lorem taciti elementum. Suspendisse et integer, aliquam nostra sollicitudin lacus, molestiae sit praesent ultrices augue arcu elit. Risus eu nulla varius, eu est morbi, lacinia elit vivamus phasellus volutpat sed mauris, nascetur vitae illo proin pulvinar, hac praesent varius.'

    return (
      <React.Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <section className="hero is-fullheight">
          <div className="hero-body no-padding-hero">
            <div className="content">
              <div className="columns is-desktop">
                <div className="column is-8 h-100 bg-header-landing">
                  <div>
                    <img src={logo} className="logo" />
                  </div>
                  <Title className="title-squeezing">
                    Idea Acelerator <br /> in Miami
                  </Title>
                  <Subtitle className="subtitle-squeezing">
                    We accelerate Ideas into scalable Software Businesses
                  </Subtitle>
                  <p className="text-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit odit qui voluptatibus odio quod dignissimos,
                    consequuntur repellendus atque ad quia voluptates at autem
                    cumque ex dolorem, obcaecati recusandae quisquam
                    laborum.Quo, quas esse, magnam facere ex doloribus at
                    similique laudantium asperiores deleniti accusamus eaque,
                    impedit veniam sed cupiditate praesentium voluptatum illo
                    fugiat magni nihil! Facere fugiat sunt id fugit natus!
                  </p>
                  <BadgeIndustry/>
                </div>
                <div className="column h-100 is-4 bg-form-landing Aligner">
                  <div className="has-text-centered view-badge">
                    <img src={badge1} className="badge" />
                    <img src={badge2} className="badge" />
                    <img src={badge3} className="badge" />
                    <img src={badge4} className="badge-google" />
                  </div>
                  <NewLandingForm landingName={landingName} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*HEADER*/}
        {/* <Hero className="is-fullheight">
          <HeroBody>
            <Container isFluid className="is-hidden-mobile">
              <Columns>
                <Column isSize="1/2">
                  <Title>Hola </Title>
                </Column>
              </Columns>
            </Container> */}

        {/* <Container
              isFluid
              className="is-hidden-desktop is-hidden-tablet-only"
              style={{backgroundColor:"white", padding:"5px"}}
            >
              <Columns>
                <Column isSize="1/2">
                  <Title className="title-logo-mobile" hasTextAlign="centered">
                    Cobuild Lab
                  </Title>
                  <Subtitle className="subtitle-logo-mobile" hasTextAlign="centered">
                    <strong>
                      {landingName}
                    </strong>
                  </Subtitle>
                  <Subtitle isSize={4}>
                    <h3>
                      Cobuild Is the process of transforming an idea in a sustainable business, through the combination
                      and collaboration of the areas of Lean Entrepreneurship, Business Strategy, Technological
                      Innovation, and Exponential Growth.
                    </h3>
                  </Subtitle>
                </Column>
                <Column isSize="1/2">
                  <FormContact landingName={landingName}/>
                </Column>
              </Columns>
            </Container> */}
        {/* </HeroBody>
        </Hero> */}
        {/*HEADER*/}
      </React.Fragment>
    )
  }
}

export default Index
