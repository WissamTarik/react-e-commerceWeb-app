import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";
import { IGetCartData } from "../../../Interfaces/ICartInterface";
import { AuthHeader } from "../../../hooks/AuthHeader";

export const actGetUserCart=createAsyncThunk('getCart',async(_,thunkApi)=>{
    const {rejectWithValue}=thunkApi

    try {
        const {data}=await axios.get<IGetCartData>('/api/v1/cart',AuthHeader())
        return data
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
    
})