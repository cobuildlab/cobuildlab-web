import React from 'react';
import {
  Container,
  Columns,
  Column,

  Section,
} from 'bloomer';
// import Img from "gatsby-image"
import Image from '../../components/image';
import ContactImg from '../../../../assets/images/contact/woman.png';
import Typography from '../../../2020/Typography';
import ContactForm from '../../../2020/ContactForm';
import ContactBackgroundImages from '../../../../data/contact';
import './contact.scss';

const ContactEnterprise = () => (
  <Section id="contact">
    <div className="contact-wrapper">
      <div className="contact-animation-images">
        {ContactBackgroundImages.map((img, index) => (
          <span key={`contact-img-${index}`} className={`image${index + 1}`}>
            <Image Path={img.img} />
          </span>
        ))}
      </div>
      <Container>
        <Columns>
          <Column isHidden="mobile" isSize={6}>
            <div className="contact-image">
              {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
              <Image Path={ContactImg} Class="logo-img" />
            </div>
          </Column>
          <Column isSize={6}>
            <div className="contact-content-block main-title-wrapper">
              <div className="sub-title-wrapper">
                <Typography className="sitemain-subtitle" tag="h6">
                  Send us mesage for any Info
                </Typography>
                <Typography className="site-subtitle2" tag="h6">
                  Call us for any emergency
                </Typography>
              </div>
              <Typography className="contact-dec" tag="p">
                +1 123 - 456 - 7890
              </Typography>
              <ContactForm btnText="REQUEST APPOINTMENT" />
            </div>
          </Column>
        </Columns>
      </Container>
    </div>
  </Section>
);

export default ContactEnterprise;