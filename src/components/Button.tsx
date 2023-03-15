import React from 'react';
import { ScreenClasses } from 'types/ScreenClasses';
import { useScreenClasses } from 'utils/hooks';

const ButtonType = {
  primary: 'text-red hover:bg-red hover:text-white border border-red',
  secondary: 'bg-black',
  basic:
    'bg-invisible text-red hover:bg-red hover:text-white border border-red',
  delete: 'bg-red',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  grey: 'bg-invisible text-black hover:bg-gray-500 hover:text-white border border-gray-500',
};

const ButtonSize: ScreenClasses = {
  xs: 'pt-1 pb-2 px-4 text-xs',
  sm: 'pt-1.5 pb-3 px-4 text-sm',
  lg: 'pt-1 pb-2 px-4 text-sm',
};

interface Props {
  children?: React.ReactNode;
  className?: string;
  type: keyof typeof ButtonType;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, type, onClick, className }) => {
  const typeClassname = ButtonType[type];
  const buttonClasses = useScreenClasses(ButtonSize);
  return (
    <button
      className={`flex items-center justify-center rounded-lg ${typeClassname} ${buttonClasses} ${
        className ?? ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
