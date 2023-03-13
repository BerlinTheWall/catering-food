import { Banner, Footer, Navbar } from 'components';
import React from 'react';

import SignInRegistrationForm from 'components/forms/organisms/SignInRegistrationForm';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Banner title="ورود به سامانه" />
        <div className="xs:w-4/5 sm:w-2/3 md:w-1/3 mx-auto border text-xl border-black px-5 py-3 mt-5 relative">
          <h2 className="border-b border-black pb-3 mb-4">ورود به سامانه</h2>
          <SignInRegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
