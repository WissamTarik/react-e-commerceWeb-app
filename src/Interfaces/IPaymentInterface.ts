import { loadingType } from "../genericTypes/genericTypes";


export interface IInitialPaymentInterface{
    isLoading:loadingType,
    isError:boolean,
    sessionURL:string|null

}