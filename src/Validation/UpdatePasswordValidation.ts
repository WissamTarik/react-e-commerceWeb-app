import {z} from 'zod'
import { emailSchema, passwordSchema } from './CommonValidation'

export const updatePasswordSchema=z.object({
    email: emailSchema,
    newPassword:passwordSchema
})

export type TUpdatePasswordSchema=z.infer<typeof updatePasswordSchema>