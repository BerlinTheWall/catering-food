/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
import MonthlyTableCell from './MonthlyTableCell';
// import Button from './Button';

const MonthlyTable: React.FC = () => {
  const test = [
    { no: -1, day: 'دوشنبه', food: 'چلو کباب کوبیده', isHoliday: false },
    { no: -1, day: 'دوشنبه', food: 'چلو کباب کوبیده', isHoliday: false },
    { no: 1, day: 'دوشنبه', food: 'چلو کباب کوبیده', isHoliday: false },
    { no: 2, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 3, day: 'چهار شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 4, day: 'پنج شنبه', food: '----', isHoliday: false },
    { no: 5, day: 'جمعه', food: 'تعطیل', isHoliday: true },
    { no: 6, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: 6, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: 7, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 8, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: 7, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 8, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 5, day: 'جمعه', food: 'تعطیل', isHoliday: true },
    { no: 6, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: 7, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 8, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: -1, day: 'دوشنبه', food: 'چلو کباب کوبیده', isHoliday: false },
    { no: -1, day: 'دوشنبه', food: 'چلو کباب کوبیده', isHoliday: false },
    { no: -1, day: 'دوشنبه', food: 'چلو کباب کوبیده', isHoliday: false },
  ];

  return (
    <div className="lg:max-w-5xl mx-auto md:max-w-3xl border rounded-lg px-3 py-5 mt-5">
      <h2 className="text-2xl">
        برنامه غذایی
        <span className="text-red"> اسفند </span>
        ماه
        <span className="font-bold text-red"> 1401</span>
      </h2>
      <div className="flex justify-between border-b pb-5 mt-3 xs:mt-6">
        <ButtonIcon
          className={`w-auto rounded-md`}
          image="rightArrow"
          direction="right"
          type="basic"
          disabled={true}
        >
          ماه قبل
        </ButtonIcon>
        <ButtonIcon
          className={`w-auto rounded-md`}
          image="leftArrow"
          direction="left"
          type="basic"
        >
          ماه بعد
        </ButtonIcon>
      </div>
      <div className="flex justify-between flex-wrap gap-2 md:gap-x-1 mt-6">
        {test.map((f) => (
          <MonthlyTableCell
            key={f.no}
            number={f.no}
            day={f.day}
            food={f.food}
            isHoliday={f.isHoliday}
          />
        ))}
      </div>
    </div>
  );
};
export default MonthlyTable;
