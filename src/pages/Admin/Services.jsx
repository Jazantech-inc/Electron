import React, { useState, useEffect } from 'react';
import { message, Table } from "antd";
import { Fetchservice, ChangeServiceStatus } from "../../apicall/service";


const Services = () => {
  const [services, setServices] = useState([]);

 

  const fetchData = async () => {
    try {
      const response = await Fetchservice();
      if (response.success) {
        setServices(response.data);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const onStatusChange = async (services, status) => {
    try{ 
      
        const response = await ChangeServiceStatus();
   
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
               onClick={() => onStatusChange(services, "approved")}>Approve</span>
             }
             {
               status === "pending" && <span className='underline cursor-pointer'
               onClick={() => onStatusChange(services, "rejected")}>Reject</span>
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
      <Table columns={columns} dataSource={services} />
    </div>
  );
};

export default Services;
