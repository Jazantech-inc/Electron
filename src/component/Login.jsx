import { Form, Input, Button, message } from "antd"
import { Link, useNavigate } from "react-router-dom"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { SetLoader } from "../redux/loadersSlice";

import Divider from "./Divider"
import { LoginUser } from "../apicall/users";
import Logo from './Home/Logo';
const rules1 = [
    {
        required: true,
        message: "Email is required"
    }
]
const rules2 = [
    {
        required: true,
        message: "Password is required"
    }
]
function Login (){
    const redirectUser = useNavigate();
    const loaderDispatch = useDispatch();
    const onFinish = async (values) => {
        try{
          loaderDispatch(SetLoader(true));
          const response = await LoginUser(values)
          loaderDispatch(SetLoader(false));
          if(response.success){
             message.success(response.message)
             localStorage.setItem("token",response.data)
             window.location.href = "/dashboard";
          }
          else {
            throw new Error(response.message)   
          }
        } catch (error) {
           loaderDispatch(SetLoader(false));
           message.error(error.message)
        } 
    };
    useEffect(() => {
      if(localStorage.getItem("token")){
        redirectUser("/dashboard");
        //window.location.href = "/dashboard";
      }
    });
    return (
        <div className="h-screen bg-primary flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[475px]">
                <h1 className="text-primary py-4 text-center">
                    <Logo />  <span className="text-orange-500">Login</span> |
                    Form
                </h1>
                <Divider />
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={rules1}>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={rules2}>
                        <Input placeholder="Password" type="password" />
                    </Form.Item>
                    <Button htmlType="submit" block className="mt-3 text-white bg-orange-500 hover:bg-white"> Login </Button>
                    <div className="mt-5 text-center ">
                        <span className="text-orange-700">
                            Don’t have an account? <Link className="text-gray-500" to="/signup">
                                Signup
                            </Link>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    )

}

export default Login;