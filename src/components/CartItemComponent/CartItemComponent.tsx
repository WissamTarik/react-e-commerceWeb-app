import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useDeleteCartSpecificItem from '../../hooks/useDeleteAndUpdateCartSpecificItem'
import { ICartRecords } from '../../Interfaces/ICartInterface'
import useWishlist from '../../hooks/useWishlist'
import { useAppSelector } from '../../hooks/storeHook'
const CartItemComponent = ({record}:{record:ICartRecords}) => {
  const {deleteSpecificItemLoading,handleDeleteSpecificItem,handleItemUpdate}=useDeleteCartSpecificItem()
  const {isLoading,handleAddToWishlist}=useWishlist(record.product._id)
  const { itemsInWishlist } = useAppSelector((state) => state.wishlistReducer);

  
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" className="w-20 shrink-0 md:order-1">
        <img className=" dark:hidden" src={record.product.imageCover} alt={record.product.title} />
      </a>
      <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <button type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center cursor-pointer rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          aria-label='decrement the product number'
         onClick={()=>(handleItemUpdate(record.count-1,record.product._id))}
          >
            <svg className="h-3 w-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <input type="text" id="counter-input-5"
          aria-label='item count'
          readOnly data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"  defaultValue={record.count}  />
          <button type="button" id="increment-button-5"
           aria-label='increment the product number'
          data-input-counter-increment="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center cursor-pointer rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                     onClick={()=>(handleItemUpdate(record.count+1,record.product._id))}

          >
            <svg className="h-3 w-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900 dark:text-white">{record.price} EGP</p>
        </div>
      </div>
      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <h2 className="text-base font-medium text-gray-900 hover:underline dark:text-white">{record.product.title}</h2>
        <div className="flex items-center gap-4">
          <button type="button" 
           aria-label='Add to wishlist'
           onClick={()=>handleAddToWishlist(record.product._id)}
          className={`inline-flex items-center text-sm font-medium  hover:text-gray-900 hover:underline  ${itemsInWishlist.includes(record.product._id)?"text-red-600":"text-gray-500"}  ${itemsInWishlist.includes(record.product._id)|| isLoading?"cursor-auto" :"cursor-pointer" }` }
          disabled={isLoading ||itemsInWishlist.includes(record.product._id) ?true:false}
          >
            {isLoading? <AiOutlineLoading3Quarters className="animate-spin text-2xl text-gray-500" />:<>  <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={itemsInWishlist.includes(record.product._id)?"#ef4444":"none"} viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
            </svg>
            Add to wishlist</>}
          
          </button>
          <button type="button" disabled={deleteSpecificItemLoading=='pending'?true:false} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline cursor-pointer dark:text-red-500" onClick={()=>handleDeleteSpecificItem(record.product._id)}>
            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            Remove {deleteSpecificItemLoading=='pending'? <AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />:""}
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CartItemComponent