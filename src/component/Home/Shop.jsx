import React, { useState } from 'react';
import { saveOrderData } from "../../apicall/order"
import { Form, Input, Button, message, Select, Col } from "antd"

import { TiTick } from "react-icons/ti";
import { MdElectricBolt } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiControlTower } from "react-icons/gi";
import { TbHomeBolt } from "react-icons/tb";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

const Shop = () => {
  const rules = [
    {
      required: true,
      message: "Required"
    }
  ]
  
 

  const [order, setOrder] = useState(false);
  const handleOrderButton = () => {
    setOrder(!order);

  };

  const onFinish = async (values) => {
    // Make an API call to the backend to add the order
    // You can use libraries like axios or fetch to make the API call

    // Example API call using fetch

    try {
      const response = await saveOrderData(values)
      // values.seller = users._id; 
      if (response.success) {
        message.success(response.message)
      } else {
        throw new Error(response.message)
      }
    } catch (error) {
      message.error(error.message)
    }

  }




  return (
    <div>
      <div className='text-2xl mb-5 text-center text-orange-500  m-5 font-semibold'>
        Save on the Service You Need
      </div>
      <div className='text-5xl mb-5 text-black text-center  m-5 font-semibold'>
        Maintenance Plans
      </div>
      <div className=' mb-5 text-center '>


        With an electrical maintenance plan, you won’t find yourself <br /> in a panic wondering who to call when you’re having <br /> problems with your electrical system.
      </div>
      <Splide
        options={{
          perPage: 1,
          gap: "3rem",
          arrows: true,
          drag: "free",
          pagination: false,
          autoplay: true,
          interval: 3000,
          rewind: true,

        }}
      >
        <SplideSlide>
          <div className='border border-slate-800  p-3 rounded w-4/5 mx-auto xl:w-2/5'>
            <div className='text-6xl hover:text-orange-500  mb-3'>
              <GiCommercialAirplane className='mx-auto' />
            </div>
            <div className='font-semibold text-2xl text-center  mb-8'>
              Commercial Service
            </div>
            <div className=' flex text-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Indoor/Outdoor Lighting installation
            </div>
            <div className='flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Wiring and installation/upgrades
            </div>
            <div className='flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Ceiling Fan Installation
            </div>
            <div className=' flex items-center justify-center mb-4
          '>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              24-hour Response
            </div>
            {/* price */}
            <div className='text-gray-500 text-4xl m-6 text-center font-bold'>
              Rs:3199.00 Pkr
            </div>

           
              <button  onClick={handleOrderButton} className='mx-auto p-3 m-7 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500 border border-orange-500 active:text-white hover:border-orange-500'> <MdElectricBolt />Order Now</button>
              {order && (
       
       <Form layout="vertical" onFinish={onFinish}>
             <div className='bg-orange-500 flex-col p-5 items-center space-x-5  space-y-5'>
               <div className='lg:flex lg:space-x-5' >         
           <Form.Item label="Name" name="name" rules={rules}>
               <Input type="text" placeholder='Your Name' 
             />
           </Form.Item>
           <Form.Item label="Email" name="email" rules={rules}>
               <Input type="email" placeholder='Your Email' 
             />
           </Form.Item>
           <Col span={5}>
           <Form.Item label="Service" name="service" rules={rules} className='m-2'>
                       <Select dropdownStyle={{ backgroundColor: 'orange' }} name="service">
                         <Select.Option value="">Select</Select.Option>
                         <Select.Option value="Comercial Service">Comercial Service</Select.Option>
                         <Select.Option value="Industrial Secvice">Industrial Secvice</Select.Option>
                         <Select.Option value="Reasidental Service">Reasidental Service</Select.Option>
                         <Select.Option value="Home Service">Home Service</Select.Option>
                       </Select>
                     </Form.Item>
                     </Col>
           <Form.Item label="Date" name="date" rules={rules}>
               <Input type="date" className='w-[13rem]' 
             />
           </Form.Item>
           <Button htmlType="submit"  className="mt-8 w-[13rem] text-white bg-orange-500 flex items-center justify-center hover:bg-white"><MdElectricBolt /> Get Service </Button>        
             
               </div>
             </div>
       </Form>
           
           
         )}
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='border border-slate-800 shadow-lg p-3  rounded w-4/5 mx-auto xl:w-2/5'>
            <div className='text-6xl hover:text-orange-500  mb-3'>

              <GiControlTower className='mx-auto' />
            </div>
            <div className='font-semibold text-2xl text-center mb-8'>
              Industrial Service
            </div>

            <div className=' flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Full-service electrical layout, design
            </div>
            <div className='flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Annual A/C inspection
            </div>
            <div className='flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Supply and install Sensor lights
            </div>
            <div className=' flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Replace hot plates
            </div>
            {/* price */}
            <div className='text-gray-500 text-4xl m-6 text-center font-bold'>
              Rs:4199.00 Pkr
            </div>
            <button  onClick={handleOrderButton} className='mx-auto p-3 m-7 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500 border border-orange-500 active:text-white hover:border-orange-500'> <MdElectricBolt />Order Now</button>
            {order && (
       
       <Form layout="vertical" onFinish={onFinish}>
             <div className='bg-orange-500 flex-col p-5 items-center space-x-5  space-y-5'>
               <div className='lg:flex lg:space-x-5' >         
           <Form.Item label="Name" name="name" rules={rules}>
               <Input type="text" placeholder='Your Name' 
             />
           </Form.Item>
           <Form.Item label="Email" name="email" rules={rules}>
               <Input type="email" placeholder='Your Email' 
             />
           </Form.Item>
           <Col span={5}>
           <Form.Item label="Service" name="service" rules={rules} className='m-2'>
                       <Select dropdownStyle={{ backgroundColor: 'orange' }} name="service">
                         <Select.Option value="">Select</Select.Option>
                         <Select.Option value="Comercial Service">Comercial Service</Select.Option>
                         <Select.Option value="Industrial Secvice">Industrial Secvice</Select.Option>
                         <Select.Option value="Reasidental Service">Reasidental Service</Select.Option>
                         <Select.Option value="Home Service">Home Service</Select.Option>
                       </Select>
                     </Form.Item>
                     </Col>
           <Form.Item label="Date" name="date" rules={rules}>
               <Input type="date" className='w-[13rem]' 
             />
           </Form.Item>
           <Button htmlType="submit"  className="mt-8 w-[13rem] text-white bg-orange-500 flex items-center justify-center hover:bg-white"><MdElectricBolt /> Get Service </Button>        
             
               </div>
             </div>
       </Form>
           
           
         )}
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='border border-slate-800 shadow-lg p-3  rounded w-4/5 mx-auto xl:w-2/5'>
            <div className='text-6xl hover:text-orange-500 mb-3'>
              <TbHomeBolt className='mx-auto' />
            </div>
            <div className='font-semibold text-2xl text-center mb-8'>
              Residental Service
            </div>

            <div className=' flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Annual electrical inspection
            </div>
            <div className='flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Wiring and installation/upgrades
            </div>
            <div className='flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              Replace hot plates
            </div>
            <div className=' flex items-center justify-center mb-4'>
              <div className='text-orange-500'>
                <TiTick />
              </div>
              24-hour Response
            </div>
            {/* price */}
            <div className='text-gray-500 text-4xl text-center m-6 font-bold'>
              Rs: 1999.00 Pkr
            </div>

            <button  onClick={handleOrderButton} className='mx-auto p-3 m-7 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500 border border-orange-500 active:text-white hover:border-orange-500'> <MdElectricBolt />Order Now</button>
              {order && (
       
       <Form layout="vertical" onFinish={onFinish}>
             <div className='bg-orange-500 flex-col p-5 items-center space-x-5  space-y-5'>
               <div className='lg:flex lg:space-x-5' >         
           <Form.Item label="Name" name="name" rules={rules}>
               <Input type="text" placeholder='Your Name' 
             />
           </Form.Item>
           <Form.Item label="Email" name="email" rules={rules}>
               <Input type="email" placeholder='Your Email' 
             />
           </Form.Item>
           <Col span={5}>
           <Form.Item label="Service" name="service" rules={rules} className='m-2'>
                       <Select dropdownStyle={{ backgroundColor: 'orange' }} name="service">
                         <Select.Option value="">Select</Select.Option>
                         <Select.Option value="Comercial Service">Comercial Service</Select.Option>
                         <Select.Option value="Industrial Secvice">Industrial Secvice</Select.Option>
                         <Select.Option value="Reasidental Service">Reasidental Service</Select.Option>
                         <Select.Option value="Home Service">Home Service</Select.Option>
                       </Select>
                     </Form.Item>
                     </Col>
           <Form.Item label="Date" name="date" rules={rules}>
               <Input type="date" className='w-[13rem]' 
             />
           </Form.Item>
           <Button htmlType="submit"  className="mt-8 w-[13rem] text-white bg-orange-500 flex items-center justify-center hover:bg-white"><MdElectricBolt /> Get Service </Button>        
             
               </div>
             </div>
       </Form>
           
           
         )}
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Shop;
