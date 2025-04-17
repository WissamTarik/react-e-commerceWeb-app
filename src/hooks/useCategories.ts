import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./storeHook"
import { actGetAllCategories } from "../libraries/redux/act/actGetAllCategories"

export function useCategories(){
    const dispatch=useAppDispatch()
const {isLoading,isError,records}=useAppSelector((store)=>store.categoriesReducer)

useEffect(() => {
  if(records.length>0){
    return
  }
  dispatch(actGetAllCategories())
  
}, [])
return {
    isError,isLoading,records
}
}