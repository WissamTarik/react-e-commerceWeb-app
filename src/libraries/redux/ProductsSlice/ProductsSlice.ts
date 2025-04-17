import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../../Interfaces/IProducts";
import { loadingType } from "../../../genericTypes/genericTypes";
import { actGetProducts } from "../act/actGetProducts";


interface initialInterface<T>{
      isError:boolean,
      isLoading:loadingType,
      records:T[]
}
const initialState:initialInterface<IProducts>={
    isError:false,
     isLoading:'idle',
     records:[]

}
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(actGetProducts.pending,(state)=>{
            state.isLoading='pending'
            console.log('products pending');

            state.isError=false
        })
        builder.addCase(actGetProducts.fulfilled,(state,action)=>{
            state.isLoading='succeeded'
            console.log('products Succeeded');
            
            state.records=action.payload
        })
        builder.addCase(actGetProducts.rejected,(state)=>{
            state.isLoading="failed"
            console.log('products rejected');
           
            
            state.isError=true
        })
    },
})
export const productsReducers=productSlice.reducer