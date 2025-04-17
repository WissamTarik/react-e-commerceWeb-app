import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUpdatePasswordData } from "../../../Interfaces/IAuthInterface";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";

export const actUpdatePassword=createAsyncThunk("auth/updatePassword",async (value:IUpdatePasswordData,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    try {
        const {data}=await axios.put('api/v1/auth/resetPassword',value)
        return data
         
    } catch (error) {
       
         return rejectWithValue(AxiosError(error))
    }

})
