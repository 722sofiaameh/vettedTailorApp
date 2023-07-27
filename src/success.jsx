import React from 'react'
import success from '../src/assets/images/success.png'
export default function Success() {
  return (
    <div className="bg-white box rounded-xl md:w-[80%]  md:mx-auto mt-32 md:mt-32 p-10 w-[80%] mx-auto h-[60%]  ">
        <img src={success} className='mx-auto md:pt-0 pt-10'/>
        <div className='text-center pb-20 md:pb-10'>
            <h1 className=' text-darkGray font-bold text-[28px]'>Yay!!!🎉</h1>
            <p className=' text-darkGray font-medium text-[18px]'>
            Your application to become a vetted tailor has been sent, a Fitted<br></br> Agent will get in touch with you regard the next steps. Goodluck!</p>
        </div>
       <div className='flex justify-center items-center'><a href="/profile" className='bg-pink p-2 rounded-lg  mt-4 text-white text-[14px] font-bold'>Return To Dashboard</a></div>
        </div>
  )
}
