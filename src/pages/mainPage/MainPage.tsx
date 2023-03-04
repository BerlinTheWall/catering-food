import { Footer, Navbar, Welcome } from 'components';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
};

export default MainPage;
