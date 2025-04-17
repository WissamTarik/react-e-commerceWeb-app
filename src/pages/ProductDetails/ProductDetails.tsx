import { FaStar } from 'react-icons/fa';
import Loading from '../../components/Loading/Loading';
import Slider from "react-slick";
import { useParams } from 'react-router-dom';
import Product from '../../components/product/Product';
import { useProductsDetails } from '../../hooks/useProductsDetails';
import CartBtn from '../../components/CartBtn/CartBtn';
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet';

const ProductDetails = () => {

  const {prefix}=useParams()
  
   const {isError,isLoading,settings,filteredProducts,allProductsError,allProductsIsLoading,record}=useProductsDetails(prefix as string)
   
   return (
     <div className="p-3  m-auto container">
      <MetaHelmet metaTitle={record.title}/>
        <Loading error={isError} loadingStatus={isLoading}>
        <div className="mt-6 sm:mt-10">
        
        <div className="grid gird-cols-1 md:grid-cols-[1fr_2fr] sm:grid-cols-2 gap-6 h-max items-center">
          {/* Product Image */}
          <div className="overflow-hidden rounded-xl ">
            <img
              src={record?.imageCover}
              alt={record?.title}
              className="sm:w-full w-3/4 rounded-xl mx-auto"
            />
          </div>
          {/* Product Details */}
          <div className="flex flex-col sm:w-full w-3/4 mx-auto  ">
            <div>
              {/* Product Title */}
              <h1 className="text-3xl text-sky-900 font-semibold sm:text-4xl">
                {record.title}
              </h1>
              <h1 className="text-xl text-sky-600 mt-4 font-semibold sm:text-2xl">
                {record.category.name}
              </h1>
              {/* Product Description */}
              <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                {record.description}
              </p>
           
              {/* Product Price */}
              <div className={`flex justify-between items-center pe-6 mb-10 mt-5`}>
              {record.priceAfterDiscount?<div><span className="text-xl text-slate-900 font-semibold sm:text-2xl">
                {record.priceAfterDiscount} EGP
              </span>
              <span className=' line-through text-red-600 ms-2'>{record.price}</span>
              </div>:<span className="text-xl text-slate-900 font-semibold sm:text-2xl">
                {record.price} EGP
              </span>}
              <span className='flex items-center'><span>{record.ratingsAverage} </span> <FaStar className="text-yellow-500 ms-2" /></span>
              </div>
            </div>
            <div>
             
              {/* Order Button */}
              <div className="md:w-1/2 text-left mb-4 ">
        <CartBtn productId={record._id}/>
              </div>
            </div>
          </div>
        </div>
    </div>


        </Loading>
        <div>
        <h2 className="text-2xl font-bold mt-10 mb-3 text-sky-800">Related Products</h2>
        <Loading loadingStatus={allProductsIsLoading} error={allProductsError} >
        <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        {filteredProducts?.map((product)=><Product key={product._id} record={product}/>)}

      </Slider>
    </div>

        </Loading> 

        </div>
    </div>
    )
}

export default ProductDetails