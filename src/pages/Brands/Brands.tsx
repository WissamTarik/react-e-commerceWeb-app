import BrandItem from '../../components/BrandItem/BrandItem'
import Heading from '../../components/Heading/Heading'
import Loading from '../../components/Loading/Loading'
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet'
import { useBrands } from '../../hooks/useBrands'

const Brands = () => {
  const {isLoading,isError,records}=useBrands()
  const brands=records.map((record)=><BrandItem key={record._id} record={record}/>)
    
  return (
    <section className='mt-7 py-3'>
            <MetaHelmet metaTitle={'All Brands'}/>

      <Heading title='Our Brands'/>
       <Loading loadingStatus={isLoading} error={isError}>
       <div className='grid  lg:grid-cols-6 min-[500px]:grid-cols-3  min-[380px]:grid-cols-2 container mx-auto gap-4'>
      {brands}
</div>
       </Loading>
    </section>
  )
}

export default Brands