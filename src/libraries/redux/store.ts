import { configureStore } from "@reduxjs/toolkit";
import { productsReducers } from "./ProductsSlice/ProductsSlice";
import { specificProductReducer } from "./SpecificProductSlice/SpecificProductSlice";
import { categoriesReducer } from "./CategoriesSlice/CategoriesSlice";
import { addToCartReducer } from "./CartSlice/CartSlice";
import { wishlistReducer } from "./WishlistSlice/WishlistSlice";
import { getCartReducer } from "./GetCartSlice/GetCartSlice";
import { authReducer } from "./AuthSlice/AuthSlice";
import { brandsReducer } from "./BrandsSlice/BrandsSlice";
import { paymentReducer } from "./PaymentSlice/PaymentSlice";
import { getAllOrdersReducer } from "./GetAllOrdersSlice/GetAllOrdersSlice";
 const store=configureStore({
    reducer:{
        productsReducers,
        specificProductReducer,
        brandsReducer,
        categoriesReducer,
        addToCartReducer,
        getCartReducer,
        wishlistReducer,
        authReducer,
        paymentReducer,
        getAllOrdersReducer,
    }

})

export type dispatchType=typeof store.dispatch
export type storeType= ReturnType<typeof store.getState>

export {store}