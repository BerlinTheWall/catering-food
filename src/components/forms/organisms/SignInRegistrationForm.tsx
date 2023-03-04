import Button from 'components/Button';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from '../molecules';

export type RegistrationFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwrodConfirm: string;
};

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...');
  });

  return (
    <form onSubmit={onSubmit} className="">
      <div className="flex flex-col gap-2">
        <label htmlFor="email-input">Email address</label>
        <FormInput<RegistrationFormFields>
          id="email-input"
          type="email"
          name="email"
          label="Email Address"
          className="mb-2"
          register={register}
          rules={{
            required: 'You must enter your email address.',
            pattern: emailPattern,
          }}
          errors={errors}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password-input">Password</label>
        <FormInput<RegistrationFormFields>
          id="password-input"
          type="password"
          name="password"
          label="Password"
          className="mb-2"
          register={register}
          rules={{
            required: 'You must enter your password.',
          }}
          errors={errors}
        />
      </div>
      <div className="mt-3">
        <Button
          className="w-full"
          type={'delete'}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
