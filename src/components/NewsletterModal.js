import React from 'react'
import {
  Container,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  Field,
  Label,
  Control,
  Input,
} from 'bloomer'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { toast } from 'react-toastify'
import { navigate } from 'gatsby'
import { BtnOrange } from './ui-v3/btn/BtnOrange'
import { BtnWhite } from './ui-v3/btn/BtnWhite'
import { LabelTitle } from './ui-v3/LabelTitle'
import { H2Subtitle } from './ui-v3/H2Subtitle'

class NewsletterModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      showModal: false,
      isLoading: false,
    }
    this.onSubmitModal = this.onSubmitModal.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.calculateScrollDistance = this.calculateScrollDistance.bind(this)
  }

  componentDidMount() {     
    var oldWeek = localStorage.getItem('week')
    const toDay = Date.now()
    console.log("oldWeek 1", oldWeek);
    console.log("toDay 1", toDay);

    window.onscroll = () => {
      if (this.calculateScrollDistance() === 50 && (oldWeek < toDay - 1 * 24 * 60 * 60 * 1000 || oldWeek === undefined)) {
        if (oldWeek === null || oldWeek === undefined) {
          console.log("oldWeek 2", oldWeek);
          console.log("toDay 2", toDay);
          oldWeek = toDay
        }
        console.log("oldWeek 3",oldWeek);
        console.log("toDay 3",toDay);
        localStorage.setItem('week', toDay)
        this.handleModal(true)
      }
    }
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset
    const winHeight = window.innerHeight
    const docHeight = this.getDocHeight()

    const totalDocScrollLength = docHeight - winHeight
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100)

    return scrollPostion
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmitModal = e => {
    e.preventDefault()

    if (this.state.email.length <= 0) {
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    addToMailchimp(this.state.email, {
      //   FNAME: this.state.fullName,
    }).then(data => {
      if (data.result === 'success') {
        navigate('/thanks-newsletter')
      } else {
        toast.error(data.msg, {
          position: 'bottom-right',
        })
      }
    })
    this.handleModal(false)
  }

  handleModal = showModal => {
    this.setState({
      showModal,
    })
  }

  render() {
    const { showModal } = this.state

    return (
      <Modal isActive={showModal}>
        <ModalBackground
          style={{ backgroundColor: 'rgba(118, 132, 141, 1)', opacity: '0.5' }}
        />
        <ModalCard>
          <ModalCardBody
            style={{
              paddingTop: '37px',
              paddingBottom: '59px',
              paddingLeft: '56px',
              paddingRight: '58px',
              width: '600px',
              height: '470px',
            }}
          >
            <Container>
              <LabelTitle>Newsletter</LabelTitle>
              <H2Subtitle>
                Problem-solution fit: Observe the Customer, think as the
                Customer, be the Customer.Problem-solution fit: Observe the
              </H2Subtitle>
              <br />
              <Field>
                <Label>E-mail</Label>
                <Control>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                    style={{
                      background: '#F4F6FB 0% 0% no-repeat padding-box',
                      boxShadow: '0px 8px 20px #264A6052!important',
                      opacity: '1',
                    }}
                  />
                </Control>
              </Field>
              <Field isGrouped style={{ justifyContent: 'flex-end' }}>
                <Control>
                  <br />
                  <BtnWhite handleModal={this.handleModal}>No Thanks</BtnWhite>
                </Control>
                <Control>
                  <br />
                  <BtnOrange onSubmitModal={e => this.onSubmitModal(e)}>
                    Submit
                  </BtnOrange>
                </Control>
              </Field>
            </Container>
          </ModalCardBody>
        </ModalCard>
      </Modal>
    )
  }
}

export default NewsletterModal
