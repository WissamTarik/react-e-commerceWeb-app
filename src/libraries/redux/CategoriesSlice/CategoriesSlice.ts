import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../../Interfaces/ICategory";
import { loadingType } from "../../../genericTypes/genericTypes";
import { actGetAllCategories } from "../act/actGetAllCategories";
interface initialInterface<T>{
      isError:boolean,
      isLoading:loadingType,
      records:T[]
}
const initialState:initialInterface<ICategory>={
        isLoading:"idle",
        isError:false,
        records:[]
}
const categoriesSlice=createSlice({
    name:"categories",
    initialState,
    reducers:{},
     extraReducers(builder) {
            builder.addCase(actGetAllCategories.pending,(state)=>{
                state.isLoading='pending'
                console.log('Categories pending');
    
                state.isError=false
            })
            builder.addCase(actGetAllCategories.fulfilled,(state,action)=>{
                state.isLoading='succeeded'
                console.log('Categories Succeeded');
                console.log(action.payload);
                
                state.records=action.payload
            })
            builder.addCase(actGetAllCategories.rejected,(state)=>{
                state.isLoading="failed"
                console.log('products rejected');
              
            })
        },

})

export const categoriesReducer=categoriesSlice.reducer