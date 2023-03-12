import React from 'react';
import { ScreenClasses } from 'types/ScreenClasses';
import { useScreenClasses } from 'utils/hooks';
import wallet from 'assets/images/favicon.png';

const ButtonType = {
  primary: 'text-red hover:bg-red hover:text-white',
  secondary: 'bg-black',
  basic: 'bg-invisible text-red hover:bg-red hover:text-white',
  delete: 'bg-red',
};

const Image = {
  wallet: wallet,
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
  image: keyof typeof Image;
  onClick?: () => void;
}

const ButtonIcon: React.FC<Props> = ({
  children,
  type,
  image,
  onClick,
  className,
}) => {
  const typeClassname = ButtonType[type];
  const imageSrc = Image[image];
  const buttonClasses = useScreenClasses(ButtonSize);
  return (
    <button
      className={`flex flex-col items-center justify-center rounded-lg border border-red ${typeClassname} ${buttonClasses} ${
        className ?? ''
      }`}
      onClick={onClick}
    >
      <img className="w-10 mb-3" src={imageSrc} alt="" />
      {children}
    </button>
  );
};

export default ButtonIcon;
