/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
import DailyFood from './DailyFood';
import { Footer } from 'components';
import MonthlyTable from './MonthlyTable';
import UserInfo from './UserInfo';
import { useLocation } from 'react-router-dom';
import usePageLocation from 'utils/hooks/usePageLocation';
import { useSelector } from 'react-redux';
import { RootState, store } from 'app/store';

interface Props {
  pageTitle: string;
}

const HomePage: React.FC<Props> = ({ pageTitle }) => {
  const user = useSelector((store: RootState) => store.session.user);
  // console.log(user);
  // const location = useLocation();
  // console.log(location.pathname);
  // console.log(usePageLocation());
  const pageLocation = usePageLocation();
  const [bannerTitle, setBannerTitle] = useState(pageTitle);
  // const [homePageShow, setHomePageShow] = useState('block');
  // const [myOrderShow, setMyOrderShow] = useState('hidden');
  console.log(pageLocation);

  // const onMyOrderClick = (): void => {
  //   setBannerTitle('برنامه غذایی');
  //   setHomePageShow('hidden');
  //   setMyOrderShow('block');
  // };

  const getPageBody = useCallback(() => {
    if (pageLocation.isHomePage) return <DailyFood />;
    else if (pageLocation.isUserProfile) return <UserInfo />;
    else if (pageLocation.isFoodCalendar) return <MonthlyTable />;
    return <div></div>;
  }, [pageLocation]);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <HomeNavbar />
        <Banner title={bannerTitle} />
        <div>{getPageBody()}</div>
        {/* <div
          className={`mx-auto xs:w-full xs:px-3 md:px-0 md:w-92 mt-5 ${homePageShow}`}
        >
          <div className="flex flex-row justify-between gap-2">
            <ButtonIcon
              className="xs:w-32 md:w-28"
              image="cart"
              direction="top"
              type="basic"
              onClick={onMyOrderClick}
            >
              سفارش‌های من
            </ButtonIcon>
            <ButtonIcon
              className="xs:w-32 md:w-28"
              image="wallet"
              direction="top"
              type="basic"
            >
              کیف پول من
            </ButtonIcon>
            <ButtonIcon
              className="xs:w-32 md:w-28"
              image="ticket"
              direction="top"
              type="basic"
            >
              تیکت‌های من
            </ButtonIcon>
          </div>
          <DailyFood />
        </div> */}
      </div>
      {/* <MonthlyTable  /> */}
      {/* <UserInfo /> */}
      <Footer />
    </div>
  );
};
export default HomePage;
