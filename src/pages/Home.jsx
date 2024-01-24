import React, { useState } from 'react';


import '@splidejs/react-splide/css'
import Slider from '../component/Home/Slider';
import FloatingDiv from '../component/Home/FloatingDiv';
import Shop from '../component/Home/Shop';
import About from '../component/Home/About';
import OurTeam from '../component/Service/OurTeam';
import GiveCall from '../component/Home/GiveCall';
import OurWorkers from '../component/Service/OurWorkers';

const Home = () => {
  
  return (
  <div>
    
      <Slider/>
      <FloatingDiv/>


      {/* floating sa nichy wala */}
      <About/>


      {/* about sa nichy wala */}
      <Shop />
      {/* our team */}
      <OurTeam/>
      <OurWorkers/>
      {/*call     */}
      <GiveCall/>      
      {/* floating div k nichy wala */}

    </div>

  );
}

export default Home;

{/* <div className='absolute z-10 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(9,9,8,0.3)] '></div>
<img src={img2} alt="Image 2" className='w-full h-screen object-cover relative ' />
</div> */}

