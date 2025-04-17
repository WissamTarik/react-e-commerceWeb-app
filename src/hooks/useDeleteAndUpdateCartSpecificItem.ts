import toast from "react-hot-toast"
import { actGetUserCart } from "../libraries/redux/act/actGetUserCart"
import { actDeleteSpecificCartItem } from "../libraries/redux/act/actRemoveSpecificCartItem"
import { useAppDispatch, useAppSelector } from "./storeHook"
import { actUpdateCartItemQuantity } from "../libraries/redux/act/actUpdateCartItemQuantity"

const useDeleteCartSpecificItem = () => {
     const dispatch=useAppDispatch()
      const {deleteSpecificItemLoading}=useAppSelector((store)=>store.addToCartReducer)
      function handleDeleteSpecificItem(productId:string){
           dispatch(actDeleteSpecificCartItem(productId)).unwrap().then(()=>{
            dispatch(actGetUserCart())
                toast.success('product is deleted successfully',{
                  style:{
                    fontWeight:"bold",
                    color:"green"
                  }
                })
           }).catch(()=>{
            toast.error('product  is failed to remove from the cart',{
              style:{
                fontWeight:"bold",
                color:"red"
              }
            })
    
           })
      }
      function handleItemUpdate(count:number,productId:string){
        dispatch(actUpdateCartItemQuantity({count,productId})).unwrap().then(()=>{
          dispatch(actGetUserCart())
          toast.success("Updated successfully",{
            style:{
              fontWeight:"bold",
              color:"green"
            }
          })
    
        }).catch(()=>{
          toast.error("Failed to update",{
            style:{
              fontWeight:"bold",
              color:"red"
            }
          })
        })
    
      }
  return {deleteSpecificItemLoading,handleDeleteSpecificItem,handleItemUpdate}
}

export default useDeleteCartSpecificItem