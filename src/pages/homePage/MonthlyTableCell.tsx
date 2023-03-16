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
      {day !== 'جمعه' && (
        <div
          className={`w-48 ${
            isHoliday ? 'bg-slate-300' : 'bg-slate-100'
          } bg-slate-100 rounded-md py-4 px-3`}
        >
          <div className="flex justify-between">
            <p>{day}</p>
            <p className="font-bold">{number}</p>
          </div>
          <div className="mt-3">
            <p className="font-semibold">{food}</p>
          </div>
        </div>
      )}
      {day === 'جمعه' && (
        <div className="w-full bg-slate-300 rounded-md py-1 px-3">
          <div className="flex justify-center gap-14">
            <p>{day}</p>
            <p className="font-bold">{number}</p>
            <p className="font-semibold">{food}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default MonthlyTableCell;
