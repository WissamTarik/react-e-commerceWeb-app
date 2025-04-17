import { FaCartArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/storeHook'

const CartComponent = () => {
  let numOfCartItems:number=0
 numOfCartItems = useAppSelector((store) => store.addToCartReducer.numOfCartItems)
if(!numOfCartItems){
  if(localStorage.getItem('numOfCartItems')){
       numOfCartItems=Number(localStorage.getItem("numOfCartItems"))
}
else{
  numOfCartItems=0
}
}

  return (
  <Link to={'/cart'} className=' flex px-5 items-center justify-center relative'>
<FaCartArrowDown   size={30} />
<span className='ms-2'>Cart</span>
 <span className='bg-sky-800 text-white w-5 h-5 flex justify-center  items-center rounded-full absolute -top-2  start-[15%]'>{numOfCartItems?numOfCartItems:0}</span>
</Link>  )
}

export default CartComponent