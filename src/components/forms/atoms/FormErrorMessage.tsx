import React, { FC } from 'react';
import classNames from 'classnames';

export type FormErrorMessageProps = {
  className?: string;
  children?: React.ReactNode;
};

const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className,
}) => (
  <p
    className={classNames(
      'font-serif text-sm text-left block text-red ml-2',
      className,
    )}
  >
    {children}
  </p>
);

export default FormErrorMessage;
