import React, { useState, useEffect } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import LastVisit from './time';
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState('');

  // Function to generate a random number starting with 6223
  const generateRandomNumber = () => {
    const randomDigits = Math.floor(100 + Math.random() * 900); // generates 3 random digits between 100 and 999
    const number = `6223${randomDigits}`;
    setRandomNumber(number);
  };

  // Call the generateRandomNumber function when the component mounts
  useEffect(() => {
    generateRandomNumber();
  }, []); // Empty dependency array ensures this runs only once when the component loads

  return (
    <div>
      <div className='px-3 bg-white pt-8 pb-4'>
        <div className='flex justify-between'>
          <div className='font-bolder text-[40px] text-slate-300'>
            <IoReorderThreeOutline />
          </div>
          <div className='flex items-center gap-2'>
            <div className='font-[1px] bg-slate-100 rounded-full w-[40px] h-[40px] flex items-center justify-center' style={{ color: 'rgb(130, 124, 161)' }}>
              AK
            </div>
            <div className='2xl text-slate-300'>
              <FaCaretDown />
            </div>
          </div>
        </div>
        <div className='flex absolute top-9 left-[90px]'>
          <div className='font-bold mb-1 mr-1 text-sm text-slate-700'>
            <FaRegClock />
          </div>
          <div className='font-bold font-Lato text-sm text-slate-700'>
            Last Login time:
          </div>
          <div className='text-sm font-Lato text-slate-700 ml-1'>
            <LastVisit />
          </div>
        </div>
      </div>
      
      <div className='border border-slate-200 bg-white mx-5 mt-5 rounded-[4px]'>
        <div className='text-2xl font-bold px-4 py-6'>Grievance Registration Form</div>
        
        <div className='bg-[#44be89] ml-2 text-[14px] rounded-[4px] pl-2 py-3  '>
  <div className='text-white w-[350px] tracking-wide '>
    <span className='font-semibold'>Well done!</span> Your Grievance has been successfully lodged and your docket number:
    {randomNumber && <span className="text-sm">{randomNumber}</span>}
  </div>
  <div className='absolute top-[203px] left-[388px] text-[14px] font-extrabold text-white '>
    <RxCross2 />
  </div>
</div>

<div className="relative mt-9 px-4">
  <label htmlFor="dropdown1" className="block text-[14px] font-lato text-slate-600 mb-2">
    Grievance Type<span className='text-red-900'>*</span>
  </label>
  <div className="relative">
    <select id="dropdown1" className="border border-blue-400 bg-transparent rounded mt-[-4px] py-2 px-4 text-[14px] text-slate-700 w-full appearance-none">
      <option value="option1">Grievance</option>
      <option value="option2">Query</option>
      <option value="option3">Option 3</option>
    </select>
    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <FaCaretDown className="text-slate-300" />
    </div>
  </div>
  
  <label htmlFor="dropdown2" className="block text-[14px] text-slate-600 mb-2 mt-4">
    Grievance Classification<span className='text-red-900'>*</span>
  </label>
  <div className="relative">
    <select id="dropdown2" className="border border-blue-400 bg-transparent rounded py-2 px-4 mt-[-4px] text-[14px] text-slate-700 w-full appearance-none">
      <option value="option1">Select</option>
      <option value="option2">Services</option>
    </select>
    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <FaCaretDown className="text-slate-300" />
    </div>
  </div>
  <label htmlFor="dropdown2" className="block text-[14px] text-slate-600 mb-2 mt-4">
    State<span className='text-red-900'>*</span>
  </label>
  <div className="relative">
    <select id="dropdown2" className="border border-slate-200 bg-transparent rounded py-2 px-4 mt-[-4px] text-[14px] text-slate-700 w-full appearance-none">
      <option value="option1">SELECT STATE</option>
      <option value="option2">UTTAR PRADESH</option>
    </select>
    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <FaCaretDown className="text-slate-300" />
    </div>
  </div>
  <label htmlFor="dropdown2" className="block text-[14px] text-slate-600 mb-2 mt-4">
    Purchase City<span className='text-red-900'>*</span>
  </label>
  <div className="relative">
    <select id="dropdown2" className="border border-slate-200 bg-transparent rounded py-2 px-4 mt-[-4px] text-[14px] text-slate-700 w-full appearance-none">
      <option value="option1">Select City</option>
      <option value="option2">NOIDA</option>
    </select>
    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <FaCaretDown className="text-slate-300" />
    </div>
  </div>
  <label htmlFor="dropdown2" className="block text-[14px] text-slate-600 mb-2 mt-4">
    Sector/Industry<span className='text-red-900'>*</span>
  </label>
  <div className="relative">
    <select id="dropdown2" className="border border-blue-400 bg-transparent rounded py-2 px-4 mt-[-4px] text-[14px] text-slate-700 w-full appearance-none">
      <option value="option1">Digital Payment Modes</option>
      <option value="option2">UTTAR PRADESH</option>
    </select>
    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <FaCaretDown className="text-slate-300" />
    </div>
  </div>
  <label htmlFor="dropdown2" className="block text-[14px] text-slate-600 mb-2 mt-4">
    Category<span className='text-red-900'>*</span>
  </label>
  <div className="relative ">
    <select id="dropdown2" className="border border-slate-200 bg-transparent rounded py-2 px-4 mt-[-4px] text-[14px] text-slate-700 w-full appearance-none">
      <option value="option1">BHIM UPI/AEPS/USSD/SMS</option>
      <option value="option2">UTTAR PRADESH</option>
    </select>
    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <FaCaretDown className="text-slate-300" />
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

export default App;
