import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";

export const actAddToWishlist=createAsyncThunk('wishlist/add',async(productId:string,thunkApi)=>{
     const {rejectWithValue}=thunkApi
      const token=localStorage.getItem('token')
     try {
         const {data}=await axios.post('/api/v1/wishlist',{productId},{
            headers:{
                token,
            }
         })
         return data
     } catch (error) {
       return rejectWithValue(AxiosError(error))
     }
})