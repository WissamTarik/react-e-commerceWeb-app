import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";
import { IGetCartData } from "../../../Interfaces/ICartInterface";
import { AuthHeader } from "../../../hooks/AuthHeader";

export const actUpdateCartItemQuantity=createAsyncThunk('cart/updateItemQuantity',async({count,productId}:{count:number,productId:string},thunkApi)=>{
    const {rejectWithValue}=thunkApi

    try {
        const {data}=await axios.put<IGetCartData>(`/api/v1/cart/${productId}`,{count},AuthHeader())
        return data
    } catch (error) {
        console.log(error);
        
        return rejectWithValue(AxiosError(error))
    }
    
})