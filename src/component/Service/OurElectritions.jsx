import React from 'react';
import { TiTick } from "react-icons/ti";
import img4 from '../Images/img4.png'
const OurElectritions = () => {
  return (
    <div className='flex-col mt-6  bg-orange-200 '>
      <div className='lg:flex'>
        <img src={img4} className='w-screen object-cover lg:w-2/4' alt="" />
        <div className=''>
          <div className='text-orange-500 m-3  text-2xl font-semibold'>
            Why us?
          </div>
          <div className='font-semibold m-3  text-4xl'>

            Our Electricians are:
          </div>

          <div className='m-4 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Fully screened and background checked for your peace of mind
          </div>
          <div className='m-4 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>

            We don’t hire anyone we wouldn’t hire to work inside of our own homes.
          </div>
          <div className='m-4 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Neat, clean and uniformed for safety and security
          </div>
          <div className='m-4 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Knowledgeable, experienced and skilled
          </div>
          <div className='m-4 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Rigorously trained in customer service
          </div>
          <div className='m-4 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Fully licensed, bonded and insured
          </div>
          <div className='m-4 pb-4 flex items-center'>
            <div className='text-orange-500'>
              <TiTick />
            </div>
            Friendly, helpful, and reliable.
          </div>

        </div>
        </div>

      </div>
  );
}

export default OurElectritions;
