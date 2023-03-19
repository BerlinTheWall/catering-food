import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { title: string };

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <div className="w-full flex flex-col gap-3">
    <label className="text-right text-sm">{props.title}</label>
    <input
      type="password"
      className="w-full h-8 py-3 px-3 text-sm bg-space text-black border rounded-xl placeholder-gray-500 border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30"
      ref={ref}
      {...props}
    />
  </div>
));

export default Input;
