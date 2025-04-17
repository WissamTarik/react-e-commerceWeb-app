import Heading from '../../components/Heading/Heading';
import { FaHeart } from 'react-icons/fa';
import WishlistComponent from '../../components/WishlistComponent/WishlistComponent';
import Loading from '../../components/Loading/Loading';
import useWishlist from '../../hooks/useWishlist';
import { actGetUserWishlist } from '../../libraries/redux/act/actGetUserWishlist';
import { useAppDispatch } from '../../hooks/storeHook';
import { useEffect } from 'react';
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet';
export default function Wishlist() {
  const {isError,records,openMenus,toggleMenu,getWishlistLoading}=useWishlist('')
  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(actGetUserWishlist());
  }, [dispatch]);
  const wishlistItem=records.map((record)=><WishlistComponent  key={record._id}
    record={record}
    isOpen={!!openMenus[record._id]}
    onToggle={toggleMenu} />)
  return (
       <section  className='mt-10'>
        <MetaHelmet metaTitle='Wishlist'/>
         <div className='flex items-center justify-center'>
         <Heading title='Wishlist'/>
          <FaHeart className='text-red-700 text-5xl -mt-9 ms-3'/>
         </div>
         <Loading error={isError} loadingStatus={getWishlistLoading} component="Products">
 
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 pb-12  -mt-15 -pt-4 flex justify-center items-center">
      <div className="flex flex-col items-start">
        
        <p className="mt-4 text-2xl tracking-tight leading-6 text-gray-600 dark:text-white">
          {records.length.toString().padStart(2, '0')} items
        </p>
        <div className="mt-10 lg:mt-12 grid   sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 lg:gap-y-0">
        {wishlistItem}
        </div>
      </div>
    </div>
    </Loading>
       </section>
  );
}