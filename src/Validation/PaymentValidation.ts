import {z} from 'zod'
import { phoneSchema } from './CommonValidation'


export const Paymentschema=z.object({
    details:z.string().min(3,{message:"Details must be at least 3  and required"}).max(15,{message:"Details shouldn't exceed 10 characters"}),
    city: z.string().min(1, { message: "City is required" }).max(10, { message: "City must not exceed 10 characters" }),
    phone:phoneSchema
})

export type TPaymentSchemaTypes=z.infer<typeof Paymentschema>