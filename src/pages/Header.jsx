 import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { AiFillClockCircle } from "react-icons/ai";


const Header = () => {
  return (
      
    <div className=''>
      <div className='bg-slate-800 w-full sm:flex sm:gap-10 lg:flex lg:justify-between p-2  2xl:justify-between text-white '>
      <div className='flex space-x-2 items-center lg:space-x-1'>
        <span className=' text-orange-500 text-sm sm:text-[1rem] md:text-[0.90rem] lg:text-[1rem] 2xl:text-[1.5rem]'>
        <FiMapPin/>
        </span>
        <span className='text-sm sm:text-[0.80rem] md:text-[0.90rem] lg:text-[1rem] 2xl:text-[1.2rem]'>
        Arfa Kareem Park Road, Model Town, Lahore
        </span>
        </div>
      <div className='flex space-x-2 lg:space-x-1 items-center '>
        <span className=' text-orange-500 text-sm sm:text-[1rem] md:text-[0.90rem] lg:text-[1rem] 2xl:text-[1.5rem]'>
        <AiFillClockCircle/>
        </span>
        <span className='text-sm sm:text-[0.80rem] md:text-[0.90rem] lg:text-[1rem] 2xl:text-[1.2rem]'>
        MON-FRI 8:00AM TO 5:00PM
        </span>
        </div>
        
        <div className='flex space-x-2 lg:space-x-1 items-center '>
        <span className=' text-orange-500 text-sm sm:text-[1rem] md:text-[0.90rem] lg:text-[1rem] 2xl:text-[1.5rem]'>
        <FiPhone/>
        </span>
        <span className='text-sm sm:text-[0.80rem] md:text-[0.90rem] lg:text-[1rem] 2xl:text-[1.2rem]'>
          +92301-9092030/+923112798017
          </span>
        </div>
      </div>
      
    </div>

  );
}

export default Header;

