import React from 'react';
import { ScreenClasses } from 'types/ScreenClasses';
import { useScreenClasses } from 'utils/hooks';
const ButtonType = {
  primary: 'text-red hover:bg-gray-900',
  secondary: 'bg-black',
  basic: 'bg-invisible',
  delete: 'bg-red',
};

const ButtonSize: ScreenClasses = {
  xs: 'pt-1 pb-2 px-4 text-xs',
  sm: 'pt-1.5 pb-3 px-4 text-sm',
  lg: 'pt-1 pb-2 px-4 text-md',
};

interface Props {
  children?: React.ReactNode;
  className?: string;
  type: keyof typeof ButtonType;
  onClick: () => void;
}
const Button: React.FC<Props> = ({ children, type, onClick, className }) => {
  const typeClassname = ButtonType[type];
  const buttonClasses = useScreenClasses(ButtonSize);
  return (
    <button
      // className="w-20"
      className={`flex items-center justify-center rounded-lg border  border-red ${typeClassname} ${buttonClasses} ${
        className ?? ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
