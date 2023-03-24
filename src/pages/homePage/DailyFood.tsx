/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
import { Link } from 'react-router-dom';
// import Button from './Button';

const DailyFood: React.FC = () => {
  const [todayButtonShow, setTodayButtonShow] = useState('');
  const [tommorowButtonShow, setTommorowButtonShow] = useState('hidden');

  const switchButtons = (): void => {
    if (todayButtonShow === '') {
      setTodayButtonShow('hidden');
      setTommorowButtonShow('');
    } else {
      setTodayButtonShow('');
      setTommorowButtonShow('hidden');
    }
  };
  return (
    <div className="mx-auto xs:w-full xs:px-3 md:px-0 md:w-92 mt-5">
      <div className="flex flex-row justify-between gap-2">
        <Link to="/Customer/Ordering">
          <ButtonIcon
            className="xs:w-32 md:w-28"
            image="cart"
            direction="top"
            type="basic"
          >
            سفارش‌های من
          </ButtonIcon>
        </Link>
        <Link to="/Customer/Wallet">
          <ButtonIcon
            className="xs:w-32 md:w-28"
            image="wallet"
            direction="top"
            type="basic"
          >
            کیف پول من
          </ButtonIcon>
        </Link>
        <Link to="/Customer/Ticket">
          <ButtonIcon
            className="xs:w-32 md:w-28"
            image="ticket"
            direction="top"
            type="basic"
          >
            تیکت‌های من
          </ButtonIcon>
        </Link>
      </div>
      <div className="border rounded-md py-5 mx-auto xs:w-full xs:px-5 md:px-0 md:w-92 mt-5 bg-white">
        <div>امروز</div>
        <div className="flex justify-around mt-5">
          <p>دوشنبه</p>
          <p className="font-bold">22</p>
          <p>اسفند</p>
        </div>
        <div className="mt-5">چلو کباب کوبیده</div>
        <div className="flex justify-center items-center border-t mt-5 mx-5">
          <Button className="rounded-md mt-5" type={'success'}>
            ثبت سفارش
          </Button>
          {/* <p className="text-red text-xs pt-5">
          زمان ثبت سفارش روزانه به پایان رسیده است.
        </p> */}
          {/* <p className="text-black text-xs pt-5">
          برای امروز غذایی ثبت نشده است.
        </p> */}
        </div>
      </div>
      <div className="mx-auto xs:w-full xs:px-5 md:px-0 md:w-92 mt-5">
        <ButtonIcon
          className={`w-full rounded-md ${todayButtonShow}`}
          image="leftArrow"
          direction="left"
          type="basic"
          onClick={switchButtons}
        >
          برنامه غذایی فردا
        </ButtonIcon>
        <ButtonIcon
          className={`w-full rounded-md ${tommorowButtonShow}`}
          image="rightArrow"
          direction="right"
          type="basic"
          onClick={switchButtons}
        >
          برنامه غذایی دیروز
        </ButtonIcon>
      </div>
    </div>
  );
};
export default DailyFood;
