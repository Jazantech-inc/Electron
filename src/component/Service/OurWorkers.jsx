import React, { useState } from 'react';
import img28 from "../../component/Images/img28.JPG"
import { MdElectricBolt } from "react-icons/md";
import { Form, Input, Button, message, Select, Col } from "antd"
import { saveBookData } from "../../apicall/book"


const rules = [
    {
        required: true,
        message: "Required"
    }
]

const OurWorkers = () => {

    const [book, setBook] = useState(false);
    const handleOrderButton = () => {
        setBook(!book);

    };

    const onFinish = async (values) => {
        // Make an API call to the backend to add the order
        // You can use libraries like axios or fetch to make the API call

        // Example API call using fetch

        try {
            const response = await saveBookData(values)
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
            <div className='text-4xl m-9 text-center text-orange-500 font-semibold'>
                Fully Qualified Electricians
            </div>
            <div className='text-center m-5 text-black'>
                All our personnel operate within an Integrated Management System to ensure the delivery of services that are at an exception level of quality, reliability, and value
            </div>

            {/* <Splide
                options={{
                    perPage: 1,
                    gap: "1rem",
                    arrows: false,
                    drag: "free",
                    pagination: false,
                    autoplay: true,
                    interval: 3000,
                    rewind: true,
                    breakpoints: {
                        320: {
                            perPage: 1,

                        },

                        768: {
                            perPage: 2,

                        },
                        1024: {
                            perPage: 3,
                        },

                    }

                }}
            /> */}
            {/* <SplideSlide> */}
                <div>
                    <div className='flex justify-between bg-orange-500 pb-8'>
                        <div className='flex lg:space-x-12 bg-orange-500 pt-10 justify-center'>
                            <div className="w-main w-100% h-[50vh]  bg-orange-500">
                                <div className="w-profile relative  w-[220px] h-[220px] bg-white rounded-lg p-5">
                                    <div className=' w-100% '>
                                        <img src={img28} className='mx-auto bg-orange-500 w-img w-100% h-[30vh] rounded-full' />
                                    </div>
                                    <div className="w-caption opacity-0 text-center font-mono font-semibold">
                                        <h1>Haris Ashfaq</h1>
                                        <h3 className='text-orange-500'>Electrician,
                                            Penal Secvice,
                                            Plumber ,
                                            Ac Service,
                                            Home Service</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </SplideSlide> */}
                    {/* <SplideSlide> */}
                        <div className='flex lg:space-x-12 bg-orange-500 pt-10 justify-center'>
                            <div className="w-main w-100% h-[50vh]  bg-orange-500">
                                <div className="w-profile relative  w-[220px] h-[220px] bg-white rounded-lg p-5">
                                    <div className=' w-100% '>
                                        <img src={img28} className='mx-auto bg-orange-500 w-img w-100% h-[30vh] rounded-full' />
                                    </div>
                                    <div className="w-caption opacity-0 text-center font-mono font-semibold">
                                        <h1>Uheed Asif</h1>
                                        <h3 className='text-orange-500'>Electrician,
                                            Penal Secvice,
                                            Plumber ,
                                            Ac Service,
                                            Home Service</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </SplideSlide> */}
                    {/* <SplideSlide> */}
                        <div className='flex lg:space-x-12 bg-orange-500 pt-10 justify-center'>
                            <div className="w-main w-100% h-[50vh]  bg-orange-500">
                                <div className="w-profile relative  w-[220px] h-[220px] bg-white rounded-lg p-5">
                                    <div className=' w-100% '>
                                        <img src={img28} className='mx-auto bg-orange-500 w-img w-100% h-[30vh] rounded-full' />
                                    </div>
                                    <div className="w-caption opacity-0 text-center font-mono font-semibold">
                                        <h1>Ahmed</h1>
                                        <h3 className='text-orange-500'>Electrician,
                                            Penal Secvice,
                                            Plumber ,
                                            Ac Service,
                                            Home Service</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </SplideSlide> */}
                    {/* <SplideSlide> */}
                        <div className='flex lg:space-x-12 bg-orange-500 pt-10 justify-center'>
                            <div className="w-main w-100% h-[50vh]  bg-orange-500">
                                <div className="w-profile relative  w-[220px] h-[220px] bg-white rounded-lg p-5">
                                    <div className=' w-100% '>
                                        <img src={img28} className='mx-auto bg-orange-500 w-img w-100% h-[30vh] rounded-full' />
                                    </div>
                                    <div className="w-caption opacity-0 text-center font-mono font-semibold">
                                        <h1>Mudassar</h1>
                                        <h3 className='text-orange-500'>Electrician,
                                            Penal Secvice,
                                            Plumber ,
                                            Ac Service,
                                            Home Service</h3>
                                        <div className='flex justify-center'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </SplideSlide> */}
                    {/* <SplideSlide> */}
                        <div className='flex lg:space-x-12 bg-orange-500 pt-10 justify-center'>
                            <div className="w-main w-100% h-[50vh]  bg-orange-500">
                                <div className="w-profile relative  w-[220px] h-[220px] bg-white rounded-lg p-5">
                                    <div className=' w-100% '>
                                        <img src={img28} className='mx-auto bg-orange-500 w-img w-100% h-[30vh] rounded-full' />
                                    </div>
                                    <div className="w-caption opacity-0 text-center font-mono font-semibold">
                                        <h1>Muhammad Faizan</h1>
                                        <h3 className='text-orange-500'>Electrician,
                                            Penal Secvice,
                                            Plumber ,
                                            Ac Service,
                                            Home Service</h3>

                                    </div>
                                </div>
                            </div>
                        </div>


                </div>
                    {/* </SplideSlide> */}
                <div className=' p-5'>
                    <button onClick={handleOrderButton} className='mx-auto p-3 m-7 rounded-md font-mediumbold bg-orange-500 flex items-center text-white  hover:bg-white hover:text-orange-500 border border-orange-500 active:text-white hover:border-orange-500'> <MdElectricBolt />Book Now</button>
                    {book && (

                        <Form layout="vertical" onFinish={onFinish}>
                            <div className='bg-orange-500 flex-col p-5 items-center space-x-5  space-y-5'>
                                <div className='lg:flex lg:space-x-5' >
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
                                    <Col span={5}>
                                        <Form.Item label="Workers" name="workers" rules={rules} className='m-2'>
                                            <Select dropdownStyle={{ backgroundColor: 'orange' }} name="service">
                                                <Select.Option value="">Select</Select.Option>
                                                <Select.Option value="Muhammad Faizan">Muhammad Faizan</Select.Option>
                                                <Select.Option value="Haris Ashfaq">Haris Ashfaq</Select.Option>
                                                <Select.Option value="Mudassar">Mudassar</Select.Option>
                                                <Select.Option value="Ahmed">Ahmed</Select.Option>
                                                <Select.Option value="Uheed Asif">Uheed Asif</Select.Option>
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
        </div >
    );
}

export default OurWorkers;
