/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation } from 'react-router-dom';
import {
  homePage,
  wallet,
  myOrder,
  dailyOrder,
  faq,
  foodCalendar,
  monthlyOrder,
  myTicket,
  userProfile,
} from 'pages/page';
import { LocationStatus } from 'types';
import { useState } from 'react';

const usePageLocation = (): LocationStatus => {
  const location = useLocation();
  // const [locationsStatus, setLocationsStatus] = useState<LocationStatus>({
  //   isHomePage: false,
  //   isWallet: false,
  //   isMyOrder: false,
  //   isMyTicket: false,
  //   isFoodCalendar: false,
  //   isMonthlyOrder: false,
  //   isDailyOrder: false,
  //   isFaq: false,
  //   isUserProfile: false,
  // });

  const locationsStatus: LocationStatus = {
    isHomePage: false,
    isWallet: false,
    isMyOrder: false,
    isMyTicket: false,
    isFoodCalendar: false,
    isMonthlyOrder: false,
    isDailyOrder: false,
    isFaq: false,
    isUserProfile: false,
  };

  switch (location.pathname) {
    case homePage:
      locationsStatus.isHomePage = true;
      break;
    case wallet:
      locationsStatus.isWallet = true;
      break;
    case myOrder:
      locationsStatus.isMyOrder = true;
      break;
    case myTicket:
      locationsStatus.isMyTicket = true;
      break;
    case foodCalendar:
      locationsStatus.isFoodCalendar = true;
      break;
    case monthlyOrder:
      locationsStatus.isMonthlyOrder = true;
      break;
    case dailyOrder:
      locationsStatus.isDailyOrder = true;
      break;
    case faq:
      locationsStatus.isFaq = true;
      break;
    case userProfile:
      locationsStatus.isUserProfile = true;
      break;
  }

  // switch (location.pathname) {
  //   case homePage:
  //     setLocationsStatus({ ...locationsStatus, isHomePage: true });
  //     break;
  //   case wallet:
  //     setLocationsStatus({ ...locationsStatus, isWallet: true });
  //     break;
  //   case myOrder:
  //     setLocationsStatus({ ...locationsStatus, isMyOrder: true });
  //     break;
  //   case myTicket:
  //     setLocationsStatus({ ...locationsStatus, isMyTicket: true });
  //     break;
  //   case foodCalendar:
  //     setLocationsStatus({ ...locationsStatus, isFoodCalendar: true });
  //     break;
  //   case monthlyOrder:
  //     setLocationsStatus({ ...locationsStatus, isMonthlyOrder: true });
  //     break;
  //   case dailyOrder:
  //     setLocationsStatus({ ...locationsStatus, isDailyOrder: true });
  //     break;
  //   case faq:
  //     setLocationsStatus({ ...locationsStatus, isFaq: true });
  //     break;
  //   case userProfile:
  //     setLocationsStatus({ ...locationsStatus, isUserProfile: true });
  //     break;
  // }
  return locationsStatus;
};

export default usePageLocation;
