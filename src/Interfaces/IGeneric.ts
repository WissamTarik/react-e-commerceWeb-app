import { loadingType } from "../genericTypes/genericTypes"

 export interface initialInterface<T>{
    isError:boolean,
    isLoading:loadingType
    record:T
}