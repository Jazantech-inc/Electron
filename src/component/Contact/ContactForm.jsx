import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from "antd"
import {saveFeedbackData} from "../../apicall/feedback"
import { MdElectricBolt } from "react-icons/md";
import  img5  from '../Images/img5.jpg'

const rules1 = [
  {
      required: true,
      message: "Required"
  }
]


const ContactForm = () => {

  const [feedback, setFeedback] = useState(false);
  const feedbackButton = () => {
    // setFeedback(!feedback)

  };

  const onFinish = async (values) => {
      // Make an API call to the backend to add the order
      // You can use libraries like axios or fetch to make the API call

      // Example API call using fetch

      try {
          const response = await saveFeedbackData(values)
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
    <div className='relative mt-20 '>
    <div className='w-64 sm:w-96 lg:w-[40rem] p-2  text-center absolute top-[1rem] left-[2rem] sm:left-[7.5rem] md:left-[10rem] lg:top-[2.5rem] lg:left-[17rem] lg:pl-10 lg:pr-10  sm:p-5 rounded-lg bg-white  '>
    <div className='font-bold text-2xl lg:text-xl lg:p-2 '> Contact <span className='text-orange-500'> Feedback</span>  Form </div>
      <div className='text-orange-500 font-bold text-3xl lg:text-2xl hidden lg:block'>
      Get In Touch with Us 
      </div>
      <div className='hidden lg:block lg:p-2'>
      Are you stumped by a home wiring project  or problem? Fill out the <br /> form with the details  of your situation and we can come to your aid.
      </div>
      
      {/* {feedback && ( */}
      <Form layout="vertical" onFinish={onFinish}>
          <div className=' flex-col  items-center lg:p-2  '>
            <div className='lg: lg:space-x-3  lg:p-8' >         
        <Form.Item label="Name" name="name" rules={rules1}>
            <Input type="text" placeholder='Your Name' 
          />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={rules1}>
            <Input type="email" placeholder='Your Email' 
          />
        </Form.Item>
        <Form.Item label="feedback" name="feedback" rules={rules1}>
            <Input type="area" placeholder='Pease Share your experience with Circut care...'   
        />
        </Form.Item>
       
        <Button htmlType="submit" onClick={feedbackButton}  className=" w-[13rem]  text-white bg-orange-500 flex items-center justify-center hover:bg-white"><MdElectricBolt /> Submit Feedback </Button>        
          
            </div>
          </div>
           <div className='text-gray-600 mb-7 hidden lg:block lg:p-2' > All Electrical work must be done by a qualified licensed electrician. </div>
    </Form>
    {/* )} */}
    </div>
    <span className=''>
      <img src={img5} alt="" className='w-screen lg:h-[50rem] object-cover' />
    </span>
  </div>
  );
}

export default ContactForm;
