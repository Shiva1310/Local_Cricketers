"use client"
import React from 'react';
import Image from 'next/image';4
import Link from 'next/link';
import { GiCricketBat } from "react-icons/gi";
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/register');
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-transparent p-8  rounded-lg">
        <div className="mb-8">
        <h1 className="text-5xl font-extrabold italic text-white mb-6 tracking-widest shadow-lg flex items-center justify-center">
         Local Cricketers  <GiCricketBat className="ml-2" />
          </h1>
          <Image src="/Images/main.png" alt="main" width={400} height={400} />
        </div>
        <button
        onClick={handleRegisterClick}
          className="w-full bg-blue-500 border border-white text-white py-2 px-4 rounded-xl hover:bg-black focus:outline-none focus:bg-blue-600"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <p className="text-black">Already a user? <Link href="/login" className="text-white-500 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
