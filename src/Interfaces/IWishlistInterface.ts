import { loadingType } from "../genericTypes/genericTypes";
import { IProducts } from "./IProducts";

export interface IInitialStateWishlist{
    addItemToWishlistLoading:loadingType,
    getWishlistLoading:loadingType,
    deleteWishlistLoading:loadingType,
    addItemMessage:string|null,
    deleteItemMessage:string|null,
    isError:boolean,
    itemsInWishlist:string[],
    records:IProducts[],
    count:number
}
export interface IWishlistData{
    count:number,
    status:string,
    data:IProducts[]
}