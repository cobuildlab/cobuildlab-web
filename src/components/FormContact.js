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
  TextArea,
  Subtitle,
  Control,
  Input,
  Button,
  Label,
} from 'bloomer'
import '../assets/css/index.css'
import { logo } from '../resources/cobuildlab.png'
// Import typefaces


import { Icon } from 'react-icons-kit'
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial'
import { navigate } from "gatsby";

class FormContact extends React.Component {

  render() {
    return (
        <Container>
          <Content>
            <Columns>
            <Column className="p-f col-form" isSize={{mobile: 12, desktop: "1/2"}}>
              <Content className="content-form">
                <Title isSize={2} className="title-section" hasTextAlign="left">
                  Write Us!
                </Title>
                <Content isSize="small">
                  Your business takes off right now
                </Content>
                <form onSubmit={e => this.onSubmit(e)}>
                  <Columns>
                    <Column>
                      <Field>
                        <Label>First Name</Label>
                        <Control>
                          <Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            // value={this.state.firstName}
                            // onChange={e => this.handleChange(e)}
                          />
                        </Control>
                      </Field>
                    </Column>
                    <Column isSize="1/2">
                      <Field>
                        <Label>Last Name</Label>
                        <Control>
                          <Input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            // value={this.state.lastName}
                            // onChange={e => this.handleChange(e)}
                          />
                        </Control>
                      </Field>
                    </Column>
                  </Columns>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        // value={this.state.email}
                        // onChange={e => this.handleChange(e)}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Comment or Message</Label>
                    <Control>
                      <TextArea
                        name="comment"
                        placeholder="Your message or comment goes here"
                        // value={this.state.comment}
                        // onChange={e => this.handleChange(e)}
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
                    </Control>
                  </Field>
                  <Content hasTextAlign="centered">
                    <Subtitle>Privacy Policy</Subtitle>
                    <Link to="/privacy-policy">
                      Here you can access the information about how we treat
                      your data.
                    </Link>
                  </Content>
                </form>
                </Content>
              </Column>
            </Columns>
          </Content>
        </Container>
    )
  }
}
export default FormContact
