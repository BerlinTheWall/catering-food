/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import './App.css';
import MainPage from 'pages/mainPage/MainPage';
import Login from 'pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/homePage/HomePage';
import UserInfo from 'pages/homePage/UserInfo';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div className=""> */}
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/Customer"
            element={<HomePage pageTitle="خوش آمدید" />}
          ></Route>
          <Route
            path="/Customer/Home/Profile"
            element={<HomePage pageTitle="اطلاعات کاربری" />}
          ></Route>
          <Route
            path="/Customer/Ordering/Create"
            element={<HomePage pageTitle="سفارش ماهانه" />}
          ></Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
};

export default App;
