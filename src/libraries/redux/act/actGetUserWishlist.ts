import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AxiosError from "../../axios/AxiosError";
import { IWishlistData } from "../../../Interfaces/IWishlistInterface";
import { AuthHeader } from "../../../hooks/AuthHeader";

export const actGetUserWishlist=createAsyncThunk('wishlist/getWishlist',async(_,thunkApi)=>{
    const {rejectWithValue}=thunkApi

    try {
        const {data}=await axios.get<IWishlistData>('/api/v1/wishlist',AuthHeader())
        return data
    } catch (error) {
        return rejectWithValue(AxiosError(error))
    }
    
})