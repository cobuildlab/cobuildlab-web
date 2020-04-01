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
  Section 
} from 'bloomer';
// import Img from "gatsby-image"
import Image from '../../components/image';
import ContactImg from '../../../../assets/images/contact/woman.png';
import Button from '../../../2020/Button';
import Typography from '../../../2020/Typography';
import ContactBackgroundImages from '../../../../data/contact';
import './contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handelSubmit = () => {
    const error = {};
    if (!name) {
      error.name = 'First Name field shouldn’t be empty';
    }
    if (!email) {
      error.email = 'Email field shouldn’t be empty';
    }
    if (!message) {
      error.message = 'Message field shouldn’t be empty';
    }

    if (error) {
      setErrors(error);
    } else {
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Section >
      <div className="contact-wrapper" id="contact">
        <div className="contact-animation-images">
          {ContactBackgroundImages.map((img, index) => (
            <span key={`contact-img-${index}`} className={`image${index + 1}`}>
              <Image Path={img.img} />
            </span>
          ))}
        </div>
        <Container>
          <Columns>
            <Column isHidden="mobile"  isSize={6}>
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
                <form className="form">
                  <Field>
                    <Label>Name</Label>
                    <Control>
                      <Input  
                        value={name} 
                        onChange={setName} 
                        name="name" 
                        type="text" 
                        placeholder="John Doe" 
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
                        placeholder="write your message" 
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Button>Submit</Button>
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
