import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import LastVisit from './time';
import "./App.css"


function App() {
  return (
    <div className='mt-7 px-3'>
       <div className='flex justify-between'>
      <div className='font-bolder text-[50px] text-slate-300' ><IoReorderThreeOutline /></div>
       <div className='flex items-center gap-2'>
       <div className='text-2xl font-[2px] bg-slate-100 rounded-full w-[50px] h-[50px] flex items-center justify-center' style={{ color: 'rgb(130, 124, 161)' }}>
  AK
</div>
<div className='2xl text-slate-300' ><FaCaretDown /></div>
       </div>
       
    </div>
    <div className='flex'>
        <div className='font-bold text-sm text-slate-500'>
        <FaRegClock />
        </div>
        <div className='font-bold font-Lato text-sm text-slate-500'>
          Last Login time : 
        </div>
        <div className='text-sm font-Lato text-slate-500'><LastVisit/></div>
       </div>
    </div>
   
  )
}

export default App