import { createAsyncThunk } from "@reduxjs/toolkit";
import { TPaymentSchemaTypes } from "../../../Validation/PaymentValidation";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";
import { AuthHeader } from "../../../hooks/AuthHeader";


export const actCashPaymentInfo=createAsyncThunk('pay/cash',async(value:TPaymentSchemaTypes,thunkApi)=>{
    const token=localStorage.getItem('token')
    const cartId=localStorage.getItem('cartID')
    
    const {rejectWithValue}=thunkApi
    try {
        const {data}=await axios.post(`/api/v1/orders/${cartId}`,value,{
        headers:{
            token
        }
        })
        return data
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
})
export const actOnlinePaymentInfo=createAsyncThunk('pay/onlinePayment',async(value:TPaymentSchemaTypes,thunkApi)=>{
    const cartId=localStorage.getItem('cartID')
    const baseURL = window.location.origin;

    const {rejectWithValue}=thunkApi
    try {
        const {data}=await axios.post(`/api/v1/orders/checkout-session/${cartId}?url=${baseURL}`,value,AuthHeader())
        
        return data
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
})