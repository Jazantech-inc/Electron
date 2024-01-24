import React, { useState, useEffect } from 'react';
import { message, Table } from "antd";
import { Fetchbook, ChangeBookStatus } from "../../apicall/book";


const Orders = () => {
  const [books, setBooks] = useState([]);

 

  const fetchData = async () => {
    try {
      const response = await Fetchbook();
      if (response.success) {
        setBooks(response.data);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const onStatusChange = async (books, status) => {
    try{ 
      
        const response = await ChangeBookStatus();
   
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
          title: "Email",
      dataIndex: "email"
    },
    {
        title: "Service",
        dataIndex: "service",
        
    },
    {
      title: "WorkerName",
      dataIndex: "workers"
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
               onClick={() => onStatusChange(books, "approved")}>Approve</span>
             }
             {
               status === "pending" && <span className='underline cursor-pointer'
               onClick={() => onStatusChange(books, "rejected")}>Reject</span>
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
      <Table columns={columns} dataSource={books} />
    </div>
  );
};

export default Orders;
