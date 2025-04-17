import { ImSpinner9 } from 'react-icons/im'
import { ILoading } from '../../Interfaces/ILoading'
import { MdOutlineError } from "react-icons/md";

const Loading = ({children,loadingStatus,component}:ILoading) => {
    if(loadingStatus=='pending'){
       return  <div className='min-h-screen -mt-10 flex flex-col justify-center items-center'>
     <ImSpinner9 className="animate-spin text-6xl -mt-10 mb-2 text-blue-500 " />

     <div>Please Wait............</div>
   </div>
    }
    else if(loadingStatus=='failed'){
        return  <div className='mt-10 pt-10 flex flex-col justify-center items-center text-red-500 font-bold'>
         <MdOutlineError className=' text-9xl  mb-2 text-red-500 '/>
         <h3  className='text-2xl font-bold my-1'>Failed to reload {component}</h3>
    </div>
    }

 else{ return (
   <>
   {children}
   </>
  )
}
}

export default Loading