import { axiosInstance } from "./axiosInstance";


export const saveFeedbackData = async (payload) => {
    try {
      const response = await axiosInstance.post('/api/feedback/servicefeedback', payload);
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  export const Fetchfeedback = async () => {
    try{
           const response = await axiosInstance.get('/api/feedback/getfeedback');
           console.log(response)
           return response.data;   
    } catch(error){
           return error.message
    }
};

export const ChangeFeedbackStatus = async (feedbacks, status) => { 
  try{
         const response = await axiosInstance.put(`/api/feedbacks/changeFeedbackStatus/${feedbacks}`, 
         { status } 
         );
         return response.data;   
  } catch(error){
         return error.message
  }
};


export const DeleteFedback = async (id) => {
  try{
         const response = await axiosInstance.delete(`/api/feedbacks/deleteFeedback/${id}`);
         return response.data;   
  } catch(error){
         return error.message;
  }
};