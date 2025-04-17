import { createSlice } from "@reduxjs/toolkit";
import { IInitialPaymentInterface } from "../../../Interfaces/IPaymentInterface";
import { actCashPaymentInfo, actOnlinePaymentInfo } from "../act/actPayment";

const initialState:IInitialPaymentInterface={
    isLoading:"idle",
    isError:false,
    sessionURL:null

}
const paymentSlice=createSlice({
    name:"pay",
    initialState,
    reducers:{},
    extraReducers(builder) {
         builder.addCase(actCashPaymentInfo.pending,(state)=>{
            state.isError=false
            state.isLoading='pending'
            console.log('Cash Payment is Loading');
            
         })
         builder.addCase(actCashPaymentInfo.fulfilled,(state)=>{
            state.isError=false
            state.isLoading='succeeded'
            console.log('Cash Payment is Succeeded');
            
         })
         builder.addCase(actCashPaymentInfo.rejected,(state)=>{
            state.isError=false
            state.isLoading='failed'
            console.log('Cash Payment is Failed');
            
         })
         builder.addCase(actOnlinePaymentInfo.pending,(state)=>{
            state.isError=false
            state.isLoading='pending'
            console.log('Online Payment is Loading');
            
         })
         builder.addCase(actOnlinePaymentInfo.fulfilled,(state,action)=>{
            state.isError=false
            state.isLoading='succeeded'
            state.sessionURL=action.payload.session.url
            
            console.log('Online Payment is Succeeded');
             
         })
         builder.addCase(actOnlinePaymentInfo.rejected,(state)=>{
            state.isError=false
            state.isLoading='failed'
            console.log('Online Payment is Failed');
            
         })
    },

})
export const paymentReducer=paymentSlice.reducer