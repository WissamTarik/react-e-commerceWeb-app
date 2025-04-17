import { createSlice } from "@reduxjs/toolkit";
import { IBrandsInitialState } from "../../../Interfaces/IBrandInterface";
import { actGetBrands } from "../act/actGetBrands";


const initialState:IBrandsInitialState={
    isLoading:"idle",
    isError:false,
    records:[]

}
const brandsSlice=createSlice({
    name:"brands",
    initialState,
    reducers:{},
    extraReducers(builder) {
         builder.addCase(actGetBrands.pending,(state)=>{
             console.log("BRANDS IS PENDING");
            state.isLoading='pending';
            state.isError=false
            
         })
         builder.addCase(actGetBrands.fulfilled,(state,action)=>{
             console.log("BRANDS IS FULFILLED");
            state.isLoading='succeeded';
               state.records=action.payload.data
               
                        
         })
         builder.addCase(actGetBrands.rejected,(state)=>{
             console.log("BRANDS IS REJECTED");
            state.isLoading='failed';
         })
    },
})
export const brandsReducer=brandsSlice.reducer