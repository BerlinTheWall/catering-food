/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import Button from 'components/Button';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from '../molecules';
import axios from 'axios';

export type RegistrationFormFields = {
  username: string;
  password: string;
};

type CreateUserResponse = {
  userName: string;
  password: string;
  // id: string;
  // createdAt: string;
};

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onSubmit = handleSubmit((data) => {
    // console.log('submitting...');
  });
  // '0070837813' nikimoshi

  async function createUser() {
    console.log(username, password);
    if (username !== undefined && password !== undefined) {
      const data = JSON.stringify({
        userName: username,
        password: password,
      });

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://food.myapi.ir/api/account/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <form onSubmit={onSubmit} className="">
      <div className="flex flex-col gap-2">
        <label htmlFor="email-input" className="text-right text-sm">
          نام کاربری
        </label>
        <FormInput<RegistrationFormFields>
          id="email-input"
          type="text"
          name="username"
          label="Email Address"
          className="mb-2"
          register={register}
          rules={{
            required: 'نام کاربری را وارد نمایید.',
          }}
          errors={errors}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password-input" className="text-right text-sm">
          کلمه عبور
        </label>
        <FormInput<RegistrationFormFields>
          id="password-input"
          type="password"
          name="password"
          label="Password"
          className="mb-2"
          register={register}
          rules={{
            required: 'کلمه عبور را وارد نمایید.',
          }}
          errors={errors}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <Button
          className="w-full text-white text-sm"
          type={'delete'}
          onClick={() => createUser()}
        >
          ورود
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
