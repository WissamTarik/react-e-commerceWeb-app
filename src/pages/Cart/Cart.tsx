
import { Link } from 'react-router-dom';
import Heading from './../../components/Heading/Heading';

import CartItemComponent from '../../components/CartItemComponent/CartItemComponent';
import Loading from '../../components/Loading/Loading';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import useAllCartItems from '../../hooks/useAllCartItems';
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet';

const Cart = () => {
 const  {deleteLoading,isLoading,records,totalPrice,isError,handleClearCart}=useAllCartItems()
 const cartItem=records.map((record)=><CartItemComponent record={record} key={record._id} />)

  return (
    <section id="cart">
      <MetaHelmet metaTitle='Cart'/>
    <Heading title='User  Cart'/>
    <Loading error={isError} loadingStatus={isLoading} component="Cart">

   <div className="bg-white py-8 antialiased dark:bg-gray-900 md:pb-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
  <div className='flex justify-between items-center'>
  <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
  <button className='bg-red-600 hover:bg-red-500 transition-colors duration-300 text-white rounded-md px-3 py-2  cursor-pointer' disabled={deleteLoading=='pending'?true:false}
 aria-label='clear all cart items'
 onClick={handleClearCart}
  >

    {deleteLoading=='pending'?<AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />:"Clear All Cart"}
  </button>
  </div>
    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
           {cartItem}
        
        </div>
      
      </div>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
          <div className="space-y-4">
      
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">{totalPrice} EGP</dd>
            </dl>
          </div>
          <Link to={'/paymentUserInformation'} className="flex w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-800 cursor-pointer transition-colors  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</Link>
          <div className="flex items-center justify-center gap-2">

            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <Link to={'/products'}  className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 underline hover:no-underline ">
              Continue Shopping
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </Link>
            
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
</Loading>

    </section>
  )
}

export default Cart