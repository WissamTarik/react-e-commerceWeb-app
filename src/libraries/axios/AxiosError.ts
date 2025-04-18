import axios from "axios"

const AxiosError = (error:unknown) => {
    if(axios.isAxiosError(error)){
        return error.response?.data.message||error.message
       }
       else{
          return "Unexpected error"
       }
}

export default AxiosError