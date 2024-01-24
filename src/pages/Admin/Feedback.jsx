import React, { useState, useEffect } from 'react';
import { message, Table } from "antd";
import { Fetchfeedback, ChangeFeedbackStatus,DeleteFedback } from "../../apicall/feedback";
import { MdDelete } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";


const Orders = () => {
  const [Feedbacks, setFeedbacks] = useState([]);

 

  const fetchData = async () => {
    try {
      const response = await Fetchfeedback();
      if (response.success) {
        setFeedbacks(response.data);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const onStatusChange = async (feedbacks, status) => {
    try{ 
      
        const response = await ChangeFeedbackStatus();
   
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
        title: "Feedback",
        dataIndex: "feedback",
        
    },
    
    
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        const DeleteFedback = async  (id) => {
     
          try{
              //  dispatch(SetLoader(true));
               const response = await DeleteFedback(id);
              //  dispatch(SetLoader(false));
               if(response.success){
                  message.success(response.message);
                  fetchData();
               }
           } catch (error){
              //  dispatch(SetLoader(false));
               message.error(error.message);
           }
        };
       
        const { status, _id} = record;
         return(
            <div className="flex gap-5">
             {
               status === "pending" && <span className='underline cursor-pointer'
               onClick={() => onStatusChange(Feedbacks, "approved")}>Approve</span>
             }
             {
               status === "pending" && <span className='underline cursor-pointer'
               onClick={() => onStatusChange(Feedbacks, "rejected")}>Reject</span>
             }
             <MdDelete className='cursor-pointer' onClick={()=>{
                      DeleteFedback(record._id)
                }}/>
           
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
      <Table columns={columns} dataSource={Feedbacks} />
    </div>
  );
};

export default Orders;
