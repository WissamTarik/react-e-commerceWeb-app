import { Link } from "react-router-dom"
import { CartItems } from "../../Interfaces/IAllOrdersInterface"

const OrderItem = ({cartItem}:{cartItem:CartItems}) => {
  return (
    <tr>
                  <td className="whitespace-nowrap py-4 md:w-[384px]">
                    <div className="flex items-center gap-4">
                        <img className=" w-1/4  dark:hidden" src={cartItem.product.imageCover} alt={cartItem.product.title} />
                      <Link to={`/products/productDetails/${cartItem.product._id}`} className="hover:underline">{cartItem.product.title.split(' ',3).join(' ')}</Link>
                    </div>
                  </td>
                  <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x{cartItem.count}</td>
                  <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">{cartItem.price} EGP</td>
                </tr>
  )
}

export default OrderItem