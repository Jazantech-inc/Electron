import React from 'react';
import img15 from '../component/Images/img15.jpg'
import img6 from '../component/Images/img6.jpg'
import img11 from '../component/Images/img11.jpg'
import img13 from '../component/Images/img13.jpg'
import img12 from '../component/Images/img12.jpg'
import img10 from '../component/Images/img10.png'
import { FcBusinessman } from "react-icons/fc";
import { GiAchievement } from "react-icons/gi";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCalculatorFill } from "react-icons/bs";
import { SiLess } from "react-icons/si";
import About from '../component/About/About';
const Aboutus = () => {
  return (
    <div >

      <About />



      <div className=' flex-col sm:text-center space-y-4 p-5 m-8 md:m-10'>
        <div className='md:flex md:justify-between'>

          <div className="flex space-x-6">
            <div className='text-orange-500 text-3xl'><AiFillClockCircle /></div>
            <div className='text-gray-600' > <h4 className='text-2xl'>24/7 Emergency Services:</h4> <br />
              24/7 emergency electrician<br /> you can trust </div>
          </div>
          <div className='flex space-x-6'>
            <div className='text-orange-500 text-3xl'><BsFillCalculatorFill /></div>
            <div className='text-gray-600'><h4 className='text-2xl'>Free Estimates:</h4> <br />
              Yes, we offer free estimates for <br />electrical additions or replacements. </div>
          </div>

          <div className='flex space-x-6'>
            <div className='text-orange-500 text-4xl'>
              <SiLess />
            </div>
            <div className='text-gray-600'><h4 className='text-2xl'>Low Price Guarantee:</h4> <br />
              We strive to offer the <br />
              lowest price on the market.</div>
          </div>
        </div>

      </div>
      <div className='flex-col mt-6 '>
        <div className='lg:flex'>
          <img src={img6} className='w-screen object-cover lg:w-2/4' alt="" />
          <div className=''>


            <div className='text-3xl text-orange-500 m-2' > Certificates </div>
            <div className='text-4xl m-2'> We are a Qualified & Certified Electrical Company </div>
            <div className='m-4'>

              We currently employ a team of fully qualified electricians and a number of apprentices. We have been registered with he ECA and therefore all our electricians are JIB registered. Our aim is to keep our services high and our prices very competitive.
            </div>
            <div className='flex  justify-center'>
              <div className='flex-col  items-center' >
                <div className='sm:flex sm:space-x-5 '>
                  <img src={img11} className='w-40 lg:w-2/4' alt="" />
                  <img src={img12} className='w-40 lg:w-2/4' alt="" />
                  <img src={img13} alt="" className='w-40' />
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Aboutus;



