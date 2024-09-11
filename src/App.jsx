import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { FaRegClock } from "react-icons/fa";
import LastVisit from './time';
import "./App.css"


function App() {
  return (
    <div>
       <div className=' px-3 bg-white pt-8'>
       <div className='flex justify-between'>
      <div className='font-bolder text-[40px] text-slate-300' ><IoReorderThreeOutline /></div>
       <div className='flex items-center gap-2'>
       <div className='font-[1px] bg-slate-100 rounded-full w-[40px] h-[40px] flex items-center justify-center' style={{ color: 'rgb(130, 124, 161)' }}>
  AK
</div>
<div className='2xl text-slate-300' ><FaCaretDown /></div>
       </div>
       
    </div>
    <div className='flex absolute top-9 left-[90px]'>
        <div className='font-bold mb-1 mr-1 text-sm text-slate-700'>
        <FaRegClock />
        </div>
        <div className='font-bold font-Lato text-sm text-slate-700'>
          Last Login time : 
        </div>
        <div className='text-sm font-Lato text-slate-700 ml-1'><LastVisit/></div>
       </div>
    </div>
<div className='bg-white mx-3 mt-4'>

<div className='text-2xl font-bold px-4 py-6'>Grievance Registration Form</div>
<div className='bg-green-500 mx-1 text-md rounded-md px-2 py-4  flex justify-between'>
  <div className=' text-white w-[270px]'><span className='font-semibold'>Well done!</span> Your Grievance has been successfully lodged and your docket number:</div>
<div className='text-white text-xl'><RxCross2 /></div>
</div>

</div>

    </div>
   
   
  )
}

export default App