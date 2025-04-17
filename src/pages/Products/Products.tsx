
import Heading from '../../components/Heading/Heading'
import Loading from '../../components/Loading/Loading'
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet'
import Product from '../../components/product/Product'
import { useProducts } from '../../hooks/useProducts'

const Products = () => {
  const{isError,isLoading,records}=useProducts()
   const displayProduct=records.length==0? <p>No products found.</p>: records.map((record)=><Product record={record} key={record._id}/>)
  return (
    <div className='container mx-auto'>
      <MetaHelmet metaTitle='All Products'/>
      <Heading title='Products'/>
      <Loading error={isError} loadingStatus={isLoading} component="Products">

      <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-2">
           {displayProduct}


      </div>
      </Loading>
    </div>
  )
}

export default Products