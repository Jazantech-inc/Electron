import React from 'react';
import img28 from '../../component/Images/img28.JPG'
import img29 from '../Images/img29.jpg'
import img30 from '../Images/img30.jpg'
import img31 from '../Images/img31.jpg'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

const OurTeam = () => {
  return (
    <div>
      <div className='text-4xl m-3 text-center text-orange-500 font-semibold'>
        Our Team
      </div>
      <div className='text-center m-5'>
        All our personnel operate within an Integrated Management System to ensure the delivery of services that are at an exception level of quality, reliability, and value
      </div>
      <Splide
        options={{
          perPage: 1,
          gap: "1rem",
          arrows: false,
          drag: "free",
          pagination: false,
          autoplay: true,
          interval: 3000,
          rewind: true,
          breakpoints: {
            320: {
              perPage: 1,

            },

            768: {
              perPage: 2,

            },
            1024: {
              perPage: 3,
            },

          }

        }}
      />
      <div className='flex lg:space-x-12 bg-orange-500 pt-10 justify-center'>
        <SplideSlide>
          <div className="main w-100% h-[50vh] bg-orange-500">
            <div className="profile relative  w-[220px] h-[220px] bg-white">
              <div className=' w-100% '>
                <img src={img28} className='mx-auto bg-orange-500 img w-100% h-[30vh]' />
              </div>
              <div className="caption text-center opacity-0 font-mono font-semibold">
                <h1>Muhammad Bilal</h1>
                <h3 className='text-orange-500'>C.E.O</h3>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="main w-100% h-[50vh]  bg-orange-500 hidden md:block">
            <div className="profile relative  w-[220px] h-[220px] bg-white">
              <div className=' w-100% '>
                <img src={img31} className='mx-auto bg-orange-500 img w-100% h-[30vh]' />
              </div>
              <div className="caption text-center opacity-0 font-mono font-semibold">
                <h1>Ameer Muavia</h1>
                <h3 className='text-orange-500'>H.O.D</h3>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="main w-100% h-[50vh]  bg-orange-500 hidden md:block">
            <div className="profile relative  w-[220px] h-[220px] bg-white">
              <div className=' w-100% '>
                <img src={img30} className='mx-auto bg-orange-500 img w-100% h-[30vh]' />
              </div>
              <div className="caption text-center opacity-0 font-mono font-semibold">
                <h1>Umar Jutt</h1>
                <h3 className='text-orange-500'>Manager</h3>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="main w-100% h-[50vh]  bg-orange-500 hidden lg:block">
            <div className="profile relative  w-[220px] h-[220px] bg-white">
              <div className=' w-100% '>
                <img src={img29} className='mx-auto bg-orange-500 img w-100% h-[30vh]' />
              </div>
              <div className="caption text-center opacity-0 font-mono font-semibold">
                <h1> Husnain Faraz</h1>
                <h3 className='text-orange-500'>Branch Manager</h3>
              </div>
            </div>
          </div>
        </SplideSlide>

      </div>
    </div>



  );
}

export default OurTeam;
