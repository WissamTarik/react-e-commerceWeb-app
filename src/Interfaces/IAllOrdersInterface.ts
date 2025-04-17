import { loadingType } from "../genericTypes/genericTypes";
import { TPaymentSchemaTypes } from "../Validation/PaymentValidation";
import { CategoryAndBrandInterface, SubcategoryInterface } from "./IProducts";

export interface IAllOrdersDataInterface{
     shippingAddress:TPaymentSchemaTypes,
     taxPrice:number,
     shippingPrice:number,
     totalOrderPrice:number,
     paymentMethodType:string,
     isPaid:boolean,
     isDelivered:boolean,
     _id:string,
     user:User,
     cartItems:CartItems[],
     createdAt:string,
     updatedAt:string,
     id:number,
     __v:number

}
interface User{
    _id:string,
    name:string,
    email:string,
    phone:string
}
export interface CartItems{
    count:number,
    _id:string,
    product:IProductInterface,
    price:number

}
export interface IAllOrdersInitialState{
    isLoading:loadingType,
    isError:boolean,
    records:IAllOrdersDataInterface
}
interface IProductInterface{
    subcategory:SubcategoryInterface[],
    ratingsQuantity:number,
    _id:string,
    title:string,
    imageCover:string,
    category:CategoryAndBrandInterface,
    brand:CategoryAndBrandInterface,
    ratingsAverage:number,
    id:string,
}
/* 
        "cartItems": [
            {
            
                   
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
*/