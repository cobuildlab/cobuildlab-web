import React, { PureComponent } from 'react';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import {
  Container,
  Title,
  Column,
  Columns,
  Content,
  Field,
  Label,
  Control,
  Input,
  TextArea,
} from 'bloomer';

import img from '@2020/resources/home/coubuild-v.svg';

export default class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comment: '',
      isVerified: true,
      isLoading: false,
      landingName: 'Cobuild Lab',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.firstName.length <= 0) {
      toast.dismiss();

      toast.error("First name can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (this.state.lastName.length <= 0) {
      toast.dismiss();

      toast.error("Last name can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (this.state.email.length <= 0) {
      toast.dismiss();

      toast.error("Email can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (this.state.comment.length <= 0) {
      toast.dismiss();

      toast.error("Comment can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    this.setState({
      isLoading: true,
    });

    const url = 'https://api.cobuild-lab.com/landing/contact';

    const { firstName, lastName, email, phone, comment, landingName } = this.state;

    const data = {
      firstName,
      lastName,
      email,
      phone,
      comment,
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

    fetch(url, settings)
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
    return (
      <Container>
        <ToastContainer />
        <Columns isCentered>
          <Column className="p-f" isSize="1/2">
            <img src={img} alt="contact form" style={{ width: '100%', height: '100%' }} />
          </Column>
          <Column className="p-f" isSize="1/2">
            <Title isSize={2} className="title-section" hasTextAlign="left">
              Write Us!
            </Title>
            <Content isSize="small">Your business takes off right now</Content>
            <form onSubmit={(e) => this.onSubmit(e)}>
              <Columns>
                <Column isSize="1/2">
                  <Field>
                    <Label>First Name</Label>
                    <Control>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={(e) => this.handleChange(e)}
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
                        value={this.state.lastName}
                        onChange={(e) => this.handleChange(e)}
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
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Control>
              </Field>
              <Field>
                <Label>Phone</Label>
                <Control>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Phone number is optional"
                    value={this.state.phone}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Control>
              </Field>
              <Field>
                <Label>Comment or Message</Label>
                <Control>
                  <TextArea
                    name="comment"
                    placeholder="Your message or comment goes here"
                    value={this.state.comment}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Control>
              </Field>
              <Field isGrouped>
                <Control>
                  <button className="button is-primary is-medium is-rounded" type="submit">
                    Submit
                  </button>
                </Control>
              </Field>
            </form>
          </Column>
        </Columns>
      </Container>
    );
  }
}
