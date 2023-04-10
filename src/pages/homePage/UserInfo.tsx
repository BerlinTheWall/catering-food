/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
import Cookies from 'js-cookie';
import axios from 'axios';
import { CustomerDetail } from 'types/customerDetail';
// import Button from './Button';

const UserInfo: React.FC = () => {
  const [customerDetail, setCustomerDetail] = useState<CustomerDetail>();

  useEffect(() => {
    const token = Cookies.get('token');
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://food.myapi.ir/api/customer',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        const customerDetail: CustomerDetail = {
          nationalId: response.data.nationalId,
          mobile: response.data.mobile,
          fullName: response.data.fullName,
          group: response.data.group,
          status: response.data.status,
          allowedFoodSize: response.data.allowedFoodSize,
          allowedOrderTypes: response.data.allowedOrderTypes,
        };
        setCustomerDetail(customerDetail);
        console.log(customerDetail);
        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-80 mx-auto border px-5 py-5 mt-5">
      <div className="border-b pb-5">
        <h2 className="text-lg">
          اطلاعات کاربری{' '}
          <span className="text-red">
            {customerDetail?.fullName !== null &&
            customerDetail?.fullName !== undefined
              ? customerDetail.fullName
              : '---'}
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-2 border-b py-5">
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">کدملی</p>
          </div>
          <div>
            <p className="text-sm">
              {customerDetail?.nationalId !== null &&
              customerDetail?.nationalId !== undefined
                ? customerDetail.nationalId
                : '---'}
            </p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">تلفن همراه</p>
          </div>
          <div>
            <p className="text-sm">
              {customerDetail?.mobile !== null &&
              customerDetail?.mobile !== undefined
                ? customerDetail.mobile
                : '---'}
            </p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">گروه</p>
          </div>
          <div>
            <p className="text-sm">
              {customerDetail?.group !== null &&
              customerDetail?.group !== undefined
                ? customerDetail.group
                : '---'}
            </p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">زیرگروه</p>
          </div>
          <div>
            <p className="text-sm">
              {customerDetail?.group !== null &&
              customerDetail?.group !== undefined
                ? customerDetail.group
                : '---'}
            </p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">وضعیت</p>
          </div>
          <div>
            <p className="text-sm">
              {customerDetail?.status !== null &&
              customerDetail?.status !== undefined
                ? customerDetail.status
                : '---'}
            </p>
          </div>
        </div>
      </div>
      <Button className="mx-auto rounded-md mt-5" type={'basic'}>
        بازنشانی کلمه عبور
      </Button>
    </div>
  );
};
export default UserInfo;
