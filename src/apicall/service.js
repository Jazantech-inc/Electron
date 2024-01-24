import { axiosInstance } from "./axiosInstance";


export const saveFormData = async (payload) => {
    try {
      const response = await axiosInstance.post('/api/service/serviceform', payload);
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  export const Fetchservice = async () => {
    try{
           const response = await axiosInstance.get('/api/service/getservice');
           console.log(response)
           return response.data;   
    } catch(error){
           return error.message
    }
};

export const ChangeServiceStatus = async (servcies, status) => { 
  try{
         const response = await axiosInstance.put(`/api/servcies/changeServiceStatus/${servcies}`, 
         { status } 
         );
         return response.data;   
  } catch(error){
         return error.message
  }
};


