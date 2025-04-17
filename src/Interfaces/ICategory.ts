import { CategoryAndBrandInterface } from "./IProducts";

export interface ICategory extends CategoryAndBrandInterface{
    createdAt:string,
    updatedAt:string
}