import React from 'react';
import img from 'assets/images/food-banner.jpg';

const Banner: React.FC = () => {
  return (
    <div
      className="w-full h-40 relative"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 text-white text-2xl font-bold">
        <h2 className="absolute top-20 right-16">ورود به سامانه</h2>
      </div>
    </div>
  );
};

export default Banner;
