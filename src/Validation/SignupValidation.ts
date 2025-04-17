import {z} from 'zod'
import { emailSchema, passwordSchema, phoneSchema } from './CommonValidation'


export const signUpSchema=z.object({
    name:z.string().min(3,{message:"Name must be at least 3  and required"}).max(10,{message:"Name shouldn't exceed 10 characters"}),
    email:emailSchema,
    password:passwordSchema,
    rePassword: z.string().min(1, 'Please confirm your password'),

    phone:phoneSchema
}).refine((input)=>input.password==input.rePassword,{message:"Password and Confirm password aren't match",path:['rePassword']})

export type signUpTypes=z.infer<typeof signUpSchema>