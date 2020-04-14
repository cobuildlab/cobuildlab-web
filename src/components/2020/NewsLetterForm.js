import React, { useCallback, useState } from 'react';
import { Field, Control, Input, Label } from 'bloomer';
import { ToastContainer, toast } from 'react-toastify';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import Button from './Button';
import Error from '../Toast/Error';
import Success from '../Toast/Success';

const Container = styled.div`
  margin-top: 1em;
  margin-bottom: 1.5em;
`;

const NewsLetterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [email],
  );

  const onSubmit = useCallback(
    async (event) => {
      try {
        event.preventDefault();

        if (!email.length) {
          toast.error(<Error message="Email can't be empty" />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });
          return;
        }

        setLoading(true);

        const request = await addToMailchimp(email);
        if (request.result === 'success') {
          toast(<Success message={request.msg} />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });
        }

        if (request.result === 'error') {
          toast(<Error message={request.msg} />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });
        }
        setLoading(false);
        setEmail('');
      } catch (error) {
        setLoading(false);
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      }
    },
    [email],
  );

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Field>
          <Control>
            <Label hasTextColor="white">Email</Label>
            <Input
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              isSize="small"
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button isLoading={loading} htmlType="submit" isBlock>
              Submit
            </Button>
          </Control>
        </Field>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default NewsLetterForm;
