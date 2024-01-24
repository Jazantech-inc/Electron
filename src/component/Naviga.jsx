import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { MdElectricBolt } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaSearchengin } from "react-icons/fa";
import Logo from './Home/Logo';
import  Divider  from './Divider';

const Naviga = () => {

  const [open, setOpen]=useState(true)

  const togle=()=>{
    document.querySelector(".sidebar").classList.toggle("left-[0px]")
    setOpen(!open)
    
  }

  
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleToggleSearch = () => {
      setSearchVisible(!isSearchVisible);
    };
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
        };
  
    
    
    
  
  
  return (
    <div className=' '>

      <div className='flex items-center justify-center space-x-10'>
  <Logo/>

  <div className='flex justify-end items-center'>
        
        {isSearchVisible && (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
              />
             
            </form>
            
          </div>
        )}
        <FaSearchengin onClick={handleToggleSearch}  className='text-3xl absolute transit text-orange-500'
        style={{
          transition: 'height 0.5s',
          overflow: 'hidden',
        }}
        />
      </div>
    
    
  
  <GiHamburgerMenu onClick={togle} className={`cursor-pointer mr-5 ${!open?"hidden":"block"} `} />
  </div>

<div className="sidebar bg-white rounded-2xl fixed top-0 bottom-0 z-50 h-full w-screen left-[-322px] duration-1000 sm:w-1/5">
   
  <div className='flex items-center ml-3 mt-2 cursor-pointor p-1 justify-center' onClick={togle}>
  <RxCross1/> close
  </div>
    <Divider/>
  <ul className='flex flex-col space-y-5 text-center'> 

<div className='relative duration-300 p-2'>
    <NavLink to='/' className='link' onClick={togle} > HOME </NavLink>
</div>
<div className='relative duration-300 p-2'>
    <NavLink to='/about' className='link' onClick={togle} >ABOUT</NavLink>
</div>
<div className='relative duration-300 p-2'>
    <NavLink to='/service' className='link' onClick={togle}>SERVICES</NavLink>
</div>
<div className='relative duration-300 p-2'>
    <NavLink to='/shop' className='link'>SHOP</NavLink>
</div>
<div className='relative duration-300 p-2'>
    <NavLink to='/contact' className='link' onClick={togle}>CONTACT</NavLink>
</div>
<div className='relative duration-300 w-32 mx-auto'>
  <NavLink to='/login' className='flex justify-center items-center mt-8 p-3 border border-orange-500 rounded-md font-mediumbold bg-orange-500  text-white  hover:bg-white hover:text-orange-500   active:text-white hover:border-orange-500' onClick={togle}> <MdElectricBolt/>Login</NavLink>
</div>
  </ul>
</div>
      </div>
  );
}

export default Naviga;



