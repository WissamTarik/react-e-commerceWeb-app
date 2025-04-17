import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios/axios";
import AxiosError from "../../axios/AxiosError";
import { IProducts } from "../../../Interfaces/IProducts";

export const actGetProducts=createAsyncThunk('products',async(_,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    try {
        const {data}=await axios.get<{data:IProducts[]}>('/api/v1/products')
        return data.data
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
})