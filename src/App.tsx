/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import './App.css';
import MainPage from 'pages/mainPage/MainPage';
import Login from 'pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div className=""> */}
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
};

export default App;
