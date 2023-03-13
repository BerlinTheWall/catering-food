/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
// import Button from './Button';

const DailyFood: React.FC = () => {
  return (
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
      </div>
    </div>
  );
};
export default DailyFood;
