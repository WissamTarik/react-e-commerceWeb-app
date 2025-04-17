
import FormInput from "../../components/FormInput/FormInput"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Heading from "../../components/Heading/Heading"
import Loading from "../../components/Loading/Loading"
import useForgetPassowrd from "../../hooks/useForgetPassword"
import MetaHelmet from "../../components/MetaHelmet/MetaHelmet"
const ForgetPassword = () => {
 const {isError,isLoading,register,handleSubmit,submit,errors}=useForgetPassowrd()
  return (
<>
<section id="forgetPassword" role="main" className="w-full min-h-screen  max-w-lg mx-auto p-6">
<MetaHelmet metaTitle={'Forget password'}/>

<Heading title="Forget password"/>
  <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-sky-800">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Remember your password?
          <a className="text-blue-600 decoration-2 hover:underline font-medium" href="/login">
            Login here
          </a>
        </p>
      </div>
     <Loading error={isError} loadingStatus={isLoading}>

       <div className="mt-5">
        <form onSubmit={handleSubmit(submit)}>
          <div className="grid gap-y-4">
            <div>
            <FormInput label="Email Address" register={register} name="email" type="email" error={errors.email?.message} />
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>
            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  cursor-pointer  transition-colors  duration-500  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm dark:focus:ring-offset-gray-800" aria-label="Submit button"
            disabled={isLoading=='pending'?true:false}
            >
                
                            {isLoading=='pending'? <AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />:' Reset password'}
                
               </button>
          </div>
        </form>
      </div>
     </Loading>
    </div>
  </div>
 
</section>

</>  )
}

export default ForgetPassword