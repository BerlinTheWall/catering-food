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

// async function createUser() {
//   // const email = emailInput.value;
//   // const password = passwordInput.value;

//   axios
//     .post('http://food.myapi.ir/api/account/login', {
//       userName: '0070837813',
//       password: 'nikimoshi',
//     })
//     .then((response) => {
//       console.log(response);
//     });
// }

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...');
  });

  async function createUser() {
    const data = JSON.stringify({
      userName: '0070837813',
      password: 'nikimoshi',
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

    // try {
    //   // 👇️ const data: CreateUserResponse
    //   const { data, status } = await axios.post(
    //     'http://food.myapi.ir/api/account/login',
    //     { userName: username, password: password },
    //     {
    //       headers: {
    //         // 'Access-Control-Allow-Origin': '*',
    //         // 'Access-Control-Allow-Methods': 'POST',
    //         'Access-Control-Allow-Origin': 'http://localhost:3000',
    //         'Access-Control-Allow-Credentials': 'true',
    //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    //         'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
    //         // 'Content-Type': 'application/json',
    //         // Accept: 'application/json',
    //         // 'Access-Control-Allow-Headers':
    //         //   'Content-Type, Authorization, X-Requested-With',
    //       },
    //     },
    //   );

    //   console.log(JSON.stringify(data, null, 4));

    //   console.log(status);

    //   return data;
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     console.log('error message: ', error.message);
    //     // 👇️ error: AxiosError<any, any>
    //     return error.message;
    //   } else {
    //     console.log('unexpected error: ', error);
    //     return 'An unexpected error occurred';
    //   }
    // }
  }

  return (
    <form onSubmit={onSubmit} className="">
      <div className="flex flex-col gap-2">
        <label htmlFor="email-input" className="text-right text-sm">
          نام کاربری
        </label>
        <FormInput<RegistrationFormFields>
          id="email-input"
          type="email"
          name="username"
          label="Email Address"
          className="mb-2"
          register={register}
          rules={{
            required: 'نام کاربری را وارد نمایید.',
          }}
          errors={errors}
          onChange={(e) => setUsername(e.target.value)}
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
