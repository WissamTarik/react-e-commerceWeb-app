
import { createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import axios from './../../axios/axios';
import { IAllOrdersDataInterface } from './../../../Interfaces/IAllOrdersInterface';
import AxiosError from './../../axios/AxiosError';

type TJwtType={
    id:string,
    name:string,
    role:string,
    iat:number,
    exp:number
}
export const actGetAllOrders=createAsyncThunk('allOrders',async (_,thunkApi)=>{
    const {rejectWithValue}=thunkApi
    const token=localStorage.getItem('token')   as string
    
    
    try {
        const {id}=  jwtDecode<TJwtType>(token)
         const {data}=await axios.get<IAllOrdersDataInterface[]>(`/api/v1/orders/user/${id}`)
         
         return data[data.length-1]
         
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
})