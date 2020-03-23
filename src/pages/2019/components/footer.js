/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  Container,
  Footer,
  Columns,
  Column,
  Content,
  Title,
  Field,
  Control,
  Input,
  Label,
} from 'bloomer';
import '../assets/css/index.css';
// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { Icon } from 'react-icons-kit';
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial';
import { instagram } from 'react-icons-kit/fa/instagram';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { Link } from '@reach/router';
import * as moment from 'moment';

class MyFooter extends React.Component {
  state = {
    email: '',
    fullName: '',
    isVerified: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.fullName.length <= 0) {
      toast.error("Your name can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (this.state.email.length <= 0) {
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    addToMailchimp(this.state.email, {
      FNAME: this.state.fullName,
    }).then((data) => {
      if (data.result === 'success') {
        navigate('/thanks-newsletter');
      } else {
        toast.error(data.msg, {
          position: 'bottom-right',
        });
      }
    });
  };

  render() {
    return (
      <Footer id="footer" className="is-fixed-bottom">
        <Container>
          <Content>
            <Columns>
              <Column isSize="1/3">
                <Title hasTextColor="white">Newsletter</Title>
                <form onSubmit={(e) => this.onSubmit(e)}>
                  <Field>
                    <Label hasTextColor="white">Full Name</Label>
                    <Control>
                      <Input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={this.state.fullName}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label hasTextColor="white">Email</Label>
                    <Control>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field isGrouped>
                    <Control>
                      <br />
                      <button className="button is-primary is-medium is-rounded" type="submit">
                        Submit
                      </button>
                      <ToastContainer />
                    </Control>
                  </Field>
                </form>
              </Column>
              <Column isSize="1/3">
                <Title hasTextAlign="centered" hasTextColor="white">
                  Follow Us
                </Title>
                <br />
                <Columns isMobile isCentered>
                  <Column className="is-variable is-3" isSize={{ mobile: 3, desktop: '1/4' }}>
                    <a
                      className="icon-instagram"
                      href="https://www.instagram.com/cobuildlab"
                      target="_blank">
                      <Icon size="24" icon={instagram} className="icon-center" />
                    </a>
                  </Column>
                  <Column className="is-variable is-3" isSize={{ mobile: 3, desktop: '1/4' }}>
                    <a
                      className="icon-facebook"
                      href="https://www.facebook.com/cobuildlab"
                      target="_blank">
                      <Icon size="24" icon={facebookOfficial} className="icon-center" />
                    </a>
                  </Column>
                  <Column className="is-variable is-3" isSize={{ mobile: 3, desktop: '1/4' }}>
                    <a
                      className="icon-twitter"
                      href="https://twitter.com/cobuildlab"
                      target="_blank">
                      <Icon size="24" icon={twitterSquare} className="icon-center" />
                    </a>
                  </Column>
                  <Column className="is-variable is-3" isSize={{ mobile: 3, desktop: '1/4' }}>
                    <a
                      className="icon-linkedin"
                      href="https://www.linkedin.com/company/cobuildlab"
                      target="_blank">
                      <Icon size="24" icon={linkedinSquare} className="icon-center" />
                    </a>
                  </Column>
                </Columns>
                <br />
                <br />
                <Link to="/development-blog">Development Blog</Link>
                <br />
              </Column>
              <Column isSize="1/3">
                <Title hasTextColor="white">Contact Us</Title>
                <p>
                  Adress: 66 W Flagler St, Miami, Florida <br /> Phone: +1 (786) 991-3467 <br />{' '}
                  Email: contact@cobuildlab.com{' '}
                </p>
              </Column>
            </Columns>
            <Content isSize="small">
              <p>
                © {moment().format('Y')} <strong>Cobuild Lab</strong> All Rights Reserved.
              </p>
            </Content>
          </Content>
        </Container>
      </Footer>
    );
  }
}

export default MyFooter;
