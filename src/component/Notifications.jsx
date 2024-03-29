
import { Modal, message } from 'antd'
import React from 'react'
import Divider from "./Divider"
import { useNavigate } from "react-router-dom";
import moment from "moment"
import { DeleteNotification} from "../apicall/notifications"
import { useDispatch } from "react-redux";
import { SetLoader } from "../redux/loadersSlice";
function Notifications({
  notifications = [],
  reloadNotifications,
  showNotifications,
  setShowNotifications,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteNotification = async (id) => {
    try{
       dispatch(SetLoader(true));
       const response = await DeleteNotification(id);
       reloadNotifications();
       dispatch(SetLoader(false));
       if (response.success){
          message.success(response.message);
       }
       else {
         throw new Error(response.message);
       }
    }
    catch(error) {
        dispatch(SetLoader(false));
        message.error(error.message);
    }
  };

  return (
    <Modal
      title="Notifications"
      open={showNotifications}
      onCancel={() => setShowNotifications(false)}
      footer={null}
      centered
      width={1000}
    >
      <div className="flex flex-col gap-2">
        {notifications.map((notification) => (
          <div className="flex flex-col border-rounded border-red-900 border-solid p-2 cursor-pointer"
            key={notification._id}
          >
            <div className="flex justify-between items-center">
              <div onClick={() => {
                navigate(notification.onClick);
                setShowNotifications(false)
              }}
              >
                <h1 className="text-red-800">
                  {notification.title}
                </h1>
                <Divider />
                <span className="text-orange-500">
                  {notification.message}
                </span>
                <h1 className="text-gray-600 text-sm">
                  {moment(notification.createdAt).fromNow()}
                </h1>
              </div>
              <i className="ri-delete-bin-line" 
              onClick={() => { 
                deleteNotification(notification._id)
              }}></i>
            </div>

          </div>
        ))}
      </div>
    </Modal>
  )
}

export default Notifications
