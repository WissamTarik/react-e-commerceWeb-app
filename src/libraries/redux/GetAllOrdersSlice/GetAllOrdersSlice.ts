import { createSlice } from "@reduxjs/toolkit";
import { IAllOrdersInitialState } from "../../../Interfaces/IAllOrdersInterface";
import { actGetAllOrders } from './../act/actGetAllOrders';


const initialState:IAllOrdersInitialState={
    isError:false,
    isLoading:"idle",
    records:{
        "shippingAddress": {
            "details": "www",
            "phone": "01152216639",
            "city": "nasr"
        },
        "taxPrice": 0,
        "shippingPrice": 0,
        "totalOrderPrice": 2443,
        "paymentMethodType": "cash",
        "isPaid": false,
        "isDelivered": false,
        "_id": "67a4f6f1518151d803d8b43d",
        "user": {
            "_id": "67a203a952e8e0ca3d39ab03",
            "name": "hello",
            "email": "www.wissamtarik2021@gmail.com",
            "phone": "01155222661"
        },
        "cartItems": [
            {
                "count": 3,
                "_id": "67a4f6ab518151d803d8b0b4",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "ratingsQuantity": 18,
                    "_id": "6428ead5dc1175abc65ca0ad",
                    "title": "Woman Shawl",
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428ead5dc1175abc65ca0ad"
                },
                "price": 149
            },
            {
                "count": 2,
                "_id": "67a4f6ad518151d803d8b0d3",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "ratingsQuantity": 5,
                    "_id": "6428e509dc1175abc65ca07e",
                    "title": "Relaxed Fit Knitted Joggers Lilac",
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428e509dc1175abc65ca07e"
                },
                "price": 499
            },
            {
                "count": 1,
                "_id": "67a4f6b3518151d803d8b136",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "ratingsQuantity": 5,
                    "_id": "6428e5e6dc1175abc65ca084",
                    "title": "Woman Standart Fit Knitted Cardigan",
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.8,
                    "id": "6428e5e6dc1175abc65ca084"
                },
                "price": 499
            },
            {
                "count": 1,
                "_id": "67a4f6b5518151d803d8b15a",
                "product": {
                    "subcategory": [
                        {
                            "_id": "6407f1bcb575d3b90bf95797",
                            "name": "Women's Clothing",
                            "slug": "women's-clothing",
                            "category": "6439d58a0049ad0b52b9003f"
                        }
                    ],
                    "ratingsQuantity": 5,
                    "_id": "6428e778dc1175abc65ca08a",
                    "title": "Woman Brown Long Sleeve Tunic LT.CAMEL",
                    "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg",
                    "category": {
                        "_id": "6439d58a0049ad0b52b9003f",
                        "name": "Women's Fashion",
                        "slug": "women's-fashion",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
                    },
                    "brand": {
                        "_id": "64089bbe24b25627a253158b",
                        "name": "DeFacto",
                        "slug": "defacto",
                        "image": "https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png"
                    },
                    "ratingsAverage": 4.7,
                    "id": "6428e778dc1175abc65ca08a"
                },
                "price": 499
            }
        ],
        "createdAt": "2025-02-06T17:52:49.766Z",
        "updatedAt": "2025-02-06T17:52:49.766Z",
        "id": 39675,
        "__v": 0
    },
}

const getAllOrdersSlice=createSlice({
    name:"allOrders",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(actGetAllOrders.pending,(state)=>{
            state.isLoading='pending'
            state.isError=false
            console.log('All orders is pending');
            
        })
        builder.addCase(actGetAllOrders.fulfilled,(state,action)=>{
            state.isLoading='succeeded'
            state.records=action.payload

            console.log('All orders is Fulfilled',action.payload);
            localStorage.setItem('numOfCartItems','0')
            
        })
        builder.addCase(actGetAllOrders.rejected,(state)=>{
            state.isLoading='failed'
            state.isError=true
            console.log('All orders is Rejected');
            
        })
    },
})
export const getAllOrdersReducer=getAllOrdersSlice.reducer