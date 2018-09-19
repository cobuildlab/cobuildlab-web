import React from 'react'
import { Link } from 'gatsby'
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

import { Icon } from 'react-icons-kit'
import {facebookOfficial} from 'react-icons-kit/fa/facebookOfficial'
import {instagram} from 'react-icons-kit/fa/instagram'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import { Span } from 'opentracing';

class header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  onClickNav = () => {
    this.setState(({ isActive }) => ({
      isActive: !isActive,
    }))
  }
  render() {
    return (
      <Footer id="footer" className="is-fixed-bottom">
        <Container>
          <Content>
            <Columns>
              <Column isSize="1/3">
                <Title hasTextColor="white">Newslatter</Title>
                <Field>
                  <Label hasTextColor="white">Full Name</Label>
                  <Control>
                    <Input type="text" placeholder="Full Name" />
                  </Control>
                </Field>
                <Field>
                  <Label hasTextColor="white">Email</Label>
                  <Control>
                    <Input type="text" placeholder="Email" />
                  </Control>
                </Field>
                <Field isGrouped>
                  <Control>
                    <a className="button is-primary is-medium is-rounded">
                      Submit
                    </a>
                  </Control>
                </Field>
              </Column>
              <Column  isSize="1/3">
                <Title hasTextColor="white">Follow Us</Title>
                <Content hasTextAlign='centered'>
                <p>
                  <br/>
                  <a className="icon-instagram" href="https://www.instagram.com/cobuildlab"><Icon size="24" icon={instagram}/></a>
                  <a className="icon-facebook" href="https://www.facebook.com/cobuildlab"><Icon size="24" icon={facebookOfficial}/></a>
                  <a className="icon-twitter" href="https://twitter.com/cobuildlab"><Icon size="24" icon={twitterSquare}/></a>
                  <a className="icon-linkedin" href="https://www.linkedin.com/in/cobuildlab"><Icon size="24" icon={linkedinSquare}/></a>
                </p>
                </Content>
              </Column>
              <Column isSize="1/3">
                <Title hasTextColor="white">Contact Us</Title>
                <p>
                  Adress:66 W Flagler St, Miami, <br /> Florida <br /> Phone:+1
                  (786) 600-3776 <br /> Email:contact@cobuildlab.com{' '}
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
export default header
