import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
type Props<TFieldValue extends FieldValues>={
     register:UseFormRegister<TFieldValue>,
     type:"text"|"password"|"tel"|"email",
     label:string,
     name:Path<TFieldValue>,
     error?:string
}
export const FormInput = <TFieldValue extends FieldValues>({register,name,label,type,error}:Props<TFieldValue>) => {
  return (
    <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input type={type} id={name}  autoComplete={type} {...register(name)}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
    
    className={`mt-1 p-2 w-full border rounded-md  focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300 ${error?'border-red-500':''}`} />
    {error && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>}
    </div>
  )
}

export default FormInput