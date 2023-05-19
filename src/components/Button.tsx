import React, { useEffect, useState } from 'react';
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
  login: 'text-white bg-red hover:bg-rose-700',
};

const ButtonSize: ScreenClasses = {
  xs: 'pt-2 pb-2 px-4 text-sm',
  sm: 'pt-2 pb-2 px-4 text-sm',
  lg: 'pt-2 pb-2 px-4 text-sm',
};

interface Props {
  children?: React.ReactNode;
  className?: string;
  type: keyof typeof ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  className,
  disabled,
}) => {
  const typeClassname = ButtonType[type];
  const buttonClasses = useScreenClasses(ButtonSize);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [disabledClass, setDisabledClass] = useState('');

  useEffect(() => {
    setIsDisabled(disabled);
    if (disabled) setDisabledClass('pointer-events-none');
    else setDisabledClass('');
  }, [disabled]);

  return (
    <button
      className={`flex items-center justify-center rounded-lg ${
        className ?? ''
      } ${disabledClass} ${typeClassname} ${buttonClasses} `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
