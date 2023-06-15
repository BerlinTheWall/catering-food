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
import persianDate from 'persian-date';
const url = process.env.REACT_APP_API_URL;
const auth_key = process.env.REACT_APP_AUTHORIZATION_KEY;

interface Props {
  className?: string;
}

const MonthlyTable: React.FC<Props> = ({ className }) => {
  const now = new persianDate();
  const [foodCalendar, setFoodCalendar] = useState<FoodCalendar[]>([]);
  const [year, setYear] = useState<number>(now.State.persianAstro.year);
  const [month, setMonth] = useState<number>(now.State.persianAstro.month + 1);

  const handleNextMonthClick = (): void => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else setMonth(month + 1);
  };

  // useEffect(() => {
  //   const now = new persianDate();
  //   // console.log(now);
  //   setYear(now.State.persianAstro.year);
  //   setMonth(now.State.persianAstro.month + 1);
  //   setMonthString(
  //     new persianDate([
  //       now.State.persianAstro.year,
  //       now.State.persianAstro.month + 1,
  //       1,
  //     ])
  //       .toLocale('fa')
  //       .format('MMMM'),
  //   );
  // }, []);

  useEffect(() => {
    const token = Cookies.get('token');
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${url}/api/utility/getFoodCalendar?month=${month}&year=${year}`,
      headers: {
        Authorization: `${auth_key} ${token}`,
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
        // console.log(foodCalendar);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  return (
    <div
      className={`lg:max-w-5xl mx-auto md:max-w-3xl border rounded-lg px-3 py-5 mt-5 ${className}`}
    >
      <h2 className="text-2xl">
        برنامه غذایی
        <span className="text-red">
          {' '}
          {new persianDate([
            now.State.persianAstro.year,
            now.State.persianAstro.month + 1,
            1,
          ])
            .toLocale('fa')
            .format('MMMM')}{' '}
        </span>
        ماه
        <span className="font-bold text-red"> {year}</span>
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
          onClick={handleNextMonthClick}
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
