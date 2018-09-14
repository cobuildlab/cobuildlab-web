import React from 'react'
import { Link } from 'gatsby'
import { 
  Container,
  Footer,
  Columns,
  Column,
  Content,
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
                    <Column isFull>
                        <p>
                            Made with
                            by <a>Algus Dark</a>
                        </p>
                    </Column>
                </Columns>
                <Content isSize='small'>
                    <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
                    <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
                </Content>
            </Content>
        </Container>
    </Footer>
    )
  }
}
export default header
