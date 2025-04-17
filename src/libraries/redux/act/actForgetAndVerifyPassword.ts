import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";

export const actForgetPassword=createAsyncThunk("auth/forgetPassword",async (value:{email:string})=>{
    
    try {
        const {data}=await axios.post('api/v1/auth/forgotPasswords',value)
        return data
         
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
              message: error.response?.data?.message || error.message,
            };
          } else {
            return { message: "Unexpected error" };
          }    }
})
export const actVerifyPassword=createAsyncThunk("auth/verifyPassword",async (resetCode:string,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    
    try {
        const {data}=await axios.post('api/v1/auth/verifyResetCode',{resetCode})
        console.log(data);
        
        return data
         
    } catch (error) {
     console.log(error);
              
       return rejectWithValue(AxiosError(error))    
}})