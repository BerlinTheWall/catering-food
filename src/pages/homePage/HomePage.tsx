/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
// import Button from './Button';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-100 xs:flex-col sm:flex-row flex">
      <ButtonIcon className="w-24" image="wallet" type="basic">
        کیف پول من
      </ButtonIcon>
    </div>
  );
};
export default HomePage;
