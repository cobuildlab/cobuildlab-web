import React, { useState } from 'react';
import {
  Container,
  Columns,
  Column,
  Field,
  Label,
  Control,
  Input,
  TextArea,
  Section,
} from 'bloomer';
// import Img from "gatsby-image"
import Image from '../../components/image';
import ContactImg from '../../../../assets/images/contact/cobuild-contact4.png';
import Button from '../../../2020/Button';
import Typography from '../../../2020/Typography';
import ContactBackgroundImages from '../../../../data/contact';
import './contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors] = useState({});

  // const handelSubmit = () => {
  //   const error = {};
  //   if (!name) {
  //     error.name = 'First Name field shouldn’t be empty';
  //   }
  //   if (!email) {
  //     error.email = 'Email field shouldn’t be empty';
  //   }
  //   if (!message) {
  //     error.message = 'Message field shouldn’t be empty';
  //   }
  //
  //   if (error) {
  //     setErrors(error);
  //   } else {
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //   }
  // };

  return (
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
                    Let's get started!
                  </Typography>
                  <Typography className="site-subtitle2" tag="h6" style="">
                    Call us or message us to get your next project started
                  </Typography>
                </div>
                <Typography className="contact-dec" tag="p">
                  +1 (786) 991-3467
                </Typography>
                <form className="form">
                  <Field>
                    <Label>Name</Label>
                    <Control>
                      <Input
                        value={name}
                        onChange={setName}
                        name="name"
                        type="text"
                        placeholder="First and Last Name"
                        isColor={errors && errors.name && 'danger'}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                      <Input
                        value={email}
                        onChange={setEmail}
                        name="email"
                        type="text"
                        placeholder="example@gmail.com"
                        isColor={errors && errors.email && 'danger'}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Message</Label>
                    <Control>
                      <TextArea
                        value={message}
                        onChange={setMessage}
                        name="message"
                        placeholder="Write your message"
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Button>REQUEST APPOINTMENT</Button>
                    </Control>
                  </Field>
                </form>
              </div>
            </Column>
          </Columns>
        </Container>
      </div>
    </Section>
  );
};

export default Contact;
