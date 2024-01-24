import { Form, Input, Button, message } from "antd"
import { Link,useNavigate } from "react-router-dom"
import Divider from "./Divider"
import { SignupUser } from "../apicall/users"
import { MdElectricBolt } from "react-icons/md";
import Logo from './Home/Logo';
import { useEffect } from "react"
const rules = [
    {
        required: true,
        message: "field required"
    }
]
function Signup() {
    const redirectUser = useNavigate();
    const onFinish = async (values) => {
        try {
            const response = await SignupUser(values);
            if (response.message) {
                message.success(response.message);
            }
            else {
                throw new Error(response.message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };
    useEffect(() => {
        if(localStorage.getItem("token")){
            redirectUser("/");
            // window.location.href = "/";
        }
      });

    return (
        <div className="h-screen bg-primary flex justify-center items-center">
            <div className="bg-white p-4 rounded w-[475px]">
                <h1 className="text-primary py-4 text-center">
                    <Logo />  <span className="text-orange-500">Signup</span> |
                    Form
                </h1>
                <Divider />
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name" rules={rules}>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={rules}>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={rules}>
                        <Input placeholder="Password" type="password" />
                    </Form.Item>
                    {/*                         
  <button to='/login' className=' rounded-md font-mediumbold bg-orange-500  items-center text-white  hover:bg-white hover:text-orange-500 border border-orange-500 active:text-white hover:border-orange-500' > <MdElectricBolt/>Login</button> */}
                    <Button htmlType="submit" block className="mt-3 text-white bg-orange-500 hover:bg-white"> Signup </Button>
                    <div className="mt-5 text-center">
                        <span className="text-orange-700">
                            Already have an Accunt? <Link className="text-gray-500" to="/login">
                                Login
                            </Link>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    )

}

export default Signup;