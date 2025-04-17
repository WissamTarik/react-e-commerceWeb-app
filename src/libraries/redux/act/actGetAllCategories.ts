import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";
import { ICategory } from "../../../Interfaces/ICategory";


export const actGetAllCategories=createAsyncThunk('categories',async (_,thunkApi)=>{
    const {rejectWithValue}=thunkApi

    try {
         const {data}=await axios.get<{data:ICategory[]}>('/api/v1/categories')
         return data.data
    } catch (error) {
     return  rejectWithValue( AxiosError(error))
    }
})