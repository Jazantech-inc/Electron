import React from 'react';
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { AiFillClockCircle } from "react-icons/ai";
import ContactForm from '../component/Contact/ContactForm';

const Contact = () => {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13609.13449836894!2d74.337235!3d31.488887000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043dc6173d71%3A0x9aa2e64344511d5d!2sArfa%20Kareem%20Pk%20Rd%2C%20Model%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1680944516988!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className='flex-col sm:text-center space-y-4 p-5 m-8 md:m-10'>
        
        <div className="md:flex md:justify-between">
        <div className="flex">
          <div className='text-orange-500 text-2xl'><FiMapPin /></div>
          <div className='text-gray-600' > <h4 className='text-2xl'>Address:</h4> <br />
            Electrician Company <br /> Arfa Kareem Park Road, Model Town, Lahore</div>
        </div>
        <div className='flex '>
          <div className='text-orange-500 text-2xl'><AiFillClockCircle /></div>
          <div className='text-gray-600'><h4 className='text-2xl'>Work Hours:</h4> <br />
            MON-FRI 8:00AM TO 5:00PM <br />Sat-Sun: Emergency only </div>
        </div>
        <div className='flex '>
          <div className='text-orange-500 text-2xl'>
            <FiPhone />
          </div>
          <div className='text-gray-600'><h4 className='text-2xl'>Phone Numbers:</h4> <br />
            +923/+923 (Appoinments) <br />
            +92301-9092030/+923112798017 (Office)</div>
        </div>
      </div>  
      </div>
    
    <ContactForm/>  
           
      </div>
    



  );
}

export default Contact;
