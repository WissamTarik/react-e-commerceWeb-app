import { loadingType } from "../genericTypes/genericTypes";
import { CategoryAndBrandInterface, SubcategoryInterface } from "./IProducts";

export interface ICartInterface{
    numOfCartItems:number,
    message:string|null,
    isLoading:loadingType,
    isError:boolean,
    deleteLoading:loadingType,
    deleteMessage:string|null,
    updateMessage:string|null,
    deleteSpecificItemLoading:loadingType,
    updateSpecificItemLoading:loadingType,
}
export interface IGetCartData{
    status:string,
    numOfCartItems:number,
    cartId:string
    data:{
        _id:string,
        cartOwner:string,
        products:ICartRecords[]
        totalCartPrice: number,
        createdAt:string,
        updatedAt:string,
        _v:number,
    }
}
export interface initialGetCartData{
    isLoading:loadingType,
    isError:boolean,
    records:ICartRecords[],
    totalPrice:number
    
}
export interface ICartRecords{
        count:number,
        _id:number,
         product:{
           subcategory:SubcategoryInterface[],
           title:string,
           _id:string,
           quantity:number,
           imageCover:string,
           category:CategoryAndBrandInterface,
           brand:CategoryAndBrandInterface,
            ratingsAverage:number,
            id:string
        }
        price:number

}
