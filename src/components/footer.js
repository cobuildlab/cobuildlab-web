import React from 'react'
import { Link } from 'gatsby'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
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
  Button,
  Label,
} from 'bloomer'
import '../assets/css/index.css'
import { logo } from '../resources/cobuildlab.png'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { Icon } from 'react-icons-kit'
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial'
import { instagram } from 'react-icons-kit/fa/instagram'
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare'
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare'

class footer extends React.Component {
  state = {
    email: '',
    fullName: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault()

    console.log(this.state)

    addToMailchimp(this.state.email, {
      FNAME: this.state.fullName,
    }).then(data => {
      if (data.result === 'success') {
        toast.success(data.msg, {
          position: 'bottom-right',
        })

        this.setState({
          email: '',
          fullName: '',
        })
      } else {
        toast.error(data.msg, {
          position: 'bottom-right',
        })
      }
    })
  }

  render() {
    return (
      <Footer id="footer" className="is-fixed-bottom">
        <Container>
          <Content>
            <Columns>
              <Column isSize="1/3">
                <Title hasTextColor="white">Newsletter</Title>
                <form onSubmit={e => this.onSubmit(e)}>
                  <Field>
                    <Label hasTextColor="white">Full Name</Label>
                    <Control>
                      <Input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={this.state.fullName}
                        onChange={e => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label hasTextColor="white">Email</Label>
                    <Control>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field isGrouped>
                    <Control>
                      <button
                        className="button is-primary is-medium is-rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                      <ToastContainer />
                    </Control>
                  </Field>
                </form>
              </Column>
              <Column isSize="1/3">
                <Title hasTextColor="white">Follow Us</Title>
                <Content hasTextAlign="centered">
                  <p>
                    <br />
                    <a
                      className="icon-instagram"
                      href="https://www.instagram.com/cobuildlab"
                    >
                      <Icon size="24" icon={instagram} />
                    </a>
                    <a
                      className="icon-facebook"
                      href="https://www.facebook.com/cobuildlab"
                    >
                      <Icon size="24" icon={facebookOfficial} />
                    </a>
                    <a
                      className="icon-twitter"
                      href="https://twitter.com/cobuildlab"
                    >
                      <Icon size="24" icon={twitterSquare} />
                    </a>
                    <a
                      className="icon-linkedin"
                      href="https://www.linkedin.com/in/cobuildlab"
                    >
                      <Icon size="24" icon={linkedinSquare} />
                    </a>
                  </p>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Title hasTextColor="white">Contact Us</Title>
                <p>
                  Adress: 66 W Flagler St, Miami, Florida <br /> Phone: +1 (786)
                  600-3776 <br /> Email: contact@cobuildlab.com{' '}
                </p>
              </Column>
            </Columns>
            <Content isSize="small">
              <p>
                © 2018 All Rights Reserved | <a target="_blank">Cobuild Lab</a>.
              </p>
            </Content>
          </Content>
        </Container>
      </Footer>
    )
  }
}
export default footer
