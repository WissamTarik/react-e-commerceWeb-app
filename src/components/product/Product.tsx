import { FaStar } from 'react-icons/fa'
import { IProducts } from '../../Interfaces/IProducts'
import { Link } from 'react-router-dom'
import CartBtn from '../CartBtn/CartBtn';
import { FaHeart } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import useWishlist from '../../hooks/useWishlist';
import { memo } from 'react';

const Product = memo(({record}:{record:IProducts}) => {
const {isLoading,isItemInWishList,handleAddToWishlist}=useWishlist(record._id)

let localItemsInWishlist=[]
const storedWishlist = localStorage.getItem('wishlistItemsId');

if(storedWishlist){
      localItemsInWishlist=JSON.parse(storedWishlist)
}
  return (
<>
<div className="relative  flex w-full pb-3 flex-col overflow-hidden rounded-lg border hover:-translate-y-1.5 transition-all duration-300 hover:shadow-md hover:shadow-sky-300 border-gray-100 bg-white shadow-md">
  <Link to={`/products/productDetails/${record._id}`} className='block  mx-auto'>
  <div className="relative mx-auto mt-0 flex  overflow-hidden rounded-xl " >
    <img className="object-cover  h-[250px] " src={record.imageCover} alt={record.title} />
    {record.priceAfterDiscount&&   <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white">Sale</span>}
  </div>
  <div className="mt-4 px-5 pb-2">
      <h5 className="text-xl  tracking-tight text-sky-900">{record.title.split(' ',2).join(' ')}</h5>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
       {record.priceAfterDiscount ?<>
        <span className="text-xl font-bold text-slate-900">{record.priceAfterDiscount} EGP </span>
        <span className="text-sm text-red-900 line-through">{record.price}</span>
       </>:<>
       <span className="text-xl font-bold text-slate-900">{record.price} EGP </span>
       </>}
      </p>
      <div className="flex items-center">
        <span>{record.ratingsAverage}</span>
       <FaStar className="text-yellow-500" />

      </div>
    </div>
  </div>
  </Link>
 <div className='w-3/4 mx-auto'>
 <CartBtn productId={record._id}/>
<button className={`absolute top-4 end-4 text-xl  ${localItemsInWishlist.includes(record._id)|| isLoading?"cursor-auto" :"cursor-pointer" } ${isItemInWishList?"text-red-600":""} ${localItemsInWishlist.includes(record._id)?"text-red-600":""}`} disabled={isLoading ||localItemsInWishlist.includes(record._id) ?true:false} onClick={()=>handleAddToWishlist(record._id)} aria-label="Add to wishlist" >


{isLoading? <AiOutlineLoading3Quarters className="animate-spin text-2xl text-gray-500" />:<FaHeart  />}

  </button>  
 </div>

</div>


</>
  )
})

export default Product