import React from 'react';
import { Field, Label as BloomerLabel, Control, Input } from 'bloomer';
import styled from 'styled-components';
import H4 from '../Typography/H4';
import ButtonDefault from '../2020/Button/ButtonDefault';

const Form = styled.form`
  margin-top: 2em;
`;

const Label = styled(BloomerLabel)`
  color: #264a60;
`;

const PricingForm = () => {
  return (
    <div>
      <H4>Get your estimate via email</H4>
      <Form>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input type="text" placeholder="Name" />
          </Control>
        </Field>
        <Field>
          <Label>Phone</Label>
          <Control>
            <Input type="text" placeholder="Phone" />
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input type="text" placeholder="Email" />
          </Control>
        </Field>
        <Field>
          <Control>
            <ButtonDefault>Submit</ButtonDefault>
          </Control>
        </Field>
      </Form>
    </div>
  );
};

export default PricingForm;
