import React from 'react';
import img27 from '../Images/img27.jpg'
import img26 from '../Images/img26.jpg'
import img14 from '../Images/img14.jpg'
import img16 from '../Images/img16.jpg'
import img19 from '../Images/img19.png'
import img25 from '../Images/img25.jpg'
import img23 from '../Images/img23.jpg'
import img24 from '../Images/img24.jpg'

import { MdElectricBolt } from "react-icons/md";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
const Offer = () => {
  return (
    <div>
      <div className='text-4xl text-black text-center m-5 font-semibold'>
        What We Offer
      </div>
      <div className='flex-col text-center text-2xl '>
      <div className='md:flex md:justify-between'>

        <div className=' hover:text-orange-500 '>
          Commercial Services
        </div>
        <div className=' hover:text-orange-500 '>
          Industrial Services
        </div>
        <div className=' hover:text-orange-500 '>
          Residential Services
        </div>
        </div>
      </div>
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          arrows: true,
          drag: "free",
          pagination: false,
          autoplay: true,
          interval:3000,
          rewind:true,
          breakpoints:{
            320:{
            perPage:1,
            arrows:true,
            },
            640:{
            arrows:true,
            },
            768:{
              perPage:2,
              arrows:true,
            },
            1024:{
            perPage:2,
            arrows:true,
            },
            1440:{
            arrows:true,
            },
            1536:{
            arrows:true,
            },
          }
        
        }}
      >
        <SplideSlide>
          {/* comercial */}
          {/* card 1 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img24} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Commercial</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Electrical Repairs</div>
                <div className='ml-10'>
                  Electrical repairs should <br />
                  always be handled by a <br />
                  professional electrician.
                </div>

              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* comercial */}
          {/* card 2 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img26} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Commercial</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Panel Upgrades</div>
                <div className='ml-10'>
                  Electrical panel maintenance, <br />
                  therefore, should be part of <br />
                  your regular routine.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* comercial */}
          {/* card 3 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img25} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Commercial</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Lighting Upgrades</div>
                <div className='ml-10'>
                  Lighting can enhance and change <br /> the mood, the look and feel <br /> of any room or space.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* industrial */}
          {/* card 1 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img16} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Industrial</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Surge Protection</div>
                <div className='ml-10'>

                  An electrical surge can happen <br /> for a number of reasons, <br /> including lightning strikes.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* industrial */}
          {/* card 2 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img19} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Industrial</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Surge Protection</div>
                <div className='ml-10'>

                  Generators are a great way to <br /> protect your home or business <br /> from brownouts and power outages.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* industrial */}
          {/* card 3 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img23} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Industrial</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Install a Ceiling Fan</div>
                <div className='ml-10'>

                  If you need a ceiling fan installed, <br /> repaired, or updated, our electricians <br /> are ready to help you.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* residental */}
          {/* card 1 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img16} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Residental</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Outdoor and Motion Lighting</div>
                <div className='ml-10'>

                  Outdoor Lighting can  <br /> transform your outdoor <br /> living space completely.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* residental */}
          {/* card 2 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img14} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Residental</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Digital Thermostat Installation</div>
                <div className='ml-10'>

                  Give us a call to <br /> plan your Digital Thermostat <br /> Installation today.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          {/* residental */}
          {/* card 3 */}
          <div className='w-[22.7rem] h-fit  group'>
            <div className='relative overflow-hidden '>
              <img src={img27} alt="" className='h-[20rem] w-[30rem]'/>
              <div className='absolute cursor-pointer  h-full w-full bg-black/60  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-100 text-white '>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Residental</div>
                <div className='mt-8 ml-10 font-bold text-3xl hover:text-orange-500'>Baseboard Heating Installation</div>
                <div className='ml-10'>

                  Baseboard heaters are one of the <br /> easiest systems to operate.
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    
    </div>
  );
}

export default Offer;
