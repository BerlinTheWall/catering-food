/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
// import Button from './Button';

const HomePage: React.FC = () => {
  return (
    <>
      <HomeNavbar />
      <Banner title="خوش آمدید" />
      {/* <div className="w-full h-100 xs:flex-col sm:flex-row flex">
        <ButtonIcon className="w-24" image="wallet" type="basic">
          کیف پول من
        </ButtonIcon>
      </div> */}
      <div className="mx-auto xs:w-full xs:px-5 w-92 mt-5 ">
        <div className="flex flex-row justify-between">
          <ButtonIcon className="xs:w-36 w-28" image="wallet" type="basic">
            سفارش‌های من
          </ButtonIcon>
          <ButtonIcon className="xs:w-36 w-28" image="wallet" type="basic">
            کیف پول من
          </ButtonIcon>
          <ButtonIcon className="xs:w-36 w-28" image="wallet" type="basic">
            تیکت‌های من
          </ButtonIcon>
        </div>
      </div>
    </>
  );
};
export default HomePage;
