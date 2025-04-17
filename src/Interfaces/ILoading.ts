import { loadingType } from "../genericTypes/genericTypes";

export interface ILoading{
    loadingStatus:loadingType
    error:boolean
    children:React.ReactNode,
    component?:string
}