import React from 'react'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.min.css'
import NewLandingForm from '../components/NewLandingForm'
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

export default class AgileProjectDescription extends React.Component {
  render() {
    const siteTitle = 'Agile Project Management in Miami'
    const siteSubtitle =
      'Let our experience drive the success of your projects.'
    const siteDescription =
      "Our senior's product managers and agile coaches work with you to build and deliver software effectively. Your team would be transformed through education of the most appropriate agile techniques and best practices."
    const landingName = 'Agile Project Management Description'

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
                  <div className="view-content-zoom">
                    <div>
                      <img src={logo} className="logo" />
                    </div>
                    <Title className="title-squeezing">
                      Agile Project Management in Miami
                    </Title>
                    <Subtitle className="subtitle-squeezing">
                      {siteSubtitle}
                    </Subtitle>
                    <p className="text-description">{siteDescription}</p>
                    <BadgeIndustry />
                  </div>
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
      </React.Fragment>
    )
  }
}
