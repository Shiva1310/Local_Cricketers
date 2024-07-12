// src/app/dashboard/layout.jsx
import React from 'react';
import Header from "../Components/header/Header"
import Navbar from '../Components/navbar/Navbar';
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Navbar/>
    </div>
  );
};

export default DashboardLayout;
