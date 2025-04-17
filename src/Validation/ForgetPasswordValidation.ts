import {z} from "zod"
import { emailSchema } from "./CommonValidation"
export const  forgetPasswordSchema=z.object({
    email:emailSchema
})
export type TForgetPassword=z.infer<typeof forgetPasswordSchema>