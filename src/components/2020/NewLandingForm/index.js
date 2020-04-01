import React, { Component } from 'react';
import { Container, Title, Subtitle, Field, Label, Control, Input } from 'bloomer';
import Button from '../Button'; 
import { navigate, Link } from 'gatsby';
import Loading from '../../Loading';
import { toast } from 'react-toastify';

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

  onSubmit = (e, landingName) => {
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
  };

  render() {
    const { landingName } = this.props;
    const { isLoading } = this.state;
    return (
      <Container>
        <div className="colunm is-6 has-text-centered" >
          <Title >
            Contact us for a <span className="free">FREE</span> <br /> consultation!
          </Title>
          <p>
            Call Us to: <span className="free">(786) 991-3467</span> or <br /> fill out this form
              and we will get in touch with you.
          </p>
        </div>
          
        <form onSubmit={(e) => this.onSubmit(e, landingName) }>
          <Field>
            <Control>
              <Input 
                type="text"
                required
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
                required
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
                required
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
                required
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
                required
                name="comment"
                placeholder="Comment or Message"
                value={this.state.comment}
                onChange={(e) => this.handleChange(e)}
              />
            </Control>
          </Field>

          {isLoading ? (
            <Loading loading={isLoading} />
          ) : (
            <Button type="submit">
              Submit
            </Button>
          )}

        </form>
          
        <div className="has-text-centered">
          <Subtitle className=" mt-20">Privacy Policy</Subtitle>
          <Link to="/privacy-policy" className="is-marginless">
            Here you can access the information about how we treat your data.
          </Link>
        </div>
      </Container>
    );
  }
}
