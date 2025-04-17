import { ICategory } from '../../Interfaces/ICategory'
import { Link } from 'react-router-dom'

const Category = ({record}:{record:ICategory}) => {
      
  return (
 

    <Link to={`/partsOfProducts/${record.name}`} className="relative rounded-lg overflow-hidden  text-center  " >
    <div className="layer absolute inset-0 z-50 bg-black/10 hover:bg-black/50  peer group flex justify-center items-center ">
    <p className="cursor-pointer  absolute  top-[1000px] duration-1000 group-hover:top-1/2 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium transition-all">
      {record.name}
    </p>
    </div>
    <img src={record.image} alt={record.name} className="w-full h-[250px] object-contain  peer-hover:scale-110 peer-hover:rotate-12 transition-all duration-500" />
  </Link>
)
}

export default Category