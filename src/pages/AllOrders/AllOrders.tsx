import Heading from "../../components/Heading/Heading"
import OrderItem from "../../components/OrderItem/OrderItem";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import useAllOrders from "../../hooks/useAllOrders";
import MetaHelmet from "../../components/MetaHelmet/MetaHelmet";

const AllOrders = () => {
 const {records,isError,isLoading}=useAllOrders()
 const cartItem=records.cartItems.map((item)=><OrderItem key={item._id} cartItem={item}/>)
  return (
   <section>
    <MetaHelmet metaTitle="Last Order Summary"/>
  <div className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="mx-auto max-w-3xl">
        <Heading title="Order Summary"/>
       <Loading loadingStatus={isLoading} error={isError}>

        <>
        <div className="mt-6 sm:mt-8">
          <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
            <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {cartItem}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-6">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">{records.taxPrice} EGP</dd>
                </dl>
              </div>
              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt className="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                <dd className="text-lg font-bold text-gray-900 dark:text-white">{records.totalOrderPrice} EGP</dd>
              </dl>
            </div>
          
            <div className="gap-4 sm:flex sm:items-center">
              <Link to='/products' aria-label="products button" className="w-full rounded-lg  border border-gray-200 bg-blue-500 text-center  px-5  py-2.5 text-sm font-medium text-white hover:bg-blue-600 cursor-pointer transition-colors  focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-4">Return to Shopping</Link>
            </div>
          </div>
        </div>
        </>
       </Loading>
      </div>
    </form>
  </div>
 
</section>

  )
}

export default AllOrders