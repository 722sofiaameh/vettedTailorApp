import React from 'react'
import Back from '../assets/images/back.png'
import Notification from '../assets/images/Notification.png'

export default function Header() {
  return (
    <div className='headerStyle bg--white  h-20 text-white'>
      <div className='flex pt-4 justify-between pl-10 pr-10 items-center'>
        <div className='flex justify-between items-center gap-10'>
          <img src={Back}/>
          <h1 className='text-black font-medium text-[24px] '>Vetted Tailor Application</h1>
        </div>
       <div className='flex justify-between items-center gap-4'>
        <img src={Notification}/>
        <div className="bg-blue w-2 h-2 flex justify-center items-center rounded-full p-4 text-white font-bold">
                        SO
                    </div>
        </div> 
      </div>
    </div>
  )
}
