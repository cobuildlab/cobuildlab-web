import React from 'react';
import { Link, navigate } from 'gatsby';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  Container,
  Columns,
  Column,
  Content,
  Title,
  Field,
  TextArea,
  Subtitle,
  Control,
  Input,
  Label
} from 'bloomer';

class FormContact extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e, landingName) => {
    e.preventDefault();

    if (this.state.firstName.length <= 0) {
      toast.error('First name can\'t be empty', {
        position: 'bottom-right'
      });
      return;
    }

    if (this.state.lastName.length <= 0) {
      toast.error('Last name can\'t be empty', {
        position: 'bottom-right'
      });
      return;
    }

    if (this.state.email.length <= 0) {
      toast.error('Email can\'t be empty', {
        position: 'bottom-right'
      });
      return;
    }

    if (this.state.comment.length <= 0) {
      toast.error('Comment can\'t be empty', {
        position: 'bottom-right'
      });
      return;
    }

    const url = 'https://api.cobuild-lab.com/landing/contact';
    const data = Object.assign({ landingName }, this.state);
    const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch(url, settings)
      .then(res => res.json())
      .then(response => {
        if (response.statusCode >= 400) {
          toast.error(response.message, {
            position: 'bottom-right'
          });
        } else {
          toast.success(response.message, {
            position: 'bottom-right'
          });

          navigate('/thanks-contact');
        }
      });
  };

  render() {
    const { landingName } = this.props;
    return (
      <Container>
        <Content>
          <Columns>
            <Column
              className="p-f col-form"
              isSize={{ mobile: 12, desktop: '1/2' }}
            >
              <Content className="content-form">
                <Title isSize={2} className="title-section" hasTextAlign="left">
                  Contact us for a <strong>FREE</strong> consultation!
                </Title>
                <form
                  onSubmit={e => {
                    this.onSubmit(e, landingName);
                  }}
                >
                  <Columns>
                    <Column>
                      <Field>
                        <Label>First Name</Label>
                        <Control>
                          <Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={e => this.handleChange(e)}
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
                            onChange={e => this.handleChange(e)}
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
                        onChange={e => this.handleChange(e)}
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
                        onChange={e => this.handleChange(e)}
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
                    <small>
                      <Link target="_blank" to="/privacy-policy">
                        Here you can access the information about how we treat
                        your data.
                      </Link>
                    </small>
                  </Content>
                </form>
              </Content>
            </Column>
          </Columns>
        </Content>
      </Container>
    );
  }
}

export default FormContact;
