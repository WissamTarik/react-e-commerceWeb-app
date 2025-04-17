import { useEffect, useState } from "react"
import { actGetProducts } from "../libraries/redux/act/actGetProducts"
import { useAppDispatch, useAppSelector } from "./storeHook"
import { actAddToCart } from "../libraries/redux/act/actAddToCart"
import toast from "react-hot-toast"
export function useProducts(){

    const dispatch=useAppDispatch()
    const {isLoading,records,isError}=useAppSelector((store)=>store.productsReducers)
    const {isLoading:isLoadingCart}=useAppSelector((store)=>store.addToCartReducer)
    const [loadingProductIds, setLoadingProductIds] = useState<string[]>([]);

    useEffect(() => {
      if(records.length==0){
     dispatch(actGetProducts())
      }
    
    }, [dispatch])
   function addToCart(productId:string){
     setLoadingProductIds(prev => [...prev, productId]); 
      dispatch(actAddToCart(productId)).unwrap().then((state)=>{

        if(state.message=='Product added successfully to your cart'){
          toast.success("Product added to cart successfully",{
            style:{
              fontWeight:"bold",
              color:"green"
            }
          })
        }
        else{
          toast.error("Failed To add product to cart",{
            style:{
              fontWeight:"bold",
              color:"red"
            }
          })
        }
      }
    
    ).finally(()=>{
      setLoadingProductIds(prev => prev.filter(id => id !== productId)); 

    })
   }
return {isLoading,records,isError,addToCart,isLoadingCart,loadingProductIds}
} 