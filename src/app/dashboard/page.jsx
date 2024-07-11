// pages/index.js (or wherever your main page component is)
"use client"
import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../Components/navbar/Navbar';

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow"> {/* Your main content here */} </div>
      <Navbar/>
    </div>
  );
};

export default Page;
