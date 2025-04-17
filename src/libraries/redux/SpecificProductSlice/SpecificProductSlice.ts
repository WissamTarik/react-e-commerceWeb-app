import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../../Interfaces/IProducts";
import { actGetSpecificProducts } from "../act/actGetSpecificProduct";
import { initialInterface } from "../../../Interfaces/IGeneric";


const initialState:initialInterface<IProducts>={
   isError:false,
   isLoading:'idle',
   record: {solid: 10,
   images: ["image1.jpg", "image2.jpg"],
   subcategory: [
       {
           _id: "subcat123",
           name: "Subcategory Name",
           slug: "subcategory-name",
           category: "cat123"
       }
   ],
   ratingQuantity: 5,
   _id: "prod123",
   slug: "product-name",
   title: "Product Title",
   description: "Product Description",
   quantity: 20,
   price: 100,
   imageCover: "cover.jpg",
   category: {
       _id: "cat123",
       name: "Category Name",
       slug: "category-name",
       image: "category.jpg"
   },
   brand: {
       _id: "brand123",
       name: "Brand Name",
       slug: "brand-name",
       image: "brand.jpg"
   },
   ratingsAverage: 4.5,
   createdAt: "2025-03-27T12:00:00Z",
   updatedAt: "2025-03-27T12:00:00Z",
   _v: 1,
   reviews: ["review1", "review2"],
   id: "prod123",
   priceAfterDiscount: 80
}
}
export const specificProductSlice=createSlice({
    name:'specificProduct',
    initialState,
    reducers:{},
      extraReducers(builder) {
            builder.addCase(actGetSpecificProducts.pending,(state)=>{
                state.isLoading='pending'
    
                state.isError=false
            })
            builder.addCase(actGetSpecificProducts.fulfilled,(state,action)=>{
                state.isLoading='succeeded'
              
                
                state.record=action.payload
                
            })
            builder.addCase(actGetSpecificProducts.rejected,(state)=>{
                state.isLoading="failed"
                console.log('specific product rejected');
               
                
                state.isError=true
            })
        },

})
export const specificProductReducer=specificProductSlice.reducer