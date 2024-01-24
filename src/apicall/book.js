import { axiosInstance } from "./axiosInstance";


export const saveBookData = async (payload) => {
    try {
      const response = await axiosInstance.post('/api/book/servicebook', payload);
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  export const Fetchbook = async () => {
    try{
           const response = await axiosInstance.get('/api/book/getbook');
           console.log(response)
           return response.data;   
    } catch(error){
           return error.message
    }
};

export const ChangeBookStatus = async (books, status) => { 
  try{
         const response = await axiosInstance.put(`/api/books/changeBookStatus/${books}`, 
         { status } 
         );
         return response.data;   
  } catch(error){
         return error.message
  }
};


