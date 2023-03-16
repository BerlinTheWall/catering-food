/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
import DailyFood from './DailyFood';
import { Footer } from 'components';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <HomeNavbar />
        <Banner title="خوش آمدید" />
        <div className="mx-auto xs:w-full xs:px-5 md:px-0 md:w-92 mt-5">
          <div className="flex flex-row justify-between">
            <ButtonIcon
              className="xs:w-36 md:w-28"
              image="cart"
              direction="top"
              type="basic"
            >
              سفارش‌های من
            </ButtonIcon>
            <ButtonIcon
              className="xs:w-36 md:w-28"
              image="wallet"
              direction="top"
              type="basic"
            >
              کیف پول من
            </ButtonIcon>
            <ButtonIcon
              className="xs:w-36 md:w-28"
              image="ticket"
              direction="top"
              type="basic"
            >
              تیکت‌های من
            </ButtonIcon>
          </div>
        </div>
        <DailyFood />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
