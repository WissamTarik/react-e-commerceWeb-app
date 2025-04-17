import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./storeHook"
import { actGetBrands } from "../libraries/redux/act/actGetBrands"

export function useBrands(){
    const dispatch=useAppDispatch()
const {isLoading,isError,records}=useAppSelector((store)=>store.brandsReducer)

useEffect(() => {
 if(records.length==0){
    
     dispatch(actGetBrands())
 }
  
}, [])
return {
    isError,isLoading,records
}
}