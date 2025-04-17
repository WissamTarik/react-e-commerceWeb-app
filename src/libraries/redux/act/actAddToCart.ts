import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";
import { AuthHeader } from "../../../hooks/AuthHeader";

export const actAddToCart=createAsyncThunk('cart/add',async(productId:string,thunkApi)=>{
     const {rejectWithValue}=thunkApi
     try {
         const {data}=await axios.post('/api/v1/cart',{productId},AuthHeader())
         return data
     } catch (error) {
       return rejectWithValue(AxiosError(error))
     }
})