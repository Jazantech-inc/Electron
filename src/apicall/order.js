import { axiosInstance } from "./axiosInstance";


export const saveOrderData = async (payload) => {
    try {
      const response = await axiosInstance.post('/api/order/serviceorder', payload);
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  export const Fetchorder = async () => {
    try{
           const response = await axiosInstance.get('/api/order/getorder');
           console.log(response)
           return response.data;   
    } catch(error){
           return error.message
    }
};

export const ChangeOrderStatus = async (orders, status) => { 
  try{
         const response = await axiosInstance.put(`/api/orders/changeOderStatus/${orders}`, 
         { status } 
         );
         return response.data;   
  } catch(error){
         return error.message
  }
};


