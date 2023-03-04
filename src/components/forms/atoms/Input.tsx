import React, {
  FC,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

export type InputSize = 'medium' | 'large';
export type InputType = 'text' | 'email' | 'password';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

const sizeMap: { [key in InputSize]: string } = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type = 'text',
      size = 'medium',
      className = '',
      placeholder,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className={classNames([
          'w-full h-10 py-3 px-3 text-lg bg-space text-black border rounded-3xl placeholder-gray-500 border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30',
          sizeMap[size],
          className,
        ])}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
export default Input;
