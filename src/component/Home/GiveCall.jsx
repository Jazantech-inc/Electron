import React from 'react';
import { MdElectricBolt } from "react-icons/md";
import img18 from '../Images/img18.jpg'
import { FiPhone } from "react-icons/fi";


const GiveCall = () => {
  return (
    <div>
      <div className='relative mt-20'>
        <div className='absolute top-[5rem] sm:left-[7rem] md:left-[10rem] lg:left-[22rem] lg:pl-10 lg:pr-10  sm:p-5 rounded-lg bg-white  '>
          <span className='font-bold text-2xl lg:text-3xl '> Do you</span> <span className='text-orange-500 font-bold text-3xl lg:text-5xl'>Need Help</span>
          <div className='font-bold text-2xl lg:text-3xl '>
            With Electrical
          </div>
          <div className='font-bold text-3xl lg:text-5xl mb-10'>
            Maintenance?
          </div>
          <span className='m-3'>
            Our electrical repair and service options are proudly
          </span>
          <div className='m-3'>
            offered to clients. Give us a call today to schedule
          </div>
          <div className='mb-7 m-3'>
            a free service estimate!
          </div>
          <div className='flex space-x-7 pl-0.5 p-7'>
            <button className='pt-3 pb-3 pr-6 pl-6 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500 hover:border border-orange-500   active:text-white focus:outline-orange-500'><FiPhone />Give Us a Call</button>
            <button className='p-3 pl-7 w-44 bg-slate-800 rounded flex items-center hover:text-slate-900 active:text-white border border-slate-950  font-semibold mr-36 text-orange-500 hover:bg-white 
           '><MdElectricBolt />Free Estimate</button>
          </div>
        </div>
        <span className=''>
          <img src={img18} alt="" className='w-screen h-screen object-cover' />
        </span>
      </div>
    </div>
  );
}

export default GiveCall;
