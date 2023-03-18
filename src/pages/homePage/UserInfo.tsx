/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from 'components/ButtonIcon';
import HomeNavbar from './HomeNavbar';
import Banner from 'components/Banner';
// import Button from './Button';

const UserInfo: React.FC = () => {
  return (
    <div className="w-80 mx-auto border px-5 py-5">
      <div className="border-b pb-5">
        <h2 className="text-lg">
          اطلاعات کاربری <span className="text-red">نوید فریدی</span>
        </h2>
      </div>
      <div className="flex flex-col gap-2 border-b py-5">
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">کدملی</p>
          </div>
          <div>
            <p className="text-sm">0093025392</p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">تلفن همراه</p>
          </div>
          <div>
            <p className="text-sm">0093025392</p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">گروه</p>
          </div>
          <div>
            <p className="text-sm">0093025392</p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">زیرگروه</p>
          </div>
          <div>
            <p className="text-sm">0093025392</p>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/4 text-right">
            <p className="text-sm font-bold">وضعیت</p>
          </div>
          <div>
            <p className="text-sm">0093025392</p>
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
