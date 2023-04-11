/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
import MonthlyTableCell from './MonthlyTableCell';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FoodCalendar } from 'types/foodCalendar';

interface Props {
  className?: string;
}

const MonthlyTable: React.FC<Props> = ({ className }) => {
  const [foodCalendar, setFoodCalendar] = useState<FoodCalendar[]>([]);

  useEffect(() => {
    const token = Cookies.get('token');
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://food.myapi.ir/api/utility/getFoodCalendar?month=1&year=1402',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        const fc = response.data.map((data: FoodCalendar): FoodCalendar => {
          return {
            foodTitle: data.foodTitle,
            isHoliday: data.isHoliday,
            persianDay: data.persianDay,
            persianDayOfWeek: data.persianDayOfWeek,
            dayOfWeek: data.dayOfWeek,
          };
        });

        // check if the foodCalendar array is empty before updating it
        if (fc.length > 0) {
          setFoodCalendar(fc);

          // check if the first day of the month is not a weekday (Saturday or Sunday)
          if (fc[0].dayOfWeek < 5) {
            const j = fc[0].dayOfWeek + 1;
            const emptyDays: FoodCalendar[] = [];
            for (let i = 0; i < j; i++) {
              const emptyDay: FoodCalendar = {
                foodTitle: '',
                isHoliday: true,
                persianDay: -1,
                persianDayOfWeek: '',
                dayOfWeek: -1,
              };
              emptyDay.key = `empty-${i}`;
              emptyDays.push(emptyDay);
            }

            setFoodCalendar([...emptyDays, ...fc]);
          }
        }
        console.log(foodCalendar);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`lg:max-w-5xl mx-auto md:max-w-3xl border rounded-lg px-3 py-5 mt-5 ${className}`}
    >
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
        {foodCalendar.map((f) => (
          <MonthlyTableCell
            key={f.key ?? f.persianDay}
            number={f.persianDay}
            day={f.persianDayOfWeek}
            food={f.foodTitle}
            isHoliday={f.isHoliday}
          />
        ))}
      </div>
    </div>
  );
};
export default MonthlyTable;
