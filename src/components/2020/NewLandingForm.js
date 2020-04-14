import React, { Component } from 'react';
import { Container, Title, Subtitle, Field, Control, Input } from 'bloomer';
import Button from './Button';
import { navigate, Link } from 'gatsby';
import { toast, ToastContainer } from 'react-toastify';
import LandingFormBadges from './LandingFormBadges';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Error from '../Toast/Error';
import Success from '../Toast/Success';

const Box = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 30px #264a6017;
  width: 100%;
  heigth: 100%;
  padding: 1.25rem;
`;

export default class NewLandingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      comment: '',
      email: '',
      phone: '',
      isLoading: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { landingName } = this.props;

    if (!this.state.firstName.length) {
      toast.dismiss();

      toast(<Error message="First name can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!this.state.lastName.length) {
      toast.dismiss();

      toast(<Error message="Last name can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!this.state.email.length) {
      toast.dismiss();

      toast(<Error message="Email can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!this.state.comment.length) {
      toast.dismiss();

      toast(<Error message="Comment can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    this.setState({ isLoading: true });

    const url = 'https://api.cobuild-lab.com/landing/contact';

    const data = {
      landingName,
      ...this.state,
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

          toast(<Error message={response.message} />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });

          this.setState({
            isLoading: false,
          });
        } else {
          toast.dismiss();

          toast(<Success message={response.message} />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });

          navigate('/thanks-contact');
        }
      });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <Box id={'landing-contact-form'}>
        <ToastContainer />
        <LandingFormBadges />
        <Container>
          <div className="colunm is-6 has-text-centered">
            <Title>
              Contact us for a <span className="free">FREE</span> <br /> consultation!
            </Title>
            <p>
              Call Us to: <span className="free">(786) 991-3467</span> or <br /> fill out this form
              and we will get in touch with you.
            </p>
          </div>

          <form onSubmit={this.onSubmit}>
            <Field>
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
            <Field>
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
            <Field>
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
              <Control>
                <Input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={(e) => this.handleChange(e)}
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Input
                  type="text"
                  name="comment"
                  placeholder="Comment or Message"
                  value={this.state.comment}
                  onChange={(e) => this.handleChange(e)}
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Button htmlType="submit" isLoading={isLoading}>
                  Submit
                </Button>
              </Control>
            </Field>
          </form>

          <div className="has-text-centered">
            <Subtitle className=" mt-20">Privacy Policy</Subtitle>
            <Link to="/privacy-policy" className="is-marginless">
              Here you can access the information about how we treat your data.
            </Link>
          </div>
        </Container>
      </Box>
    );
  }
}

NewLandingForm.propTypes = {
  landingName: PropTypes.string.isRequired,
};
