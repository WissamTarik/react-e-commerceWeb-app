import { createSlice } from "@reduxjs/toolkit";
import { initialGetCartData } from "../../../Interfaces/ICartInterface";
import { actGetUserCart } from "../act/actGetUserCart";

const initialState:initialGetCartData={
     isError:false,
     isLoading:"idle",
     records:[],
     totalPrice:0
}
const getCartSlice=createSlice({
    name:"getCart",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(actGetUserCart.pending,(state)=>{
            state.isError=false
            state.isLoading='pending'
            console.log('Get user cart is pending');
            
        })
        builder.addCase(actGetUserCart.fulfilled,(state,action)=>{
              state.isLoading='succeeded'
              state.records=action.payload.data.products
               console.log('Get user cart is succeeded');
               state.totalPrice=action.payload.data.totalCartPrice
               
               localStorage.setItem("cartID",action.payload.cartId)
               
        })
        builder.addCase(actGetUserCart.rejected,(state)=>{
              state.isLoading='failed'
               console.log('Get user cart is Rejected');
               
        })
      
    },
})
export const getCartReducer=getCartSlice.reducer