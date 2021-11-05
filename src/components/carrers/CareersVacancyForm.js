import { Container, Column, Columns, Control, Field } from 'bloomer';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import ButtonDefault from '../2020/Button/ButtonDefault';
import CbInput from '../input/CbInput';
import CbInputFile from '../input/CbInputFile';
import Error from '../Toast/Error';
import Success from '../Toast/Success';

const CareersVacancyForm = () => {
  const initialState = {
    name: {
      value: '',
      isValid: false,
    },
    email: {
      value: '',
      isValid: false,
    },
    file: {
      value: '',
      isValid: false,
    },
  };

  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form };
    newForm[name].value = value;

    // Validate the fields
    switch (name) {
    case 'name':
      newForm[name].isValid = value.length > 0 ? true : false;
      break;
    case 'email':
      // validate email form regex
      newForm[name].isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      break;
    default:
      break;
    }

    setForm(newForm);
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    if (file.type === 'application/pdf') {
      const newForm = { ...form };
      newForm.file.value = file;
      newForm.file.isValid = true;
      setForm(newForm);
    } else {
      toast.error(<Error message={'Is not a PDF file'} />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      setForm((value) => ({ ...value, file: { value: '', isValid: false } }));
    }
  };

  const handleError = (error) => {
    toast.dismiss();
    toast(<Error message={error} />, {
      position: 'bottom-right',
      hideProgressBar: true,
    });
    setIsLoading(false);
  };

  const convertToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          resolve(reader.result.split(',')[1]);
        };
        reader.onerror = reject;
      } catch (error) {
        reject(error);
      }
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);

    if (!form.name.isValid) {
      handleError("Name can't be empty");
      return;
    }

    if (!form.email.isValid) {
      handleError("Email can't be empty and must be a valid format");
      return;
    }

    if (!form.file.isValid) {
      handleError("File can't be empty");
      return;
    }

    try {
      let prepare = {
        name: form.name.value,
        email: form.email.value,
        file: form.email.value,
      };

      prepare.file = await convertToBase64(form.file.value);

      await fetch(process.env.VACANCY_FORM_API, {
        method: 'POST',
        body: JSON.stringify(prepare),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      toast.dismiss();
      toast(<Success message={'CV sent'} />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      setForm(initialState); // reset the form
      setIsLoading(false);
    } catch (error) {
      handleError('Error, the CV could not be sent');
    }
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Columns>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <CbInput
                  type={'text'}
                  name={'name'}
                  placeholder={'Name'}
                  value={form.name.value}
                  onChange={handleChange}
                />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <CbInput
                  type={'email'}
                  name={'email'}
                  placeholder={'Email'}
                  value={form.email.value}
                  onChange={handleChange}
                />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <Field>
              <Control>
                <CbInputFile
                  placeholder={form.file.isValid ? `File: ${form.file.value.name}` : 'Drop your CV'}
                  value={form.file.value}
                  onChange={handleChangeFile}
                />
              </Control>
            </Field>
          </Column>
          <Column isSize={{ mobile: 12 }}>
            <ButtonDefault isLoading={isLoading} type={'submit'} isBlock isFullHeight={true}>
              SUBMIT
            </ButtonDefault>
          </Column>
        </Columns>
      </form>
    </Container>
  );
};

export default CareersVacancyForm;
