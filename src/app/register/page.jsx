"use client"
import React, {useState} from "react";
import Link from "next/link";
import Back from "../Components/backbutton/Back";
import { useRouter } from "next/navigation";

const page = () => {
  const [otpPage, setOtpPage]=useState(false);
  const router= useRouter()
  const handleSubmit=()=>{
    setOtpPage(true);
  }
  const verifyOtp=()=>{
router.push("/dashboard")
  }
  return (
    <div className="flex items-center justify-center h-screen">
      {otpPage ? (
        <div className="max-w-md w-full bg-transparent p-8 rounded-lg">
          <Back/>
          
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter your Otp
          </label>
          <input
              type="text"
              id="otp"
              name="otp"
              className="w-full  px-3 py-2 border bg-slate-100 rounded-lg shadow-sm mb-4 focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your Otp"
            />
             <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            onClick={verifyOtp}
          >
            Verify Otp
          </button>
          </div>
      ):(
          <div className="max-w-md w-full bg-transparent p-8 rounded-lg">
          <Back/>
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="w-full px-3 py-2 border bg-slate-100 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your User name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobile"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="w-full px-3 py-2 border bg-slate-100 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg bg-slate-100 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmpassword"
            >
            Confirm  Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg bg-slate-100 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Reenter your password"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            onClick={handleSubmit}
          >
            Register
          </button>
          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Already have an account?{' '}
              <Link href="/login" className="text-white hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
    

    </div>
  );
};

export default page;
