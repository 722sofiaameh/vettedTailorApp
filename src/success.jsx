import React from 'react'
import success from '../src/assets/images/success.png'
export default function Success() {
  return (
    <div className="bg-white w-[80%]  mx-auto mt-20 p-10">
        <img src={success} className='mx-auto pt-10'/>
        <div className='text-center pb-20'>
            <h1 className=' text-darkGray font-bold text-[28px]'>Yay!!!🎉</h1>
            <p className=' text-darkGray font-medium text-[18px]'>
            Your application to become a vetted tailor has been sent, a Fitted<br></br> Agent will get in touch with you regard the next steps. Goodluck!</p>
        </div>
       <div className='flex justify-center items-center'><a href="/profile" className='bg-pink p-2 rounded-lg  mt-4 text-white text-[14px] font-bold'>Return To Dashboard</a></div>
        </div>
  )
}
