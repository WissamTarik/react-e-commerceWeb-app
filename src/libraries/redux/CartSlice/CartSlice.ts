import { createSlice } from "@reduxjs/toolkit";
import { ICartInterface } from "../../../Interfaces/ICartInterface";
import { actAddToCart } from "../act/actAddToCart";
import { actClearUserCart } from "../act/actClearUserCart";
import { actDeleteSpecificCartItem } from "../act/actRemoveSpecificCartItem";
import { actUpdateCartItemQuantity } from './../act/actUpdateCartItemQuantity';

const initialState:ICartInterface={
    numOfCartItems:0,
    isError:false,
    isLoading:"idle",
     message:null,
    deleteLoading:"idle",
    deleteMessage:null,
    deleteSpecificItemLoading:"idle",
    updateMessage:null,
    updateSpecificItemLoading:"idle"
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(actAddToCart.pending,(state)=>{
            state.isLoading="pending"
            state.isError=false
            console.log('Add to cart is pending');
            
        })
        builder.addCase(actAddToCart.fulfilled,(state,action)=>{
            
     state.isLoading='succeeded'
     state.numOfCartItems=action.payload.numOfCartItems
     localStorage.setItem('numOfCartItems',action.payload.numOfCartItems)
     state.message=action.payload.message
     console.log('add to cart is succeeded');
     
        })
        builder.addCase(actAddToCart.rejected,(state)=>{
     state.isLoading='failed'
      state.isError=true
       console.log('add to cart is rejected');
       
        })
        builder.addCase(actDeleteSpecificCartItem.pending,(state)=>{
            state.deleteSpecificItemLoading="pending"
            state.isError=false
            console.log('Delete  cart item is pending');
            
        })
        builder.addCase(actDeleteSpecificCartItem.fulfilled,(state,action)=>{
            
     state.deleteSpecificItemLoading='succeeded'
     state.numOfCartItems=action.payload.numOfCartItems
     localStorage.setItem('numOfCartItems',action.payload.numOfCartItems)
     
     state.message=action.payload.message
     console.log('delete specific item is succeeded');
     
        })
        builder.addCase(actDeleteSpecificCartItem.rejected,(state)=>{
     state.deleteSpecificItemLoading='failed'
      state.isError=true
       console.log('delete specific cart item is rejected');
       
        })
        builder.addCase(actClearUserCart.pending,(state)=>{
            state.deleteLoading='pending'
            state.isError=false

        })
        builder.addCase(actClearUserCart.fulfilled,(state)=>{
            state.deleteLoading='succeeded'
            state.numOfCartItems=0
            state.deleteMessage='success'
            localStorage.setItem('numOfCartItems', '0')

            

        })
        builder.addCase(actClearUserCart.rejected,(state)=>{
            state.deleteLoading='failed'

        })
        builder.addCase(actUpdateCartItemQuantity.pending,(state)=>{
            state.updateSpecificItemLoading='pending'
            state.isError=false

        })
        builder.addCase(actUpdateCartItemQuantity.fulfilled,(state,action)=>{
            state.updateSpecificItemLoading='succeeded'
            state.numOfCartItems=action.payload.numOfCartItems
            state.updateMessage='success'
            localStorage.setItem('numOfCartItems', action.payload.numOfCartItems.toString() )

            

        })
        builder.addCase(actUpdateCartItemQuantity.rejected,(state)=>{
            state.updateSpecificItemLoading='failed'

        })

        }
})

export const addToCartReducer=cartSlice.reducer