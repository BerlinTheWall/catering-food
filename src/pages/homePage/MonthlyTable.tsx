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
    { no: 1, day: 'دوشنبه', food: 'چلو کباب کوبیده', isHoliday: false },
    { no: 2, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 3, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 4, day: 'سه شنبه', food: '----', isHoliday: false },
    { no: 5, day: 'جمعه', food: 'تعطیل', isHoliday: true },
    { no: 6, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: 7, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 8, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: 7, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 8, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 5, day: 'جمعه', food: 'تعطیل', isHoliday: true },
    { no: 6, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
    { no: 7, day: 'سه شنبه', food: 'عدس پلو', isHoliday: false },
    { no: 8, day: 'سه شنبه', food: 'عدس پلو', isHoliday: true },
  ];
  return (
    <div className="flex flex-wrap gap-2 max-w-5xl mx-auto">
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
  );
};
export default MonthlyTable;
