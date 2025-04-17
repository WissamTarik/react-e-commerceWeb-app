import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRegisterData } from "../../../Interfaces/IAuthInterface";
import axios from "axios";

export const actRegister=createAsyncThunk("auth/register",async (value:IRegisterData)=>{
    
    try {
        const {data}=await axios.post('api/v1/auth/signup',value)
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