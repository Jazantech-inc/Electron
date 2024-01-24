import React, { useState, useEffect } from 'react'
import { message } from "antd"
import { FetchCurrentUser } from '../apicall/users';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "../redux/loadersSlice";
import { SetUser } from '../redux/usersSlice';
import { FaUserAlt } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Avatar, Badge } from 'antd';
import Notifications from './Notifications';
import { FetchAllNotifications, SeenAllNotifications } from '../apicall/notifications';

const ProtectedRoute = ({ children }) => {
    // const [user, setUser] = useState(null);
    const [notifications = [], setNotifications] = useState([])
    const [showNotifications, setShowNotifications] = useState(false)
    const { user } = useSelector((state) => state.users);
    const redirectUser = useNavigate();
    const dispatch = useDispatch();
    const validateToken = async () => {
        try {
            dispatch(SetLoader(true));
            const response = await FetchCurrentUser();
            dispatch(SetLoader(false));
            if (response.success) {
                dispatch(SetUser(response.data));
            }
            else {
                redirectUser("/login");
                message.error(response.message)
            }
        } catch (error) {
            dispatch(SetLoader(false));
            redirectUser("/login");
            message.error(error.message)
        }
    }
    const fetchNotifications = async () => {
        try {
            // dispatch(SetLoader(true));
            const response = await FetchAllNotifications();
            // dispatch(SetLoader(false));
            if (response.success) {
                setNotifications(response.data);
            }
            else {
                throw new Error(response.message)
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    const seenAndReadNotifications = async () => {
        try {
            const response = await SeenAllNotifications();
            if (response.success) {
                fetchNotifications();
            }
            else {
                throw new Error(response.message)
            }
        } catch (error) {
            message.error(error.message);
        }
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            validateToken();
            fetchNotifications();
        } else {
            // message.error("Please login with your credentails!!");
            redirectUser("/login");
        }
    }, [])
    return (

        <div>

            {
                user && (
                    <div>
                        {/* Header */}
                        <div className="flex justify-between items-center bg-gray-800 p-5">
                            <h1 className="text-white text-3xl" onClick={() => {
                                redirectUser("/dashboard");
                            }}>
                                <span className='font-serif text-orange-500'>D</span>ash<span className='font-serif text-orange-500'>B</span>oard
                            </h1>
                            <div className="bg-white py-3 px-6 rounded flex gap-1 items-center">
                                <FaUserAlt />
                                <span className="underline cursor-pointer uppercase"
                                    onClick={() => {
                                        if (user.role === "user") {
                                            redirectUser("/shop");
                                        } else {
                                            redirectUser("/admin");
                                        }
                                    }} >
                                    {user.name}</span>
                                <Badge
                                    count={
                                        notifications?.filter((notification) => !notification.seen).length
                                    }
                                    onClick={() => {
                                        seenAndReadNotifications();
                                        setShowNotifications(true)
                                    }
                                    }
                                    className='cursor-pointer'
                                >
                                    <MdNotificationsActive />
                                    
                                </Badge>
                                <RiLogoutCircleRLine onClick={() => {
                                    localStorage.removeItem("token")
                                    redirectUser("/login");
                                }} />

                            </div>

                        </div>
                        {/* Body */}
                        <div className="p-4"> {children} </div>
                        {
                            <Notifications
                                notifications={notifications}
                                reloadNotifications={fetchNotifications}
                                showNotifications={showNotifications}
                                setShowNotifications={setShowNotifications}
                            />
                        }
                    </div>
                )
            }
        </div>
    )
}
export default ProtectedRoute;
