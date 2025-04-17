import { loadingType } from "../genericTypes/genericTypes";
import { CategoryAndBrandInterface } from "./IProducts";

export interface IBrandInterface extends CategoryAndBrandInterface{
    createdAt:string,
    updatedAt:string
}
export interface IBrandsInitialState{
    isLoading:loadingType,
    isError:boolean,
    records:IBrandInterface[]
}