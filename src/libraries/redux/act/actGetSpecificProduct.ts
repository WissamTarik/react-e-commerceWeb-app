import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios/axios";
import AxiosError from "../../axios/AxiosError";

export const actGetSpecificProducts=createAsyncThunk('specificProduct',async(id:string,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    try {
        const {data}=await axios.get(`/api/v1/products/${id}`)
        return data.data
    } catch (error) {
        return rejectWithValue(AxiosError(error))

    }
})