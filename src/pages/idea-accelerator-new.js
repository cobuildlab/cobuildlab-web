import React from 'react'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.min.css'
import Testimonial from '../components/Testimonial'
import StudyCase from '../components/StudyCase'
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
import weedLogo from '../resources/weedmatch.png'
import clienteImg from '../resources/oscar-weedmatch.png'

export default class IdeaNew extends React.Component {
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
                  {/* <Testimonial
                image={clienteImg}
                logo={weedLogo} 
                text={text}
              /> */}
                  <StudyCase logo={weedLogo} text={text} />
                </div>
                <div className="column h-100 is-4 bg-form-landing Aligner">
                  <div className="has-text-centered view-badge">
                    <img src={badge1} className="badge" />
                    <img src={badge2} className="badge" />
                    <img src={badge3} className="badge" />
                    <img src={badge4} className="badge-google" />
                  </div>
                  <div className="Aligner">
                    <div className="colunm is-4">
                      <Title className="has-text-centered title-form-contact">
                        Contact us for a <span className="free">FREE</span>{' '}
                        <br /> consultation!
                      </Title>
                      <p className="subtitle-info">
                        Call Us to: <span className="free">(786) 991-3467</span>
                        , or <br /> fill de from and we will get in touch with
                        you.{' '}
                      </p>
                    </div>

                    <form className="has-text-centered">
                      <div className="group">
                        <input type="text" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Name</label>
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

                      <div className="group">
                        <input type="text" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Email</label>
                      </div>

                      <div className="group">
                        <input type="text" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Comment or Message</label>
                      </div>
                      <button
                        className="button is-primary is-medium is-rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                    <div>
                      <Subtitle className="has-text-centered has-text-white mt-20">
                        Privacy Policy
                      </Subtitle>
                      <p className="has-text-centered has-text-white is-marginless">
                        Here you can access the information about how we your
                        data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
