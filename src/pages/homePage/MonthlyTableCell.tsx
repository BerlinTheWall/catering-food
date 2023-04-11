/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
// import Button from './Button';

interface Props {
  number: number;
  day: string;
  food: string;
  isHoliday?: boolean;
}

const MonthlyTableCell: React.FC<Props> = ({
  number,
  day,
  food,
  isHoliday,
}) => {
  return (
    <>
      {number < 0 && (
        <div className="lg:w-40 md:w-28 sm:w-24 xs:hidden sm:block rounded-md py-4 px-3"></div>
      )}
      {day !== 'جمعه' && number !== -1 && (
        <div
          className={`lg:w-40 md:w-28 sm:w-24 xs:w-full xs:flex xs:items-center sm:block ${
            isHoliday ? 'bg-slate-300' : 'bg-slate-100'
          } bg-slate-100 rounded-md py-4 px-3`}
        >
          <div className="flex justify-between xs:w-1/2 sm:w-full">
            <p>{day}</p>
            <p className="font-bold">{number}</p>
          </div>
          <div className="sm:mt-3 xs:w-1/2 sm:w-full">
            <p className="font-semibold md:text-sm">
              {}
              {food !== null ? food : ''}
              {food === null && isHoliday ? 'تعطیل' : ''}
              {food === null && !isHoliday ? '----' : ''}
            </p>
          </div>
        </div>
      )}
      {day === 'جمعه' && (
        <div className="w-full bg-slate-300 rounded-md py-1 px-3">
          <div className="flex justify-center items-center">
            <div className="flex justify-between w-1/2 sm:w-28">
              <p className="">{day}</p>
              <p className="font-bold">{number}</p>
            </div>
            <div className="xs:w-1/2 sm:w-28 sm:mr-7">
              <p className="font-semibold md:text-sm">
                {' '}
                {food !== null ? food : 'تعطیل'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MonthlyTableCell;
