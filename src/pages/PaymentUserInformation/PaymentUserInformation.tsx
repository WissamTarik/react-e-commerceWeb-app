
import FormInput from "../../components/FormInput/FormInput"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Loading from "../../components/Loading/Loading"
import usePayment from "../../hooks/usePayment"
import MetaHelmet from "../../components/MetaHelmet/MetaHelmet"

const PaymentUserInformation = () => {
   const { isLoading, isError, register,handleSubmit,onSubmit,errors,setPayByCash,cashLoader, onlinePaymentLoader,}=usePayment()
  return (
<section className='min-h-screen flex items-center justify-center p-4' >
  <MetaHelmet metaTitle="Confirm payment"/>
<div className="lg:w-1/3 sm:w-2/3" >
  <div className="  w-full bg-white rounded-xl shadow-lg p-8   border-sky-800 border-2">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shipping Address</h2>
   <Loading loadingStatus={isLoading} error={isError}>

   <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
     <FormInput label="Details" type="text" register={register} name="details" error={errors.details?.message}/>
     <FormInput label="City" type="text" register={register} name="city" error={errors.city?.message}/>
     <FormInput label="Phone" type="tel" register={register} name="phone" error={errors.phone?.message}/>
     
  
      <button className="w-full flex justify-center items-center  cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
       onClick={()=>setPayByCash(true)}
       aria-label="Cash order button"
       type='submit'
       disabled={cashLoader?true:false}
      >
         {cashLoader?<AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />:' Cash Payment'}
      
      </button>
      <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
       onClick={()=>setPayByCash(false)}
       aria-label="Online order button"
       type='submit'
       disabled={onlinePaymentLoader?true:false}
      >
                 {onlinePaymentLoader?<AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />:'Online Payment'}

      </button>
    </form>
  
   </Loading>
  </div>
</div>

</section>
)
}

export default PaymentUserInformation