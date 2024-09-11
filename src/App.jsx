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
      <div className='font-bolder text-[40px] text-slate-300' ><IoReorderThreeOutline /></div>
       <div className='flex items-center gap-2'>
       <div className='font-[1px] bg-slate-100 rounded-full w-[40px] h-[40px] flex items-center justify-center' style={{ color: 'rgb(130, 124, 161)' }}>
  AK
</div>
<div className='2xl text-slate-300' ><FaCaretDown /></div>
       </div>
       
    </div>
    <div className='flex'>
        <div className='font-bold mb-1 mr-1 text-sm text-slate-800'>
        <FaRegClock />
        </div>
        <div className='font-bold font-Lato text-sm text-slate-800'>
          Last Login time : 
        </div>
        <div className='text-sm font-Lato text-slate-800 ml-1'><LastVisit/></div>
       </div>
    </div>
   
  )
}

export default App