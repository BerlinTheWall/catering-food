/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Form } from 'components/form';
import * as yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';

class FormValues {
  constructor(public userName?: string, public password?: string) {}
}

const properties = {
  userName: {
    title: 'نام کاربری',
    placeholder: '',
    error: 'نام کاربری را وارد نمایید.',
  },
  password: {
    title: 'رمز عبور',
    placeholder: '',
    error: 'کلمه عبور را وارد نمایید.',
    type: 'password',
  },
};

const SignInForm: React.FC = () => {
  const schema = yup
    .object({
      userName: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const [isLoading, setLoading] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState('');

  const onSubmit = (formData: FormValues): void => {
    if (formData.userName !== undefined && formData.password !== undefined) {
      setLoading(true);
      const data = JSON.stringify({
        userName: formData.userName,
        password: formData.password,
      });

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://food.myapi.ir/api/account/login',
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          Cookies.set('token', response.data.token, { expires: 1 });
          setLoading(false);
          window.location.href = '/Customer';
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          setLoading(false);
          setApiResponse(error.response.data.message);
          console.log(error.response.status);
          console.log(error.response.data.message);
        });
    }
  };
  // 0070837813 nikimoshi

  return (
    <div>
      <Form
        formValues={new FormValues('', '')}
        onSubmit={onSubmit}
        schema={schema}
        properties={properties}
        loading={isLoading}
        apiResponse={apiResponse}
      />
    </div>
  );
};

export default SignInForm;
