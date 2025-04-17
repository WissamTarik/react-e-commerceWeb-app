import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHook";
import { actGetAllOrders } from "../libraries/redux/act/actGetAllOrders";

export default function useAllOrders() {
    const dispatch=useAppDispatch()
    const {isLoading,isError,records}=useAppSelector((store)=>store.getAllOrdersReducer)
    
    useEffect(() => {
        
         dispatch(actGetAllOrders())
         
         
    },[])
    return {
        isError,isLoading,records
    }
}