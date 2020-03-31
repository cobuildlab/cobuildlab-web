import React, { PureComponent } from 'react';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Columns, Column, Field, Control, Input } from 'bloomer';
import Button from '../Button';
import Typography from '../Typography';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './css/index.module.scss';

const title = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 2,
    fontWeight: 'bold',
  },
};

export default class NewsLetter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
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

    const { name, email } = this.state;

    if (!name.length) {
      toast.error("Your name can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (!email.length) {
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    }).then((data) => {
      if (data.result === 'success') {
        navigate('/thanks-newsletter');
      } else {
        toast.error(data.msg, {
          position: 'bottom-right',
        });
      }
    });
  }

  render() {
    const { email, name } = this.state;

    return (
      <Container>
        <ToastContainer />
        <div className="section-title">
          <Typography tag="h6" size={title} hasTextAlign="centered">
            Newsletter
          </Typography>
        </div>
        <form onSubmit={this.onSubmit}>
          <Columns isCentered>
            <Column isSize={{ mobile: 12, desktop: 4 }}>
              <Field>
                <Control>
                  <Input
                    className={styles.form_input}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </Control>
              </Field>
            </Column>
            <Column isSize={{ mobile: 12, desktop: 4 }}>
              <Field>
                <Control>
                  <Input
                    className={styles.form_input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Control>
              </Field>
            </Column>
            <Column isSize={{ mobile: 12, desktop: 2 }}>
              <Button type="submit">Submit</Button>
            </Column>
          </Columns>
        </form>
      </Container>
    );
  }
}
