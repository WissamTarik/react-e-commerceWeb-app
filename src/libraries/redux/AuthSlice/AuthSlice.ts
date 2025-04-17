import { createSlice } from "@reduxjs/toolkit";
import { IAuthInterface } from "../../../Interfaces/IAuthInterface";
import { actRegister } from "../act/actRegister";
import { actLogin } from "../act/actLogin";
import { actForgetPassword, actVerifyPassword } from "../act/actForgetAndVerifyPassword";
import { actUpdatePassword } from "../act/actUpdatePassword";

 
const initialState:IAuthInterface={
   isError:false,
   isLoading:"idle",
   token:null,
   message:null
}

 const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
      cleanUp:(state)=>{
         state.message=null
          
      }
    },
    extraReducers:(builder)=>{
      builder.addCase(actRegister.pending,(state)=>{
         console.log('Register is pending');
         state.isError=false
         state.message=null
        state.isLoading='pending'
      })
      builder.addCase(actRegister.fulfilled,(state,action)=>{
        state.isLoading='succeeded'
        console.log('Register succeeded');
        
        if(action.payload.token){
           state.token=action.payload.token
           localStorage.setItem('token',action.payload.token)
           console.log(state.token);
           
        }
          if(action.payload.message=='Account Already Exists'){
         state.message=action.payload.message
                                 
        }
      })
      builder.addCase(actRegister.rejected,(state)=>{
           state.isLoading='failed'
           state.isError=true
         

      })
        builder.addCase(actLogin.pending,(state)=>{
                   console.log('Login is pending');
                   state.isError=false
                   state.message=null
                  state.isLoading='pending'
                })
                builder.addCase(actLogin.fulfilled,(state,action)=>{
                  state.isLoading='succeeded'
                  console.log('Login succeeded');
                  
                  if(action.payload.token){
                     state.token=action.payload.token
                     localStorage.setItem('token',action.payload.token)
                     console.log(state.token);
                     
                  }
                   state.message=action.payload.message
                                           
                  
                })
                builder.addCase(actLogin.rejected,(state)=>{
                     state.isLoading='failed'
                     state.isError=true
                   
          
                })
        builder.addCase(actForgetPassword.pending,(state)=>{
                   console.log('Forget password is pending');
                   state.isError=false
                   state.message=null
                  state.isLoading='pending'
                })
                builder.addCase(actForgetPassword.fulfilled,(state,action)=>{
                  state.isLoading='succeeded'
                  console.log('Forget password succeeded');
                   state.message=action.payload.message
                                           
                  
                })
                builder.addCase(actForgetPassword.rejected,(state)=>{
                     state.isLoading='failed'
                     state.isError=true 
                     state.message="Un expected error"

                     console.log('Forget password is Rejected');

          
                })
        builder.addCase(actVerifyPassword.pending,(state)=>{
                   console.log('Verify password is pending');
                   state.isError=false
                   state.message=null
                  state.isLoading='pending'
                })
                builder.addCase(actVerifyPassword.fulfilled,(state,action)=>{
                  state.isLoading='succeeded'
                  console.log('Verify password succeeded');
                   state.message=action.payload.message
                                           
                  
                })
                builder.addCase(actVerifyPassword.rejected,(state,action)=>{
                     state.isLoading='failed'
                     state.isError=true 
                     
                     if(typeof action.payload=='string'){
                        state.message=action.payload
                     }

                     console.log('Verify password is Rejected');

          
                })
        builder.addCase(actUpdatePassword.pending,(state)=>{
                   console.log('Update password is pending');
                   state.isError=false
                   state.message=null
                  state.isLoading='pending'
                })
                builder.addCase(actUpdatePassword.fulfilled,(state,action)=>{
                  state.isLoading='succeeded'
                  state.token=action.payload.token
                  localStorage.setItem('token',action.payload.token)
                  console.log('Update password succeeded');
                   state.message=action.payload.message
                                           
                  
                })
                builder.addCase(actUpdatePassword.rejected,(state,action)=>{
                     state.isLoading='failed'
                     state.isError=true 
                     
                     if(typeof action.payload=='string'){
                        state.message=action.payload
                     }

                     console.log('Verify password is Rejected');

          
                })
    }
 })
 export const {cleanUp}=authSlice.actions
 export const authReducer=authSlice.reducer