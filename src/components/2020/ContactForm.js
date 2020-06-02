import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import { Field, Control, Input, TextArea, Label as BloomerLabel } from 'bloomer';
import styled from 'styled-components';
import ButtonDefault from './Button/ButtonDefault';
import Error from '../Toast/Error';
// import Success from '../Toast/Success';

const Label = styled(BloomerLabel)`
  color: #264a60;
`;

export default class Contact extends PureComponent {
  static defaultProps = {
    btnText: 'submit',
  };

  static propTypes = {
    btnText: PropTypes.string,
    landingName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { landingName } = this.props;
    this.state = {
      data: {
        name: '',
        email: '',
        phone: '',
        message: '',
        landingName,
      },
      isLoading: false,
    };
    this.url = '';
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const field = { [e.target.name]: e.target.value };
    this.setState((state) => ({
      data: {
        ...state.data,
        ...field,
      },
    }));
  }

  async onSubmit(event) {
    event.preventDefault();
    const {
      data: { name, email, message, phone, landingName },
    } = this.state;

    if (!name.length) {
      toast.dismiss();
      toast(<Error message="name can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!email.length) {
      toast.dismiss();
      toast(<Error message="Email can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!message.length) {
      toast.dismiss();
      toast(<Error message="Message can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    this.setState({
      isLoading: true,
    });

    const data = {
      name,
      email,
      message,
      phone,
      landing: landingName,
    };

    const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    try {
      await fetch(process.env.CONTACT_FORM_API, settings);
      navigate('/thanks-contact');
    } catch (error) {
      this.setState(
        {
          isLoading: false,
        },
        () => {
          toast(<Error message="An error has occurred" />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });
        },
      );
    }
  }

  render() {
    const { btnText } = this.props;
    const {
      data: { name, phone, email, message },
      isLoading,
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <ToastContainer />
        <Field>
          <Control>
            <Label htmlFor="contanctFormName">Name</Label>
            <Input
              id="contanctFormName"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label htmlFor="contanctFormPhone">Phone</Label>
            <Input
              id="contanctFormPhone"
              type="number"
              name="phone"
              placeholder="Phone number is optional"
              value={phone}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label htmlFor="contanctFormEmail">Email</Label>
            <Input
              id="contanctFormEmail"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label htmlFor="contanctFormMessage">Message</Label>
            <TextArea
              id="contanctFormMessage"
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field isGrouped>
          <Control>
            <ButtonDefault isLoading={isLoading} type="submit">
              {btnText}
            </ButtonDefault>
          </Control>
        </Field>
      </form>
    );
  }
}
