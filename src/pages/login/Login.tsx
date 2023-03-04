// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Footer, Navbar, Welcome } from 'components';
import React from 'react';
import Banner from './Banner';

const Login: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Login;
