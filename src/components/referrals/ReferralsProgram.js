import React, { useState } from 'react';
// import { useStaticQuery, graphql, navigate } from 'gatsby';
import {
  Column,
  Columns,
  Container,
  Control,
  Field,
  // Input,
  // Label as BloomerLabel,
  // TextArea,
} from 'bloomer';
// import Img from 'gatsby-image';
// import Paragraph from '../Typography/Paragraph';

import //toast,

//  ToastContainer
'react-toastify';

import ButtonDefault from '../2020/Button/ButtonDefault';

// import styled from 'styled-components';
// import Error from '../Toast/Error';
import { ReferralsDisclaimer } from './ReferralsDisclaimer';
import { ReferralsTermsAndConditions } from './ReferralsTermsAndConditions';
import CbInput from '../input/CbInput';
import CbTextArea from '../input/CbTextArea';
// import { List, ListItem } from '../Typography/List';
import { TextIndigo, TextOrange } from '../2021/text/TextHelpers';

// const Label = styled(BloomerLabel)`
//   color: #264a60;
// `;

// const ColumnsStyled = styled(Columns)`
//   margin: 0px !important;
// `;

// const InputStyled = styled(Input)`
//   border-radius: 7px !important;
//   box-shadow: 4px 4px 4px -4px rgba(0,0,0,0.75)!important;
// }
// `;

// const TextAreaStyled = styled(TextArea)`
//   border-radius: 7px !important;
//   box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.75) !important;
// `;

// const DivButtonStyled = styled.div`
//   float: right;
//   margin-bottom: 20px;
// `;

const ReferralsProgram = () => {
  const [isLoading, setIsLoading] = useState(false);
  setIsLoading(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    bussines: '',
    bussinessDescription: '',
  });

  // const data = useStaticQuery(query);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const { name, email, bussines, bussinessDescription } = values;

  //   if (!name.length) {
  //     toast.dismiss();
  //     toast(<Error message="name can't be empty" />, {
  //       position: 'bottom-right',
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }

  //   if (!email.length) {
  //     toast.dismiss();
  //     toast(<Error message="Email can't be empty" />, {
  //       position: 'bottom-right',
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }

  //   if (!bussines.length) {
  //     toast.dismiss();
  //     toast(<Error message="Bussine's name can't be empty" />, {
  //       position: 'bottom-right',
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }

  //   if (!bussinessDescription.length) {
  //     toast.dismiss();
  //     toast(<Error message="Bussine's descriptio can't be empty" />, {
  //       position: 'bottom-right',
  //       hideProgressBar: true,
  //     });
  //     return;
  //   }

  //   setIsLoading(true);

  //   const data = {
  //     name,
  //     email,
  //     bussines,
  //     bussinessDescription,
  //   };

  //   const settings = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   try {
  //     await fetch(process.env.CONTACT_FORM_API, settings);
  //     navigate('/thanks-contact');
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);

  //     toast(<Error message="An error has occurred" />, {
  //       position: 'bottom-right',
  //       hideProgressBar: true,
  //     });
  //   }
  // };

  return (
    <>
      {/* <Columns className="referrals-page">
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <Img fluid={data.file.childImageSharp.fluid} alt="" />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <Column isSize={{ mobile: 12, desktop: 10 }}>
            <Paragraph>
              Share with your contacts the opportunity to develop a professional, agile, and
              cost-effective software tool that improves their company and personal life. And you,
              earn $5000 by bringing them as customers of our software company. It’s simple- refer
              qualified customers, and as a thank you, you’ll receive a bonus! Payment will send to
              your account after the first invoice payment has effective.
            </Paragraph>
          </Column>
          <>
            <form onSubmit={onSubmit}>
              <ToastContainer />
              <ColumnsStyled>
                <Column isSize={{ mobile: 10, desktop: 5 }}>
                  <Field>
                    <Control>
                      <Label htmlFor="contanctFormName">Name</Label>
                      <InputStyled
                        id="contanctFormName"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                      />
                    </Control>
                  </Field>
                </Column>
                <Column isSize={{ mobile: 10, desktop: 5 }}>
                  <Field>
                    <Control>
                      <Label htmlFor="contanctFormName">E-mail</Label>
                      <InputStyled
                        id="contanctFormEmail"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                    </Control>
                  </Field>
                </Column>
              </ColumnsStyled>
              <Column isSize={{ mobile: 10, desktop: 10 }}>
                <Field>
                  <Control>
                    <Label htmlFor="contanctFormPhone">Bussine&apos;s name</Label>
                    <InputStyled
                      id="contanctFormBussines"
                      type="text"
                      name="bussines"
                      placeholder="Bussine's name"
                      onChange={handleChange}
                    />
                  </Control>
                </Field>
              </Column>
              <Column isSize={{ mobile: 10, desktop: 10 }}>
                <Field>
                  <Control>
                    <Label htmlFor="contanctFormEmail">Bussine&apos;s description</Label>
                    <TextAreaStyled
                      id="contanctFormEmail"
                      type="email"
                      name="bussinessDescription"
                      placeholder="Bussine's description"
                      onChange={handleChange}
                    />
                  </Control>
                </Field>
              </Column>
              <Column isSize={{ mobile: 10, desktop: 10 }}>
                <Field>
                  <Control>
                    <DivButtonStyled>
                      <ButtonDefault type="submit" isLoading={isLoading}>
                        {'Send'}
                      </ButtonDefault>
                    </DivButtonStyled>
                  </Control>
                </Field>
              </Column>
            </form>
          </>
        </Column>
      </Columns> */}
      <Container>
        <Columns style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <Column isSize={{ desktop: 6 }}>
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
                      placeholder={'Name'}
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
                // Bussine's name
              }
              <Column isSize={{ desktop: 12 }}>
                <Field>
                  <Control>
                    <CbInput
                      type={'text'}
                      name={'bussines'}
                      placeholder={"Bussine's name"}
                      onChange={handleChange}
                    />
                  </Control>
                </Field>
              </Column>
            </Columns>
          </Column>
          {
            // Bussine's description
          }
          <Column isSize={{ desktop: 6 }}>
            <Field>
              <Control>
                <CbTextArea
                  name="bussinessDescription"
                  placeholder="Bussine's description"
                  onChange={handleChange}
                />
              </Control>
            </Field>
          </Column>
        </Columns>
        <Columns>
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
        </Columns>

        {
          // Latest text.
        }
        <Columns style={{ marginBottom: '4rem' }}>
          <Column isSize={{ desktop: 9 }}>
            * Referral bonuses are earned only in projects that are signed, and in which the first
            invoice has been collected.
            <br></br>* The maximum cash earned by the project will be the equivalent of 10% of the
            total cost of the project.
          </Column>

          {
            // Submit button.
          }
          <Column isSize={{ desktop: 3 }} hasTextAlign="centered">
            <div style={{ marginBottom: '0.5rem' }}>
              <TextIndigo>I read</TextIndigo> <TextOrange>Disclaimer</TextOrange> and{' '}
              <TextOrange>TaC</TextOrange>
            </div>
            <ButtonDefault isBlock type="submit" isLoading={isLoading}>
              SUBMIT
            </ButtonDefault>
          </Column>
        </Columns>
      </Container>
    </>
  );
};

// const query = graphql`
//   query {
//     file(relativePath: { eq: "referrals.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;

export default ReferralsProgram;
