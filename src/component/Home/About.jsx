import React from 'react';
import { TiTick } from "react-icons/ti";

import img4 from '../Images/img4.png'
import img17 from '../Images/img17.jpg'
const About = () => {
  return (
    <div>
        
      <div className='flex-col mt-6  bg-orange-200'>
        <div className='lg:flex'>
        <img src={img4} className='w-screen object-cover lg:w-2/4' alt="" />
        <div className='mr-10'>
          <div className='text-orange-500 ml-10 text-2xl font-semibold'>
            About Us
          </div>
          <div className='font-semibold ml-10 text-4xl'>

            Outstanding Residential & Commercial Services
          </div>
          <div className='text-slate-700 ml-10 mt-6'>
            All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.
          </div>
          <div className='mt-4 ml-10 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Full-service electrical layout, design
          </div>
          <div className='mt-4 ml-10 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Wiring and installation/upgrades
          </div>
          <div className='mt-4 ml-10 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Emergency power solutions (generators)
          </div>
          <div className='mt-4 ml-10 pb-8 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Virtually any electrical needs you have – just ask!
          </div>
          </div>
        </div>

      </div>  
    </div>
  );
}

export default About;
