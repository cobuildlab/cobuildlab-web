import React, { useState } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { Column, Columns, Control, Field, Input, Label as BloomerLabel, TextArea } from 'bloomer';
import Img from 'gatsby-image';
import Paragraph from '../Typography/Paragraph';
import { toast, ToastContainer } from 'react-toastify';
import ButtonDefault from '../2020/Button/ButtonDefault';
import styled from 'styled-components';
import Error from '../Toast/Error';

const Label = styled(BloomerLabel)`
  color: #264a60;
`;

const ColumnsStyled = styled(Columns)`
  margin: 0px !important;
`;

const InputStyled = styled(Input)`
  border-radius: 7px !important;
`;

const TextAreaStyled = styled(TextArea)`
  border-radius: 7px !important;
`;

const DivButtonStyled = styled.div`
  float: right;
`;

const ReferralsProgram = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    name: '',
    email: '',
    bussines: '',
    bussinessDescription: '',
  });

  const data = useStaticQuery(query);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { name, email, bussines, bussinessDescription } = values;

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
      toast(<Error message="Bussine's name can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!bussinessDescription.length) {
      toast.dismiss();
      toast(<Error message="Bussine's descriptio can't be empty" />, {
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
    <Columns className="referrals">
      <Column isSize={6}>
        <Img fluid={data.file.childImageSharp.fluid} alt="" />
      </Column>
      <Column>
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et.
        </Paragraph>
        <>
          <form onSubmit={onSubmit}>
            <ToastContainer />
            <ColumnsStyled>
              <Column isSize={5}>
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
              <Column isSize={5}>
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
            <Column isSize={10}>
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
            <Column isSize={10}>
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
            <Column isSize={10}>
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
    </Columns>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "referrals.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default ReferralsProgram;
