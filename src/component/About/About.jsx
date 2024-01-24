import React from 'react'
import img10 from '../Images/img10.png'
import { FcBusinessman } from "react-icons/fc";
import { GiAchievement } from "react-icons/gi";

const About = () => {
  return (
    <div>
      <div className='flex-col mt-6 bg-slate-800 text-white'>
      <div className='lg:flex'>
        <img src={img10} className='w-screen object-cover lg:w-2/4' alt="" />
        <div className=''>


          <div className='text-2xl text-orange-500 m-2 lg:m-4' > Over 25 Years Experience </div>
          <div className='text-4xl m-2'> Experienced and Reliable Electrical Contractors </div>
         <div className='m-2'>

          We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians.
         </div>
      <div className='m-2'>

          We started out in 2002. We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. Our mission is to service each client with a highly trained and courteous technician that is dependable and always trustworthy.
      </div>
      <div className='flex m-3 justify-center'>

      <div className='flex  items-center' >
         <p className='text-6xl '> <FcBusinessman/> </p>
          24 <br />
          Skilled & Certified <br />
           Electricians
         </div>
          <div className='flex  items-center'>
          <p className='text-6xl text-orange-500'> <GiAchievement/> </p>
          10 <br />
          Skilled & Certified <br />
           Electricians
          </div>
      </div>
        </div>
        </div>


      </div>
    </div>
  )
}

export default About
