/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { TodayOrder } from 'types/todaysOrder';
// import Button from './Button';

const DailyFood: React.FC = () => {
  // var todayOrder: TodayOrder;
  const [todayOrder, setTodayOrder] = useState<TodayOrder>();
  const [dayName, setDayName] = useState<string>('امروز');
  const [todayButtonShow, setTodayButtonShow] = useState('');
  const [tommorowButtonShow, setTommorowButtonShow] = useState('hidden');

  const switchButtons = (): void => {
    if (todayButtonShow === '') {
      setDayName('فردا');
      setTodayButtonShow('hidden');
      setTommorowButtonShow('');
    } else {
      setDayName('امروز');
      setTodayButtonShow('');
      setTommorowButtonShow('hidden');
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://food.myapi.ir/api/customer/todayorder',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        const todayOrder: TodayOrder = {
          monthName: response.data.monthName,
          dayName: response.data.dayName,
          dayNumber: response.data.dayNumber,
          foodName: response.data.foodName,
          hasOrder: response.data.hasOrder,
          isPaid: response.data.isPaid,
          foodCalendarId: response.data.foodCalendarId,
          foodSize: response.data.foodSize,
        };
        setTodayOrder(todayOrder);
        console.log(todayOrder);
        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mx-auto px-2 xs:w-full xs:px-3 md:px-0 md:w-92 mt-5">
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
        <div>{dayName}</div>
        <div className="flex justify-around mt-5">
          <p>
            {todayOrder?.dayName !== undefined && todayOrder?.dayName !== ''
              ? todayOrder?.dayName
              : '-'}
          </p>
          <p className="font-bold">
            {todayOrder?.dayNumber !== undefined && todayOrder?.dayNumber !== 0
              ? todayOrder?.dayNumber
              : '-'}
          </p>
          <p>
            {todayOrder?.monthName !== undefined && todayOrder?.monthName !== ''
              ? todayOrder?.monthName
              : '-'}
          </p>
        </div>
        <div className="mt-5">
          {todayOrder?.foodName !== undefined && todayOrder?.foodName !== ''
            ? todayOrder?.foodName
            : 'غذایی موجود نیست.'}
        </div>
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
