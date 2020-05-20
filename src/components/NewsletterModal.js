import React from 'react';
import {
  Container,
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Field,
  Label,
  Control,
  Input,
} from 'bloomer';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { toast } from 'react-toastify';
import { navigate } from 'gatsby';
import moment from 'moment';
import { BtnOrange } from './ui-v3/btn/BtnOrange';
import { BtnWhite } from './ui-v3/btn/BtnWhite';
import { LabelTitle } from './ui-v3/LabelTitle';
import { H2Subtitle } from './ui-v3/H2Subtitle';
import styled from 'styled-components';

const Body = styled(ModalContent)`
  padding: 37px 58px 59px 56px;
  max-width: 600px;
  min-height: 470px;
  width: 100%;
  margin: auto;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    padding: 1em;
    display: flex;
    align-items: center;
  }
`;

class NewsletterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      showModal: false,
      isLoading: false,
    };
    this.onSubmitModal = this.onSubmitModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.showModalOnMount = this.showModalOnMount.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.timeOutID = null;
    this.localStoreKey = 'news-letter-show-time';
  }

  componentDidMount() {
    this.showModalOnMount();
  }

  showModalOnMount() {
    const timeToShow = 1000;
    const localDuration = localStorage.getItem(this.localStoreKey);
    const currentDate = new moment();

    if (!localDuration) {
      this.timeOutID = setTimeout(() => this.handleModal(true), timeToShow);
    } else {
      const storedLocalTime = JSON.parse(localDuration);
      const { isCancel, date } = storedLocalTime;
      const cancelDate = moment(date);
      const duration = moment.duration(currentDate.diff(cancelDate));
      const { _data } = duration;
      // check is 30 days is done
      if (isCancel && _data && _data.days >= 30) {
        this.timeOutID = setTimeout(() => this.handleModal(true), timeToShow);
        return;
      }

      // if the user is register show after 1 year
      if (_data && _data.years >= 1) {
        this.timeOutID = setTimeout(() => this.handleModal(true), timeToShow);
        return;
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutID);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitModal = (e) => {
    e.preventDefault();

    if (this.state.email.length <= 0) {
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    addToMailchimp(this.state.email, {
      //   FNAME: this.state.fullName,
    }).then((data) => {
      if (data.result === 'success') {
        navigate('/thanks-newsletter');
      } else {
        toast.error(data.msg, {
          position: 'bottom-right',
        });
      }
    });
    this.handleModal(false);
    this.storeDate(false);
  };

  onCloseModal() {
    this.storeDate(true);
  }

  handleModal = (showModal) => {
    this.setState({
      showModal,
    });
  };

  storeDate = (isCancel) => {
    const localDuration = localStorage.getItem(this.localStoreKey);
    if (localDuration) {
      localStorage.removeItem(this.localStoreKey);
    }
    const data = JSON.stringify({
      isCancel: isCancel,
      date: new Date(),
    });
    localStorage.setItem(this.localStoreKey, data);
    this.handleModal(false);
  };

  render() {
    const { showModal } = this.state;

    return (
      <Modal isActive={showModal}>
        <ModalBackground isOverlay onClick={this.onCloseModal} />
        <Body isOverlay>
          <Container>
            <LabelTitle>Newsletter</LabelTitle>
            <H2Subtitle>
              Problem-solution fit: Observe the Customer, think as the Customer, be the
              Customer.Problem-solution fit: Observe the
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
                  onChange={this.handleChange}
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
                <BtnWhite handleModal={this.onCloseModal}>No Thanks</BtnWhite>
              </Control>
              <Control>
                <br />
                <BtnOrange onSubmitModal={this.onSubmitModal}>Submit</BtnOrange>
              </Control>
            </Field>
          </Container>
        </Body>
        <ModalClose onClick={this.onCloseModal} />
      </Modal>
    );
  }
}

export default NewsletterModal;
