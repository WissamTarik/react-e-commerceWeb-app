import { MdClose } from 'react-icons/md'
import { IProducts } from '../../Interfaces/IProducts'
import CartBtn from '../CartBtn/CartBtn';
import { useAppDispatch } from '../../hooks/storeHook';
import { useState } from 'react';
import { actDeleteSpecificWishlistItem } from './../../libraries/redux/act/actRemoveSpecificWishlistItem';
import toast from 'react-hot-toast';
import { actGetUserWishlist } from '../../libraries/redux/act/actGetUserWishlist';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
interface IWishlistProps{
    record:IProducts,
    isOpen:boolean,
    onToggle: (id: string) => void;

    
}
const WishlistComponent = ({record,isOpen,onToggle}:IWishlistProps) => {
    const dispatch=useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)
    function handleRemoveItem(id:string){
        setIsLoading(true)
             dispatch(actDeleteSpecificWishlistItem(id)).unwrap().then(()=>{
                toast.success("Product is deleted from wishlist successfully",{
                    style:{
                        fontWeight:"bold",
                        color:"green"
                    }
                })
                dispatch(actGetUserWishlist())
               }).catch(()=>{
                toast.error("Product is failed to delete from wishlist",{
                    style:{
                        fontWeight:"bold",
                        color:"red"
                    }
                })
               }).finally(()=>{
                    setIsLoading(false) 
               })   
    }
  return  <>
     <div className="flex flex-col">
      <div className="relative">
        <img src={record.imageCover} alt={record.title} className="w-full" />
        <button
          aria-label="close"
          title='Remove from wishlist'
          className="top-4 right-4 absolute p-1.5 cursor-pointer bg-sky-800 text-white dark:bg-white hover:text-gray-400"
          onClick={()=>handleRemoveItem(record._id)}
      >
        {isLoading?<AiOutlineLoading3Quarters  className="animate-spin text-2xl text-white" />: <MdClose size={18} />}
         
        </button>
      </div>

      <div className="mt-6 flex justify-between items-center">
      <p className="tracking-tight text-xl font-semibold truncate w-full text-sky-800">
  {record.title}
</p>
        <button
          aria-label="show menu"
          onClick={() => onToggle(record._id)}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-sky-800 text-white dark:bg-white  hover:text-sky-400 hover:bg-sky-200"
        >
          {isOpen ? (
            <svg className="fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="fill-stroke" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col items-start mt-12">
          <p className="tracking-tight text-xs leading-3 text-gray-800 dark:text-white">{record.description}</p>
          <p className="mt-2 tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">{record.category.name}</p>
          <p className="mt-6 tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">{record.brand.name}</p>
          <p>
       {record.priceAfterDiscount ?<>
        <span className="mt-6 tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">{record.priceAfterDiscount} EGP </span>
        <span className="text-sm text-red-900 line-through">{record.price}</span>
       </>:<>
       <span className="mt-6 tracking-tight text-base font-medium leading-4 text-gray-800 dark:text-white">{record.price} EGP </span>
       </>}
      </p>
          <div className="flex flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
          
           <CartBtn productId={record._id}/>
          </div>
        </div>
      )}
    </div>
  </>
}

export default WishlistComponent