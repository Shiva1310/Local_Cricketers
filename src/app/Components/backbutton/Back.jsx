"use client"
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
const Back = () => {
    const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="absolute top-4 left-4">
    <button className="flex items-center text-white hover:text-lime-700 focus:outline-none" onClick={goBack}>
      <FaArrowLeft className="mr-2 text-white" />
      Back
    </button>
  </div>
  )
}

export default Back
