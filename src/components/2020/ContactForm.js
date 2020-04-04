import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import { Field, Control, Input, TextArea } from 'bloomer';
import Button from './Button';


export default class Contact extends PureComponent {

  static defaultProps = {
    btnText: 'submit'
  }

  static propTypes = {
    btnText: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        email: '',
        phone: '',
        message: '',
        landingName: 'Cobuild Lab',
      },
      isLoading: false,
    };
    this.url = 'https://api.cobuild-lab.com/landing/contact';
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

  onSubmit(e) {
    e.preventDefault();
    const {
      data: { name, email, message, phone, landingName },
    } = this.state;

    if (!name.length) {
      toast.dismiss();
      toast.error("name can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (!email.length) {
      toast.dismiss();
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (!message.length) {
      toast.dismiss();
      toast.error("Message can't be empty", {
        position: 'bottom-right',
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
      landingName,
    };

    const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(this.url, settings)
      .then((res) => res.json())
      .then((response) => {

        if (response.statusCode >= 400) {
          toast.dismiss();

          toast.error(response.message, {
            position: 'bottom-right',
          });

          this.setState({
            isLoading: false,
          });
        } else {
          toast.dismiss();

          toast.success(response.message, {
            position: 'bottom-right',
          });

          navigate('/thanks-contact');
        }
      });
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
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input
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
            <Input
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
            <TextArea
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field isGrouped>
          <Control>
            <Button isLoading={isLoading} htmlType="submit">
              {btnText}
            </Button>
          </Control>
        </Field>
      </form>
    );
  }
}
