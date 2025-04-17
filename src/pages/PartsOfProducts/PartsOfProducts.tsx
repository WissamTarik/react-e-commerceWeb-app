import Heading from '../../components/Heading/Heading';
import Product from '../../components/product/Product';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { FaRegFaceSadCry } from "react-icons/fa6";
import { usePartsOfProducts } from '../../hooks/usePartsOfProducts';
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet';

const PartsOfProducts = () => {
    const {categoryName}=useParams()
   
    const {filteredProducts,isError,isLoading}=usePartsOfProducts(categoryName as string)
    const displayProduct=filteredProducts?.map((record)=><Product record={record} key={record._id}/>)
    if(filteredProducts.length==0){

      return  <Loading error={isError} loadingStatus={isLoading}>
      <MetaHelmet metaTitle={categoryName as string}/>

      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
       <FaRegFaceSadCry className='text-9xl text-sky-950 my-5 '/>
      <h2 className="text-2xl font-semibold text-red-600 mb-2">
        No Products Found
      </h2>
      <p className="text-gray-600 text-base max-w-md">
        Sorry, we couldn't find any products in the <span className="font-medium text-primary">{categoryName}</span> category.
        Try exploring other categories or check back later.
      </p>
      <Link to={'/categories'}
  className="mt-6 px-6 py-2 bg-primary bg-sky-800 text-white rounded-full hover:bg-primary-dark transition">
  Browse Other Categories
</Link>
    </div>
    </Loading>
    }
  return (
    <div className='container mx-auto'>
      <MetaHelmet metaTitle={categoryName as string}/>

    <Heading title={`${categoryName} Category`}></Heading> 
    <Loading error={isError} loadingStatus={isLoading}>

    <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-2">
         {displayProduct}


    </div>
    </Loading>
  </div>
  )
}

export default PartsOfProducts