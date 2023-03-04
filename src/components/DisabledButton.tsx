/* eslint-disable @typescript-eslint/naming-convention */
// /* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// import { Button as MaterialButton } from '@mui/material';
// import { ScreenClasses } from '../types/ScreenClasses';
// import useScreenClasses from '../utils/hooks/useScreenClasses';

// const ButtonType = {
//   primary: 'text-red',
//   secondary: 'bg-black',
//   basic: 'bg-invisible',
//   delete: 'bg-red',
// };

// const ButtonSize: ScreenClasses = {
//   xs: 'pt-1 pb-2 px-4 text-xs',
//   sm: 'pt-1.5 pb-3 px-4 text-sm',
//   lg: 'pt-1 pb-2 px-4 text-md',
// };

// interface Props {
//   children?: React.ReactNode;
//   className?: string;
//   type: keyof typeof ButtonType;
//   onClick: () => void;
// }

// const MyButton: React.FC<Props> = ({ children, type, onClick, className }) => {
//   const typeClassname = ButtonType[type];
//   const buttonClasses = useScreenClasses(ButtonSize);
//   return (
//     <button
//       // className="w-20"
//       className={`flex items-center justify-center rounded-lg border border-red ${typeClassname} ${buttonClasses} ${
//         className ?? ''
//       }`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default MyButton;
// import { ButtonUnstyled, ButtonUnstyledProps } from '@mui/base';

// const MyButton: React.FC = (props: ButtonUnstyledProps) => (
//   <ButtonUnstyled
//     {...props}
//     component={{
//       root: {
//         className: `hover:text-cyan-500 p-2 border-2 border-indigo-600`,
//       },
//     }}
//   />
// );
// export default MyButton;

// import * as React from 'react';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const DisabledButton: React.FC = () => (
  <CustomButton disabled>Disabled</CustomButton>
);

export default DisabledButton;
