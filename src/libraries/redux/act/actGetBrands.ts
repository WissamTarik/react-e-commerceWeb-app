import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosError from "../../axios/AxiosError";
import axios from "axios";


export const actGetBrands=createAsyncThunk('brands',async (_,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    try {
         const {data}=await axios.get('/api/v1/brands')
         return data
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
})