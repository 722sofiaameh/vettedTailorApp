import React from 'react'
import mainImg from '../assets/images/yellowMan.png'
export default function Profile() {
  return (
    <div className='bg-white w-[70%]  mx-auto mt-20'>
      <div className='text-center pt-6'>
        <h1 className='text-darkGray text-[24px] font-bold'>Vetted Tailor Application</h1>
        <p className='text-darkGray text-[14px] font-light  leading-[20px]'>One step closer to the goal! please provide us with your Bank details with which you will be recieving payment..</p>
      </div>
      <div>
        <img src={mainImg} className=' '/>
  <div className='w-[40%] flex flex-col justify-between'>
  <div className='flex gap-4'>
    <div>
    <p className='text-faintGray text-[16px] font-bold'>Name:</p>
    <p className='text-faintGray text-[16px] font-bold'>Gender:</p>
    <p className='text-faintGray text-[16px] font-bold'>Sew Gender:</p>
    <p className='text-faintGray text-[16px] font-bold'>Phone Number:</p>
    <p className='text-faintGray text-[16px] font-bold'>Email Address:</p>
    <p className='text-faintGray text-[16px] font-bold'>Store Name:</p>
    <p className='text-faintGray text-[16px] font-bold'>Location: </p>

    </div>
    <div>
        <p className=''>Samuel Oladokun </p>
        <p className=''>Male </p>
        <p className=''>Both </p>
        <p className=''>08137901372 </p>
        <p className=''>biola@fitted.ng </p>
        <p className=''>Skibi Fashion House </p>
        <p className=''>Lagos, Nigeria </p>
        </div>
  </div>
      </div>
    </div>
    </div>
  )
}
