/* eslint-disable react/prop-types */
import React from 'react';
import img from 'assets/images/welcome-image.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
// import Button from './Button';

const Welcome: React.FC = () => {
  return (
    <div className="w-full h-full xs:flex-col sm:flex-row flex bg-black">
      <div className="xs:w-full lg:w-1/2 xs:mt-4 sm:m-4 flex justify-center">
        <img
          src={img}
          alt="welcome"
          className="rounded-2xl lg:w-full xs:w-10/12"
        />
      </div>
      <div className="xs:w-full lg:w-1/2 xs:py-6 flex flex-col items-center justify-center gap-4">
        <h3 className="text-white text-2xl">به کترینگ فود خوش آمدید!</h3>
        {/* <Button
          onClick={(): void => {
            throw new Error('Function not implemented.');
          }}
          type={'primary'}
        >
          ورود
        </Button> */}
        <Link to="/login">
          <Button type={'primary'}>ورود</Button>
        </Link>
      </div>
    </div>
  );
};
export default Welcome;
