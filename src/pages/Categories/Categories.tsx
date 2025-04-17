import Category from "../../components/Category/Category"
import Heading from "../../components/Heading/Heading"
import Loading from "../../components/Loading/Loading"
import MetaHelmet from "../../components/MetaHelmet/MetaHelmet"

import { useCategories } from "../../hooks/useCategories"

const Categories = () => {
 const {isError,isLoading,records}=useCategories()
  const categoriesList=records?.map((record)=><Category key={record._id} record={record}/>)
  return (
<>
<MetaHelmet metaTitle={'All categories'}/>

<Heading title="Categories"/>

<Loading error={isError} loadingStatus={isLoading} component="Categories">

<div className="flex flex-col md:grid md:grid-cols-3 gap-3 container mx-auto">
  {categoriesList}
</div>
</Loading>
</>


  )
}

export default Categories