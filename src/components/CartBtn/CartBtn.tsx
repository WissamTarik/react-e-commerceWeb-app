import { useProducts } from '../../hooks/useProducts'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { checkToken } from '../../hooks/guards'

const CartBtn = ({productId}:{productId:string}) => {
      const {addToCart,isLoadingCart,loadingProductIds}=useProducts()
    
  return (
<>
{checkToken()? <button  className="flex items-center justify-center w-full mx-auto rounded-md bg-sky-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-700  cursor-pointer transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
    onClick={()=>addToCart(productId)}
    disabled={isLoadingCart === 'pending'}
    aria-label='Add to cart'
     aria-live="assertive"
   >
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
        {loadingProductIds.includes(productId)?  <AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />:'Add to Cart'}</button>:
        
        
        <span className='text-red-500'>Please log in to add items to your cart</span>}
</>
  )
}

export default CartBtn