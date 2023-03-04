import React from 'react';

import './App.css';
// import MainPage from 'pages/mainPage/MainPage';
import Login from 'pages/login';

const App: React.FC = () => {
  return (
    <div className="App">
      <Login />
      {/* <MainPage /> */}
    </div>
  );
};

export default App;
