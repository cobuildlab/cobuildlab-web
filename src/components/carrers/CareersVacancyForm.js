import { Column, Columns, Control, Field, Input } from 'bloomer';
import { Container } from 'bloomer/lib/layout/Container';
import React from 'react';
import ButtonDefault from '../2020/Button/ButtonDefault';

const CareersVacancyForm = () => {
  return (
    <Container>
      <form>
        <Columns>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <Input type={'text'} name={'name'} placeholder={'Name'} />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <Input type={'email'} name={'email'} placeholder={'Email'} />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <Input type={'text'} name={'cv'} placeholder={'Drop your CV'} />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <ButtonDefault isLoading={false} type="submit" isBlock>
                  Submit
                </ButtonDefault>
              </Control>
            </Field>
          </Column>
        </Columns>
      </form>
    </Container>
  );
};

export default CareersVacancyForm;
