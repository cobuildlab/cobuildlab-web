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
  Label
} from 'bloomer';
import '../assets/css/index.css'
import {logo} from '../resources/cobuildlab.png' 
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

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
      <Footer id='footer' class="is-fixed-bottom">
        <Container>
            <Content>
              <Columns>
                  <Column isSize='1/3'>
                    <Title hasTextColor='white'>Newslatter</Title>
                    <Field>
                  <Label hasTextColor='white'>Full Name</Label>
                  <Control>
                      <Input type="text" placeholder='Full Name' />
                  </Control>
                  </Field>
                  <Field>
                    <Label hasTextColor='white'>Email</Label>
                    <Control>
                      <Input type="text" placeholder='Email' />
                    </Control>
                  </Field>
                  <Field isGrouped>
                    <Control>
                    <a className="button is-primary is-medium is-rounded">Submit</a>
                    </Control>
                  </Field>
                  </Column>
                  <Column isSize='1/3'>
                    <Title hasTextColor='white'>Follow Us</Title>
                  </Column>
                  <Column isSize='1/3'>
                    <Title hasTextColor='white'>Contact Us</Title>
                    <p>Adress:66 W Flagler St, Miami, <br/> Florida <br/> Phone:+1 (786) 600-3776 <br/> Email:contact@cobuildlab.com </p>
                  </Column>
              </Columns>
              <Content isSize='small'>
                <p>© 2018 All Rights Reserved | <a target="_blank">Cobuild Lab</a>.</p>
              </Content>
            </Content>
        </Container>
    </Footer>
    )
  }
}
export default header
