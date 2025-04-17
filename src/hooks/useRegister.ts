import { SubmitHandler, useForm } from "react-hook-form";
import { signUpSchema, signUpTypes } from "../Validation/SignupValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "./storeHook";
import { actRegister } from "../libraries/redux/act/actRegister";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { cleanUp } from "../libraries/redux/AuthSlice/AuthSlice";

export const useRegister = () => {
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const {isLoading,isError}=useAppSelector((store)=>store.authReducer)
     const {register,handleSubmit,formState:{errors}}=useForm<signUpTypes>({
        mode:'onBlur',
        resolver:zodResolver(signUpSchema)
      })
      const onSubmit:SubmitHandler<signUpTypes>=(data)=>{
        console.log(data);
        dispatch(actRegister(data))
        .unwrap()
        .then((state) => {
          if(state.message=='Account Already Exists'){
            console.log(state.message,'From use');
            
              toast.error('Account Already Exists',{
                style:{
                    fontWeight:"bold",
                    color:"red"
                } 
              })
          }
          if(state.token){
            toast.success('You Registered Successfully',{
              style:{
            
                  fontWeight:"bold",
                  color:"green"
              } 
            })
            navigate('/')
          }
        }).finally(()=>{
          dispatch(cleanUp())

        });
        
        
      }

      
  return {isLoading,register,handleSubmit,errors,onSubmit,isError}
}

export default useRegister