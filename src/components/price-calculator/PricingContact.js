import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import {
  Container,
  Columns,
  Column,
  Field,
  Label as BloomerLabel,
  Control,
  Input,
  TextArea,
} from 'bloomer';
import { ToastContainer, toast } from 'react-toastify';
import { pdf } from '@react-pdf/renderer';
import styled from 'styled-components';
import H4 from '../Typography/H4';
import ButtonDefault from '../2020/Button/ButtonDefault';
import PricingContactImages from './PricingContactImages';
import template from '../pdf/PdfCalculatorTemplate';
import Error from '../Toast/Error';

const Form = styled.form`
  margin-top: 2em;
`;

const Label = styled(BloomerLabel)`
  color: #264a60;
`;

class PricingContact extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.transformToBase64 = this.transformToBase64.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isLoading: false,
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  }

  transformToBase64(blob) {
    const promise = new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
          resolve(reader.result.split(',')[1]);
        };
        reader.onerror = reject;
      } catch (error) {
        reject(error);
      }
    });

    return promise;
  }

  handleChange(e) {
    const field = { [e.target.name]: e.target.value };
    this.setState((state) => ({
      form: {
        ...state.form,
        ...field,
      },
    }));
  }

  async onSubmit(event) {
    try {
      event.preventDefault();
      const { calculatorData } = this.props;
      const { data, total } = calculatorData;
      const { form } = this.state;
      const { name, email, message } = form;

      if (!data || !total) {
        toast.dismiss();
        toast(<Error message="Select at least one calculator feature" />, {
          position: 'bottom-right',
          hideProgressBar: true,
        });
        return;
      }

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

      this.setState((state) => ({
        isLoading: !state.isLoading,
      }));

      const documentData = template({ data, total });
      const blob = await pdf(documentData).toBlob();
      const base64 = await this.transformToBase64(blob);

      const postData = {
        form: {
          email,
          name,
          message,
        },
        pdfUri: base64,
      };

      const settings = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      await fetch(
        'https://api.8base.com/cjnp8j12b000i01qm9zu7dug3/webhook/calculator-mail',
        settings,
      );

      this.setState((state) => ({
        isLoading: !state.isLoading,
      }));
      navigate('/thanks-contact');
    } catch (error) {
      console.error(error);
      this.setState((state) => ({
        isLoading: !state.isLoading,
      }));
      toast(<Error message="Error, the message could not be sent" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      throw new Error(error);
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        <ToastContainer />
        <Columns>
          <Column isSize={6}>
            <PricingContactImages />
          </Column>
          <Column isSize={6}>
            <H4>Get your estimate via email</H4>
            <Form onSubmit={this.onSubmit}>
              <Field>
                <Label htmlFor="pricingContactName">Name</Label>
                <Control>
                  <Input
                    name="name"
                    onChange={this.handleChange}
                    id="pricingContactName"
                    type="text"
                    placeholder="Name"
                  />
                </Control>
              </Field>
              <Field>
                <Label htmlFor="pricingContactemail">Email</Label>
                <Control>
                  <Input
                    name="email"
                    onChange={this.handleChange}
                    id="pricingContactemail"
                    type="email"
                    placeholder="Phone"
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label htmlFor="contanctFormMessage">Message</Label>
                  <TextArea
                    onChange={this.handleChange}
                    id="contanctFormMessage"
                    name="message"
                    placeholder="Message"
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <ButtonDefault isLoading={isLoading} type="submit">
                    Submit
                  </ButtonDefault>
                </Control>
              </Field>
            </Form>
          </Column>
        </Columns>
      </Container>
    );
  }
}

PricingContact.propTypes = {
  calculatorData: PropTypes.object.isRequired,
};

export default PricingContact;
