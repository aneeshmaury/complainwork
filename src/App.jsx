import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";


function App() {
  return (
    <div className='mt-7 px-3'>
       <div className='flex justify-between'>
      <div className='font-bolder text-[50px]'style={{ color: 'rgb(130, 124, 161)' }} ><IoReorderThreeOutline /></div>
       <div className='flex items-center gap-2'>
                <div className='text-3xl font-thin bg-slate-200 rounded-full w-[50px] h-[50px] text-center ' style={{ color: 'rgb(130, 124, 161)' }}>AK</div>
<div className='2xl 'style={{ color: 'rgb(130, 124, 161)' }} ><FaCaretDown /></div>
       </div>
    </div>
    </div>
   
  )
}

export default App