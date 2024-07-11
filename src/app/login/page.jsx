import React from 'react';
import Link from 'next/link';
import Back from '../Components/backbutton/Back';
const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-transparent p-8 rounded-lg">
        <Back/>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
        <div className="flex justify-between items-center mb-6">
          <Link href="/forgot-password" className="text-white hover:underline">
            Forgot Password?
          </Link>
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
        >
          Login
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <Link href="/register" className="text-white hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
