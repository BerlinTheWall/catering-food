import React from 'react';
import { ScreenClasses } from 'types/ScreenClasses';
import { useScreenClasses } from 'utils/hooks';
import wallet from 'assets/icons/wallet.svg';
import ticket from 'assets/icons/envelope.svg';
import cart from 'assets/icons/cart.svg';
import leftArrow from 'assets/icons/arrow-left.svg';
import rightArrow from 'assets/icons/arrow-right.svg';
const ButtonType = {
  primary: 'text-red hover:bg-red hover:text-white',
  secondary: 'bg-black',
  basic: 'bg-invisible text-red hover:bg-red hover:text-white',
  delete: 'bg-red',
};

const Image = {
  wallet: wallet,
  ticket: ticket,
  cart: cart,
  leftArrow: leftArrow,
  rightArrow: rightArrow,
};

const IconDirection = {
  left: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
  right: 'flex-row',
};

const ButtonSize: ScreenClasses = {
  xs: 'pt-1 pb-2 px-4 text-xs',
  sm: 'pt-1.5 pb-3 px-4 text-xs',
  lg: 'pt-1 pb-2 px-4 text-xs',
};

interface Props {
  children?: React.ReactNode;
  className?: string;
  type: keyof typeof ButtonType;
  image: keyof typeof Image;
  direction: keyof typeof IconDirection;
  onClick?: () => void;
}

const ButtonIcon: React.FC<Props> = ({
  children,
  type,
  image,
  direction,
  onClick,
  className,
}) => {
  const typeClassname = ButtonType[type];
  const imageSrc = Image[image];
  const buttonClasses = useScreenClasses(ButtonSize);
  const iconDirection = IconDirection[direction];
  return (
    <button
      className={`flex ${iconDirection} gap-3 items-center justify-center rounded-md border border-red ${typeClassname} ${buttonClasses} ${
        className ?? ''
      }`}
      onClick={onClick}
    >
      <img className="w-5 mt-1" src={imageSrc} alt="" />
      {children}
    </button>
  );
};

export default ButtonIcon;
