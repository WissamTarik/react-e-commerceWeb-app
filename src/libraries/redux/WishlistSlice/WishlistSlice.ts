import { createSlice } from "@reduxjs/toolkit";
import { IInitialStateWishlist } from "../../../Interfaces/IWishlistInterface";
import { actAddToWishlist } from "../act/actAddToWishlist";
import { actGetUserWishlist } from "../act/actGetUserWishlist";
import { actDeleteSpecificWishlistItem } from "../act/actRemoveSpecificWishlistItem";
 
const initialState:IInitialStateWishlist={
    isError:false,
    addItemMessage:null,
    deleteItemMessage:null,
    addItemToWishlistLoading:"idle",
    getWishlistLoading:"idle",
    deleteWishlistLoading:"idle",
    itemsInWishlist: localStorage.getItem('wishlistItemsId')
    ? JSON.parse(localStorage.getItem('wishlistItemsId')!)
    : [],
    count:0,
    records:[]
}
const wishlistSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(actAddToWishlist.pending,(state)=>{
            state.addItemToWishlistLoading='pending'
            state.isError=false
            
        })
        builder.addCase(actAddToWishlist.fulfilled,(state,action)=>{
            state.addItemToWishlistLoading='succeeded'
            const item=action.meta.arg
            if(!state.itemsInWishlist.includes(item)){
                state.itemsInWishlist.push(item)
                localStorage.setItem('wishlistItemsId',JSON.stringify(state.itemsInWishlist))
            }
            state.addItemMessage="Succeeded"
            
        })
        builder.addCase(actAddToWishlist.rejected,(state)=>{
            state.isError=true
            state.addItemMessage='Failed'
            state.addItemToWishlistLoading='failed'
            
        })
        builder.addCase(actGetUserWishlist.pending,(state)=>{
            state.getWishlistLoading='pending'
            state.isError=false
            
        })
        builder.addCase(actGetUserWishlist.fulfilled,(state,action)=>{
            state.getWishlistLoading='succeeded'
            state.count=action.payload.count
            state.records=action.payload.data
            localStorage.setItem("count",action.payload.count.toString())
          
            
        })
        builder.addCase(actGetUserWishlist.rejected,(state)=>{
            state.isError=true
            state.getWishlistLoading='failed'
            
        })
        builder.addCase(actDeleteSpecificWishlistItem.pending,(state)=>{
            state.deleteWishlistLoading='pending'
            state.isError=false
            
        })
        builder.addCase(actDeleteSpecificWishlistItem.fulfilled,(state,action)=>{
            state.deleteWishlistLoading='succeeded'
             state.deleteItemMessage="succeeded"         
             const indexToRemove = state.itemsInWishlist.indexOf(action.meta.arg);
       if (indexToRemove !== -1) {
  state.itemsInWishlist.splice(indexToRemove, 1);
  localStorage.setItem('wishlistItemsId', JSON.stringify(state.itemsInWishlist));
}                      
        })
        builder.addCase(actDeleteSpecificWishlistItem.rejected,(state)=>{
            state.isError=true
            state.deleteWishlistLoading='failed'
            state.deleteItemMessage="Failed"
        })
    },
})

export const wishlistReducer=wishlistSlice.reducer