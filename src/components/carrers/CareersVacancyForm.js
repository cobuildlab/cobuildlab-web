import { Container, Column, Columns, Control, Field } from 'bloomer';
import React from 'react';
import ButtonDefault from '../2020/Button/ButtonDefault';
import CbInput from '../input/CbInput';
import CbInputFile from '../input/CbInputFile';

const CareersVacancyForm = () => {
  return (
    <Container>
      <form>
        <Columns>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <CbInput type={'text'} name={'name'} placeholder={'Name'} />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <CbInput type={'email'} name={'email'} placeholder={'Email'} />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <CbInputFile placeholder={'Drop your CV'} />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <ButtonDefault isLoading={false} type={'submit'} isBlock>
                  SUBMIT
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
