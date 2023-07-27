import React from 'react'
import Back from '../assets/images/back.png'
import Notification from '../assets/images/Notification.png'

export default function Header() {
  return (
    <div className='md:w-[80vw] absolute headerStyle bg-white  h-20 text-white z-50'>
      <div className='flex pt-4 justify-around pl-10 pr-10 items-center'>
        <div className='flex justify-between items-center gap-10'>
          <a href="/profile"><img src={Back}/></a>
          <h1 className='text-black font-medium text-[24px] font-Karla'>Vetted Tailor Application</h1>
        </div>
       <div className='flex justify-between items-center gap-4 relative'>
        <div className='bg-orange-500  w-1 h-1 flex justify-center items-center rounded-full p-2 text-xs text-white font-medium absolute top-px left-1.5'>3</div>
        <img src={Notification} alt='img'/>
        
        <div className="bg-blue font-Karla w-2 h-2 flex justify-center items-center rounded-full p-4 text-white font-bold">
                        SO
                    </div>
                    <div>iojwdj </div>
        </div> 
      </div>
    </div>
  )
}
