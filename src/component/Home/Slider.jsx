import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Select, Col } from "antd"
import { saveFormData } from "../../apicall/service"
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import { MdElectricBolt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const rules = [
  {
    required: true,
    message: "Required"
  }
]


function Slider() {

  const [From, setForm] = useState(false);
  const handleToggleForm = () => {
    setForm(!From);

  };


  // const { users } = useSelector(state => state.users)

  const onFinish = async (values) => {
    try {
      const response = await saveFormData(values)
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
      <Splide
        options={{
          perPage: 1,
          gap: "1rem",
          arrows: false,
          drag: "free",
          pagination: false,
          autoplay: false,
          interval: 3000,
          rewind: true,
          breakpoints: {
            320: {
              arrows: false,
            },
            640: {
              arrows: true,
            },
            768: {
              arrows: true,
            },
            1024: {
              arrows: true,
            },
            1440: {
              arrows: true,
            },
            1536: {
              arrows: true,
            },
          }
        }}

      >
        <SplideSlide>

          <div className='absolute top-48 left-10 sm:left-28 md:left-[11rem] lg:left-[22rem] xl:left-[27rem] 2xl:left-[30rem] animate-pulse'>

            <div className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center text-white mb-5'>
              keeping your wired.
            </div>
            <div className='text-2xl sm:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-bold'>
              we are the current <br />
              <p className='text-center'>specialist. </p>
            </div>
          </div>
          <img src={img1} alt="Image 1" className='w-screen h-screen  sm:h-[35rem] 2xl:w-full object-cover' />
          <div className='relative -translate-y-16'>
            <button onClick={handleToggleForm} className='pt-3 pb-3 pr-6 pl-6 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500   active:text-white focus:outline-orange-500'> <MdElectricBolt />Request Today Service</button>
            <div>



              {From && (

                <Form layout="vertical" onFinish={onFinish}>
                  <div className='bg-slate-800 flex-col p-5 items-center space-x-5  space-y-5'>
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
                            <Select.Option value="Electrician">Electrician</Select.Option>
                            <Select.Option value="Penal Secvice">Penal Secvice</Select.Option>
                            <Select.Option value="Plumber Secvice">Plumber Secvice</Select.Option>
                            <Select.Option value="Ac Service">Ac Service</Select.Option>
                            <Select.Option value="Home Service">Home Service</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Form.Item label="Date" name="date" rules={rules}>
                        <Input type="date" className='w-[13rem]'
                        />
                      </Form.Item>
                      <Button htmlType="submit" className="mt-8 w-[13rem] text-white bg-orange-500 flex items-center justify-center hover:bg-white"><MdElectricBolt /> Get Service </Button>

                    </div>
                  </div>
                </Form>


              )}
            </div>
          </div>

        </SplideSlide>
        <SplideSlide>
          <div className='absolute top-48 left-8 sm:left-28 md:left-[11rem] lg:left-[17rem] xl:left-[22rem] animate-pulse'>
            <div className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center text-white mb-5'>
              Making our client happier.
            </div>
            <div className='text-2xl sm:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-bold'>
              Best Service for your  <br />
              <p className='text-center'>Family. </p>
            </div>
          </div>
          <img src={img2} alt="Image 2" className='w-screen h-screen object-cover' />
          <div className='relative -translate-y-16'>
            <button onClick={handleToggleForm} className='pt-3 pb-3 pr-6 pl-6 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500   active:text-white focus:outline-orange-500'> <MdElectricBolt />Request Today Service</button>
            <div>


              {From && (
                <Form layout="vertical" >
                  <div className='bg-slate-800 flex-col p-5 items-center space-x-5  space-y-5'>
                    <div className='lg:flex lg:space-x-5' >
                      <Form.Item label="Name" name="name" rules={rules}>
                        <Input type="text" placeholder='Your Name' />
                      </Form.Item>
                      <Form.Item label="Email" name="email" rules={rules}>
                        <Input type="email" placeholder='Your Email' />
                      </Form.Item>
                      <Col span={5}>
                        <Form.Item label="Service" name="service" rules={rules} className='m-2'>
                          <Select dropdownStyle={{ backgroundColor: 'orange' }} name="service">
                            <Select.Option value="">Select</Select.Option>
                            <Select.Option value="Electrician">Electrician</Select.Option>
                            <Select.Option value="Penal Secvice">Penal Secvice</Select.Option>
                            <Select.Option value="Plumber Secvice">Plumber Secvice</Select.Option>
                            <Select.Option value="Ac Service">Ac Service</Select.Option>
                            <Select.Option value="Home Service">Home Service</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Form.Item label="Date" name="date" rules={rules}>
                        <Input type="date" className='w-[13rem]' />
                      </Form.Item>
                      <Button htmlType="submit" className="mt-8 w-[13rem] text-white bg-orange-500 flex items-center justify-center hover:bg-white"><MdElectricBolt /> Get Service </Button>

                    </div>
                  </div>
                </Form>
              )}
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='absolute top-48 left-8 sm:left-28 md:left-[11rem] lg:left-[17rem] xl:left-[22rem] animate-pulse'>
            <div className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center text-white mb-5'>
              We can light everything.
            </div>
            <div className='text-2xl sm:text-5xl lg:text-6xl xl:text-7xl text-center  text-white font-bold'>
              Nothing is  imposible <br />
              <p className='text-center'>for us. </p>
            </div>
          </div>
          <img src={img3} alt="Image 2" className='w-screen h-screen object-cover' />
          <div className='relative -translate-y-16'>
            <button onClick={handleToggleForm} className='pt-3 pb-3 pr-6 pl-6 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500   active:text-white focus:outline-orange-500'> <MdElectricBolt />Request Today Service</button>
            <div>


              {From && (
                <Form layout="vertical" >
                  <div className='bg-slate-800 flex-col p-5 items-center space-x-5  space-y-5'>
                    <div className='lg:flex lg:space-x-5' >
                      <Form.Item label="Name" name="name" rules={rules}>
                        <Input type="text" placeholder='Your Name' />
                      </Form.Item>
                      <Form.Item label="Email" name="email" rules={rules}>
                        <Input type="email" placeholder='Your Email' />
                      </Form.Item>
                      <Col span={5}>
                        <Form.Item label="Service" name="service" rules={rules} className='m-2'>
                          <Select dropdownStyle={{ backgroundColor: 'orange' }} name="service">
                            <Select.Option value="">Select</Select.Option>
                            <Select.Option value="Electrician">Electrician</Select.Option>
                            <Select.Option value="Penal Secvice">Penal Secvice</Select.Option>
                            <Select.Option value="Plumber Secvice">Plumber Secvice</Select.Option>
                            <Select.Option value="Ac Service">Ac Service</Select.Option>
                            <Select.Option value="Home Service">Home Service</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Form.Item label="Date" name="date" rules={rules}>
                        <Input type="date" className='lg:w-[13rem]' />
                      </Form.Item>
                      <Button htmlType="submit" className="mt-8 w-[13rem] text-white bg-orange-500 flex items-center justify-center hover:bg-white"><MdElectricBolt /> Get Service </Button>

                    </div>
                  </div>
                </Form>
              )}
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
