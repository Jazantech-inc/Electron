import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { AiFillClockCircle } from "react-icons/ai";
import React from 'react';
import { MdMail } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Logo from "../component/Home/Logo";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='bg-orange-500 p-3 w-full  flex-col justify-center items-center '>
        <label className='font-semibold text-2xl text-white'>Subscribe To Our Newsletter:</label>
        <div className="sm:flex justify-center gap-3">
          <input type="text" placeholder='Your e-mail address' className='p-1 w-3/4  rounded flex' />
          <button className=' bg-slate-800 p-2 rounded flex items-center active:text-white  border border-slate-950 font-semibold  text-orange-500 hover:bg-white 
           '> <MdMail />Subscribe Now</button>
        </div>
      </div>
      <div className='text-white flex-col  bg-slate-800'>
        <div className="sm:flex justify-center ">

          <div>
            <Logo />
            <p className='p-2 2xl:w-3/4 xl:3/4'>Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.</p>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.2834552487843!2d74.33504064991968!3d31.48889165575668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043dc6173d71%3A0x9aa2e64344511d5d!2sArfa%20Kareem%20Pk%20Rd%2C%20Model%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1680340974432!5m2!1sen!2s" className="w-screen sm:w-96 2xl:w-96 p-3 h-48" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="flex-col  p-4 text-white bg-slate-800">
        <div className="sm:flex justify-between  items-center gap-6">
          <div>
            <ul>    
              <NavLink to='/' className='cursor-pointer hover:underline hover:text-orange-500 flex items-center' ><TiTick /> HOME </NavLink>
              <NavLink to='/service' className='cursor-pointer hover:underline hover:text-orange-500 flex items-center'><TiTick />SERVICE</NavLink>
            </ul>
          </div>
          <div>
            <ul>

              <NavLink to='/shop' className='cursor-pointer hover:underline hover:text-orange-500 flex items-center'><TiTick />SHOP</NavLink>
              <NavLink to='/contact' className='cursor-pointer hover:underline hover:text-orange-500 flex items-center'><TiTick />CONTACT</NavLink>
            </ul>
          </div>
          <div className="">
            <span className='text-orange-500   flex items-center'><FiMapPin />Arfa Kareem Park Road, Model Town, Lahore</span>

            <span className='items-center flex text-orange-500'><AiFillClockCircle />MON-FRI 8:00AM TO 5:00PM</span>
            <span></span>
            <span className='text-orange-500  flex items-center'>
              <FiPhone />+92301-9092030/+923112798017</span>

          </div>
        </div>
      </div>
      <div className=" text-white text-center p-4 bg-slate-800 flexcol ">© 2022 Electrical Services. All Rights Reserved.
        <div className="flex space-x-4 justify-center p-4  text-3xl cursor-pointer">
          <BsFacebook /><BsGithub /><BsInstagram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
