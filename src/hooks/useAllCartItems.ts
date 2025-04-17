import  { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useAppDispatch, useAppSelector } from './storeHook'
import { useNavigate } from 'react-router-dom'
import { actGetUserCart } from '../libraries/redux/act/actGetUserCart'
import { actClearUserCart } from '../libraries/redux/act/actClearUserCart'

const useAllCartItems = () => {
    const dispatch=useAppDispatch()
    const {isLoading,records,totalPrice,isError}=useAppSelector((store)=>store.getCartReducer)
    const {deleteLoading}=useAppSelector((store)=>store.addToCartReducer)
    const navigate=useNavigate()
    useEffect(() => {
      dispatch(actGetUserCart())
         
    }, [])
    function handleClearCart(){
      dispatch(actClearUserCart()).unwrap().then((state)=>{
          if(state.deleteMessage=='success'){
            toast.success('Cart is empty',{
              style:{
                color:"green",
                fontWeight:"bold"
              }
            })
          }
          navigate('/products')
      }).catch(()=>{
        toast.error("Can't delete the cart",{
          style:{
            color:"red",
            fontWeight:"bold"
          }
        })
      })
    }
  return {deleteLoading,isLoading,records,totalPrice,isError,handleClearCart}
}

export default useAllCartItems