import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Error from '../Toast/Error';
import CbCheckbox from '../input/CbCheckbox';
import ButtonDefault from '../2020/Button/ButtonDefault';
import CbInput from '../input/CbInput';
import CbTextArea from '../input/CbTextArea';
import BannerBackground from '../2020/BannerBackground';
import styled from 'styled-components';
import { Column, Columns, Container, Control, Field } from 'bloomer';
import { TextIndigo, TextOrange } from '../2021/text/TextHelpers';
import { ReferralsDisclaimer } from './ReferralsDisclaimer';
import { ReferralsTermsAndConditions } from './ReferralsTermsAndConditions';
import { toast, ToastContainer } from 'react-toastify';

const LabelTextWrapped = styled.div`
  padding: 0rem 0.5rem;
  cursor: pointer;
`;

const Banner = styled(BannerBackground)`
  width: 40%;
  height: 40%;
  top: -20px;
  left: auto;
  right: -400px;
  transform: rotate(30deg);
`;

const ColumnsSection = styled(Columns)`
  padding: 0rem 1.5rem;
  @media screen and (min-width: 1024px) {
    padding: 0rem 0rem;
  }
`;

/**
 * @returns {React.Component} - Label Checkbox.
 */
function LabelCheckbox() {
  return (
    <LabelTextWrapped>
      <TextIndigo>I read</TextIndigo> <TextOrange>Disclaimer</TextOrange>{' '}
      <TextIndigo>and</TextIndigo> <TextOrange>Terms and Conditions</TextOrange>
    </LabelTextWrapped>
  );
}

const ReferralsProgram = () => {
  const [isLoading, setIsLoading] = useState(false);
  setIsLoading(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    bussines: '',
    bussinessDescription: '',
    referredFriend: '',
  });
  const [isAgree, setIsAgree] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, email, bussines, bussinessDescription, referredFriend } = values;

    if (!isAgree) {
      toast.dismiss();
      toast(<Error message="You must read and agree to the disclaimer and terms and conditions" />, {
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

    if (!bussines.length) {
      toast.dismiss();
      toast(<Error message="Business name can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!bussinessDescription.length) {
      toast.dismiss();
      toast(<Error message="Businesss description can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    setIsLoading(true);

    const data = {
      name,
      email,
      bussines,
      bussinessDescription,
      referredFriend,
      landing: 'From the referrals form test.', // <= Dumb hack to avoid error
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
      console.log(error);
      setIsLoading(false);

      toast(<Error message="An error has occurred" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
    }
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <ToastContainer />
        <Banner />
        <ColumnsSection cellPadding={'2'} style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          {
            // Form
          }
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <Columns style={{ flexWrap: 'wrap' }}>
              {
                // Name
              }
              <Column isSize={{ desktop: 6 }}>
                <Field>
                  <Control>
                    <CbInput
                      type={'text'}
                      name={'name'}
                      placeholder={'Your name / referral partner'}
                      onChange={handleChange}
                    />
                  </Control>
                </Field>
              </Column>
              {
                // Email
              }
              <Column isSize={{ desktop: 6 }}>
                <Field>
                  <Control>
                    <CbInput
                      type={'email'}
                      name={'email'}
                      placeholder={'Email'}
                      onChange={handleChange}
                    />
                  </Control>
                </Field>
              </Column>
              {
                // Business name
              }
              <Column isSize={{ default: 12 }}>
                <Field>
                  <Control>
                    <CbInput
                      type={'text'}
                      name={'bussines'}
                      placeholder={'Business name'}
                      onChange={handleChange}
                    />
                  </Control>
                </Field>
              </Column>

              {
                // Name of the referred friend
              }
              <Column isSize={{ default: 12 }}>
                <Field>
                  <Control>
                    <CbInput
                      type={'text'}
                      name={'referredFriend'}
                      placeholder={'Name of the referred friend'}
                      onChange={handleChange}
                    />
                  </Control>
                </Field>
              </Column>
            </Columns>
          </Column>

          {
            // Business description
          }
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <Field style={{ height: '100%' }}>
              <Control style={{ height: '100%' }}>
                <CbTextArea
                  name="bussinessDescription"
                  placeholder="Business description"
                  onChange={handleChange}
                  height={100}
                />
              </Control>
            </Field>
          </Column>
        </ColumnsSection>
        <ColumnsSection>
          {
            // Disclaimer
          }
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <ReferralsDisclaimer />
          </Column>

          {
            /// Terms and conditions
          }
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <ReferralsTermsAndConditions />
          </Column>
        </ColumnsSection>

        {
          // Latest text.
        }
        <ColumnsSection style={{ marginBottom: '4rem' }}>
          <Column isSize={{ desktop: 9 }}>
            <TextIndigo>
              * Referral bonuses are earned only in projects that are signed, and in which the first
              invoice has been collected.
              <br></br>* The maximum cash earned by the project will be $5,000 or the equivalent of 10% of the
              total cost of the project, whichever number is lower.
            </TextIndigo>
          </Column>

          {
            // Submit button.
          }
          <Column isSize={{ desktop: 3 }} hasTextAlign="centered">
            <div style={{ marginBottom: '0.5rem' }}>
              <Field
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <Control
                  onClick={() => {
                    setIsAgree(!isAgree);
                  }}
                  style={{
                    display: 'inherit',
                    alignItems: 'center',
                  }}>
                  <LabelCheckbox />
                  <CbCheckbox checked={isAgree} />
                </Control>
              </Field>
            </div>

            <ButtonDefault isBlock type="submit" isLoading={isLoading}>
              SUBMIT
            </ButtonDefault>
          </Column>
        </ColumnsSection>
      </form>
    </Container>
  );
};

export default ReferralsProgram;
