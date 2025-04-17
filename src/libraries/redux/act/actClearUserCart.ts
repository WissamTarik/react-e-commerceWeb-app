import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";

export const actClearUserCart=createAsyncThunk('cart/delete',async(_,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    const token=localStorage.getItem('token')

    try {
        const {data}=await axios.delete('/api/v1/cart',{
            headers:{
             token,
            }
        })
        return data
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
    
})