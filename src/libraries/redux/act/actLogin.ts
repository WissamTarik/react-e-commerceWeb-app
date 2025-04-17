import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData } from "../../../Interfaces/IAuthInterface";
import axios from "axios";

export const actLogin=createAsyncThunk("auth/login",async (value:ILoginData)=>{
    
    try {
        const {data}=await axios.post('api/v1/auth/signin',value)
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