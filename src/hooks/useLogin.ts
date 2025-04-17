import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "./storeHook";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { actLogin } from "../libraries/redux/act/actLogin";
import { signInSchema, signInTypes } from "../Validation/SigninValidation";
export const useLogin=()=>{
      const dispatch=useAppDispatch()
      const {isLoading}=useAppSelector((store)=>store.authReducer)
        const navigate=useNavigate()
          const {register,handleSubmit,formState:{errors}}=useForm<signInTypes>({
                mode:'onBlur',
                resolver:zodResolver(signInSchema)
              })
              const onSubmit:SubmitHandler<signInTypes>=(data)=>{
                console.log(data);
                dispatch(actLogin(data)).unwrap().then((state)=>{
                     if(state.message=='Incorrect email or password'){
                      toast.error('Incorrect email or password',{
                        style:{
                          fontWeight:"bold",
                          color:'red'
                        }
                      })
                     }
                     if(state.token){
                      toast.success('Welcome to fresh cart',{
                          style:{
                            fontWeight:"bold",
                            color:"green"
                          }
                      })
                      navigate('/')
                     } else {
                      toast.error('Something went wrong, please try again.', {
                        style: {
                          fontWeight: "bold",
                          color: 'red',
                        },
                      });
                    }
                }).catch(() => {
                  toast.error('An error occurred during login', {
                    style: {
                      fontWeight: "bold",
                      color: 'red',
                    },
                  })
              
            });
          
              }

 return {register,handleSubmit,errors,onSubmit,isLoading}
 
}
