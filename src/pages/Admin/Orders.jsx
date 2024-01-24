import React, { useState, useEffect } from 'react';
import { message, Table } from "antd";
import { Fetchorder, ChangeOrderStatus } from "../../apicall/order";


const Orders = () => {
  const [orders, setOrders] = useState([]);

 

  const fetchData = async () => {
    try {
      const response = await Fetchorder();
      if (response.success) {
        setOrders(response.data);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const onStatusChange = async (orders, status) => {
    try{ 
      
        const response = await ChangeOrderStatus();
   
        if (response.success) {
            message.success(response.message);
            fetchData();
        } else {
            throw new Error(response.message);
        }
    } catch (error){
      
        message.error(error.message)
     }    
};

  const columns = [
    
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Service",
      dataIndex: "service",
     
    },
    {
      title: "Date",
      dataIndex: "date"
    },
    
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
         const { status, _id} = record;
         return(
            <div className="flex gap-5">
             {
               status === "pending" && <span className='underline cursor-pointer'
               onClick={() => onStatusChange(orders, "approved")}>Approve</span>
             }
             {
               status === "pending" && <span className='underline cursor-pointer'
               onClick={() => onStatusChange(orders, "rejected")}>Reject</span>
             }
             
              </div>
         )
      }
   }
   
  ];
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={orders} />
    </div>
  );
};

export default Orders;
