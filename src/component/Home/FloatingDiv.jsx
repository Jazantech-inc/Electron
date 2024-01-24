import React from 'react';
import img22 from '../Images/img22.jpg'
import img6 from '../Images/img6.jpg'
import img8 from '../Images/img8.jpeg'
import img9 from '../Images/img9.jpeg'
import Logo from './Logo';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

const FloatingDiv = () => {
  return (
    
    
       <div className=''>
        <div className='text-center  font-semibold text-3xl'>
        <div className='text-4xl font-mediumbold mb-4'> <span className='font-serif text-orange-500'>E</span>lectric<span className='font-serif text-orange-500'>M</span>en</div>

        
        <p className='text-xl font-light w-11/12 2xl:w-8/12 text-center pl-9 mb-4 2xl:pl-96'>Are you interested in finding out We have highly experienced electricians of all type. <br /> Please constact us.</p>


      </div>
       <Splide
       options={{
          
          width:'100%',
          height:'100%',
          drag: "free",
          pagination: false,
          autoplay: true,
          interval:3000,
          rewind:true,
          breakpoints:{
            320:{
              perPage: 1,
              arrows: false,
              
            },
            1024:{
              perPage: 1,
              gap: "1",
            },
            1440:{
              perPage: 3,
              gap: "1",
              
            },
            1536:{
              perPage: 3,
              arrows: false,
              },
          }
        }}
       >
         
        <SplideSlide>
        
        <section className='mx-auto w-fit mb-8 md:ml-3 2xl:ml-24'>
          {/* card 1 */}
          <div className='w-[22.5rem] h-full 2xl:ml-8 group'>
            <div className='relative overflow-hidden '>
              <img src={img6} alt="" />
              <div className='absolute cursor-pointer  h-full w-full bg-black/20  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
              <div className='hover:text-orange-500 mt-8 ml-10 font-bold text-3xl'>Commercial</div>
                <li className='mt-4 ml-3'>

                  We offer the highest level of
                  responsiveness, reliability,
                  including on-line job management
                  and reporting.
                </li>
                <li className='ml-3'>
                Our highly experienced
                contractors across the nation.
                <li>
                ensure that your premises are always maintained and compliant.
                </li>
                </li>
              </div>
            </div>
          </div>
        </section>
        </SplideSlide>
        <SplideSlide>
        <section className='mx-auto w-fit sm:ml-1.5 2xl:ml-4'>
          {/* card 2 */}
          <div className='w-[24.3rem] h-fit group'>
            <div className='relative overflow-hidden'>
              <img src={img8} alt="" />
              <div className='absolute cursor-pointer  h-full w-[24.3rem] bg-black/20  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
              <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Industrial</div>
                <li className='mt-4 ml-3'>
                  We offer the highest level of
                  responsiveness, reliability,
                  including on-line job management
                  and reporting.
                </li>
                <li className='ml-3'>
                Our highly experienced
                contractors across the 
                <li>
                nation. ensure that your premises are always  <br />maintained and compliant.
                </li>
                </li>
              </div>
            </div>
          </div>
        </section>
        </SplideSlide>
        <SplideSlide>
        <section className='mx-auto w-fit'>
          {/* card 3 */}
          <div className='w-96  h-fit group'>
            <div className='relative overflow-hidden '>
              <img src={img9} alt="" />
              <div className='absolute  h-full w-full bg-black/20  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
              <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Residential</div>
                <li className='mt-4 ml-3'>

                  We offer the highest level of
                  responsiveness, reliability,
                  including on-line job management
                  and reporting.
                </li>
                <li className='ml-3'>
                Our highly experienced
                contractors across the nation.
                <li>
                ensure that your premises are always maintained and compliant.
                </li>
                </li>
              </div>
            </div>
          </div>
        </section>
        </SplideSlide>
      
        
        </Splide> 
      


      </div>
  );
}

export default FloatingDiv;
