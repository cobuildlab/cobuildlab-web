import React from 'react'
import { Container, Modal, ModalBackground, ModalCard, ModalCardBody } from 'bloomer'
import {
   Field,
   Label,
   Control,
   Input,
} from 'bloomer'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { toast } from 'react-toastify'
import { navigate } from 'gatsby'
import logo from '../resources/icons/gear.svg'

const styleNewsletter = {
   marginLeft: '5px', marginBottom: '15px', top: '91px', left: '213px', width: '222px', height: '56px', textAlign: 'left', fontFamily: 'Light ', fontSize: '42px', letterSpacing: '0', color: '#264A60', opacity: '1'
}

const styleSecond = {
   marginTop: '10px', marginBottom: '10px', top: '167px', left: '154px', width: '350px', height: '76', textAlign: 'left', fontFamily: 'Regular', fontSize: '18px', letterSpacing: '0', color: '#264A60', opacity: '1'
}

class ModalSletter extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         email: '',
         isLoading: false
      }
      this.onSubmitModal = this.onSubmitModal.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value,
      })
   }

   onSubmitModal = (e) => {
      e.preventDefault()

      if (this.state.email.length <= 0) {
         toast.error('Email can\'t be empty', {
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
      this.onClose()
   }

   onClose = () => {
      this.props.closeModal()
   }

   render() {
      const { isActive, closeModal } = this.props;

      return (
         <Modal isActive={isActive} >
            <ModalBackground />
            <ModalCard >
               <ModalCardBody style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                  <Container>
                     <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <img src={logo} width="40px" alt="Cobuild"></img>
                        <h2 style={ styleNewsletter }>
                           Newsletter
							   </h2>
                     </div>

                     <h2 style={ styleSecond }>
                        Problem-solution fit: Observe the Customer, think as the Customer, be the Customer.Problem-solution fit: Observe the
                     </h2>
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
                              style={{ background: '#F4F6FB 0% 0% no-repeat padding-box', boxShadow: '0px 8px 20px #264A6052', opacity: '1' }}
                           />
                        </Control>
                     </Field>
                     <Field isGrouped style={{ justifyContent: 'center' }}>
                        <Control>
                           <br />
                           <button
                              className="button is-primary is-medium"
                              style={{ borderRadius: '0px!important', border: '0!important', textTransform: 'uppercase' }}
                              onClick={() => closeModal()}
                           >
                              No Thanks
                           </button>
                        </Control>
                        <Control>
                           <br />
                           <button
                              className="button is-primary is-medium modalButon"
                              style={{ borderRadius: '0px!important', border: '0!important', boxShadow: '0px 8px 25px #E76C2999', textTransform: 'uppercase' }}
                              onClick={e => this.onSubmitModal(e)}
                           >
                              Submit
                           </button>
                        </Control>
                     </Field>
                  </Container>
               </ModalCardBody>
            </ModalCard>
         </Modal>
      )
   }
}

export default ModalSletter