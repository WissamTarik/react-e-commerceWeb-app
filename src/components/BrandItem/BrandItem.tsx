import { IBrandInterface } from "../../Interfaces/IBrandInterface"

const BrandItem = ({record}:{record:IBrandInterface}) => {
  return (
    <div className="shadow shadow-sky-400 text-center rounded-md hover:-translate-y-1 transition duration-500 pb-3">
        <img src={record.image} alt={record.name} />
        <h4 className="text-2xl font-bold text-sky-500">{record.name}</h4>
    </div>
  )
}

export default BrandItem