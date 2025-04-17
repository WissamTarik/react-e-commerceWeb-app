import { SubmitHandler, useForm } from "react-hook-form"
import { TUpdatePasswordSchema, updatePasswordSchema } from "../Validation/UpdatePasswordValidation"
import { actUpdatePassword } from "../libraries/redux/act/actUpdatePassword"
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch, useAppSelector } from "./storeHook"
import { useNavigate } from "react-router-dom"

 const useUpdateLoggedUserPassword=()=>{
    const dispatch=useAppDispatch()
    const {isLoading}=useAppSelector((store)=>store.authReducer)
      const navigate=useNavigate()
        const {register,handleSubmit,formState:{errors}}=useForm<TUpdatePasswordSchema>({
              mode:'onBlur',
              resolver:zodResolver(updatePasswordSchema)
            })
            const onSubmit:SubmitHandler<TUpdatePasswordSchema>=(data)=>{
                dispatch(actUpdatePassword(data)).unwrap().then(()=>{
                     toast.success("Password Updated Successfully",{
                      style:{
                        fontWeight:"bold",
                        color:"green"
                      }
                     })
                     navigate('/')
                }).catch((error)=>{
                   toast.error(error,{
                    style:{
                      fontWeight:"bold",
                      color:"red"
                    }
                   })                      
                })
            }
            return{
                isLoading,onSubmit,register,handleSubmit,errors
            }
}
export default  useUpdateLoggedUserPassword