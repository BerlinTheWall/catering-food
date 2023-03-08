import { Footer, Navbar, Welcome } from 'components';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
