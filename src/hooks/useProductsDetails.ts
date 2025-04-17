import { useEffect, useMemo, useState } from "react"
import { actGetSpecificProducts } from "../libraries/redux/act/actGetSpecificProduct"
import { actGetProducts } from "../libraries/redux/act/actGetProducts"
import { useAppDispatch, useAppSelector } from "./storeHook";
import { IProducts } from "../Interfaces/IProducts";

export function useProductsDetails(prefix:string){
    const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([])
    const dispatch=useAppDispatch()
    const {isError,isLoading,record}=useAppSelector((store)=>store.specificProductReducer)
    const {records,isError:allProductsError,isLoading:allProductsIsLoading}=useAppSelector((store)=>store.productsReducers)
      
    const settings = useMemo(()=>( {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      
      speed: 1000,
      autoplaySpeed: 2000,
    
      pauseOnHover: true,
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }),[]);
 
  useEffect(() => {
    dispatch(actGetProducts())
  }, [])
  useEffect(() => {
    if(record?.category?.name){
      const filtered = records.filter(product =>
        product.category.name === record.category.name && product._id !== record._id
      )
      setFilteredProducts(filtered)
    }
  }, [record.category.name, records])
 
      useEffect(() => {
        
         dispatch(actGetSpecificProducts(prefix as string))
      }, [prefix])
      return {
        settings,filteredProducts,records,isLoading,isError,allProductsError,allProductsIsLoading,record
      }
}