import toast from "react-hot-toast"
import { actForgetPassword } from "../libraries/redux/act/actForgetAndVerifyPassword"
import { forgetPasswordSchema, TForgetPassword } from "../Validation/ForgetPasswordValidation"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./storeHook"

const useForgetPassowrd = () => {
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const {isLoading,isError}=useAppSelector((store)=>store.authReducer)
  const {register,formState:{errors},handleSubmit}=useForm<TForgetPassword>({
    mode:"onBlur",
    resolver:zodResolver(forgetPasswordSchema)
  })
  const submit:SubmitHandler<TForgetPassword>=(data)=>{
    dispatch(actForgetPassword(data)).unwrap().then((state)=>{
        console.log(data);
        
        toast.success(state.message,{
            style:{
              fontWeight:"bold",
              color:'green'
            }
          })
          navigate('/verifyPassword')
    }).catch(()=>{
        toast.error("Un expected error",{
            style:{
              fontWeight:"bold",
              color:'red'
            }
          })
    })
    
  }
   
     
 return {isError,isLoading,submit,register,errors,handleSubmit}
}

export default useForgetPassowrd