import { Link } from 'react-router-dom'
import { BsCardChecklist } from "react-icons/bs";
import { useAppSelector } from '../../hooks/storeHook';
import { useEffect, useState } from 'react';

const WishListIcon = () => {
  const { count } = useAppSelector((store) => store.wishlistReducer);
  const [itemsCount, setItemsCount] = useState("0");

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setItemsCount(storedCount);
    }
  }, [count]); // add `count` as a dependency so it updates when redux updates it

 
  return<Link to={'/wishlist'} className=' flex px-5 items-center justify-center relative'>
  <BsCardChecklist   size={30} />
  <span className='ms-2'>Wishlist</span>
   <span className='bg-sky-800 text-white w-5 h-5 flex justify-center  items-center rounded-full absolute -top-2  start-[15%]'>{itemsCount}</span>
  </Link>
}

export default WishListIcon