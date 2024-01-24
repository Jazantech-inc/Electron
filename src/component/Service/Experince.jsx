import React from 'react';
import img21 from '../Images/img21.jpg'
import { FiPhone } from "react-icons/fi";


const Experince = () => {
  return (
    <div className='flex-col mt-6  bg-gray-200 text-white'>
      <div className='lg:flex'>

        <img src={img21} className='w-screen object-cover lg:w-2/4' alt="" />
        <div className=''>


          <div className='text-2xl text-orange-500 m-3' >  Our Services </div>
          <div className='text-4xl text-black m-3'>  Responsive & Professional </div>
          <div className='m-4 text-gray-600'>
            We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on.
          </div>
          <div className='text-2xl m-3 text-black'> Call us today </div>
          <div className='flex m-3'>

            <div className='text-orange-500 flex items-center' >
              <FiPhone />
              +92301-9092030/+923112798017
            </div>
          </div>
          <div className='m-3 text-gray-600'>
            We’re available 24/7, 365 days a year.      </div>
        </div>
      </div>
      </div>

  );
}

export default Experince;
