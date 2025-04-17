import { useEffect, useState } from "react";
import { actGetProducts } from "../libraries/redux/act/actGetProducts";
import { useAppDispatch, useAppSelector } from "./storeHook";
import { IProducts } from "../Interfaces/IProducts";

export function usePartsOfProducts(categoryName:string){
    const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([])
    const dispatch=useAppDispatch()
    const {records,isError,isLoading}=useAppSelector((store)=>store.productsReducers)
    function getSpecificProducts(){
        
                  dispatch(actGetProducts())
                   const x =records.filter((product)=>product.category.name==categoryName)
                   setFilteredProducts(x)
    }
    useEffect(() => {
        if(filteredProducts.length>0){
            return ;
        }
      
        getSpecificProducts()    

    }, [])
    return{
        isError,isLoading,filteredProducts
    }
}