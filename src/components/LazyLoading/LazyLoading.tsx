import { ImSpinner9 } from 'react-icons/im'
 
type LazyLoadingProps={
    message?:string
}
const LazyLoading = ({message}:LazyLoadingProps) => {
  return   <section className='min-h-screen flex flex-col justify-center items-center'>
       <ImSpinner9 className="animate-spin text-6xl -mt-10 mb-2 text-blue-700 " />
      {message&& <h3 className='text-2xl font-bold my-1'>{message} is Loading</h3>}
       <div>Please Wait A Moment</div>
     </section>
}

export default LazyLoading