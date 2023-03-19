import React from 'react';

export type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[]; title: string };

// eslint-disable-next-line react/display-name
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <div className="flex gap-2">
      <label>{props.title}</label>
      <select ref={ref} {...props}>
        {options?.map((option) => (
          <option key={option?.label?.toString()} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  ),
);

export default Select;
