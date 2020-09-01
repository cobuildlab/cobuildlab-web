import React, { useCallback, useState } from 'react';
import { Field, Control, Input, Label } from 'bloomer';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import SocialMedia from './SocialMedia';
import styled from 'styled-components';
import ButtonDefault from '../../../2020/Button/ButtonDefault';
import Error from '../../../Toast/Error';
import { FooterTitleContainer, FooterTitle, FooterColumnContent } from './FooterComponents';

const Container = styled.div`
  margin-top: 0.5m;
  margin-bottom: 1.5em;
`;

const NewsLetterFormFooter = () => {
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
          toast.dismiss();
          toast(<Error message="Email can't be empty" />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });
          return;
        }

        setLoading(true);

        const request = await addToMailchimp(email);
        if (request.result === 'success') {
          navigate('/thanks-contact');
        }

        if (request.result === 'error') {
          toast.dismiss();
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
        // see below htmlFor how to handle errors
      }
    },
    [email],
  );

  return (
    <FooterColumnContent>
      <FooterTitleContainer>
        <FooterTitle>Stay with us</FooterTitle>
      </FooterTitleContainer>
      <Container>
        <form onSubmit={onSubmit}>
          <Field>
            <Control>
              <Label htmlFor="newsLetterEmail" hasTextColor="white">
                Email
              </Label>
              <Input
                id="newsLetterEmail"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                isSize="small"
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <ButtonDefault isLoading={loading} type="submit" isBlock>
                Submit
              </ButtonDefault>
            </Control>
          </Field>
        </form>
        <ToastContainer />
      </Container>
      <SocialMedia />
    </FooterColumnContent>
  );
};

export default NewsLetterFormFooter;
