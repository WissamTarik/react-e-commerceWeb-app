import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
const token=localStorage.getItem('token')
if(token){
    return token? (
      <>
        {children}
      </>
    )
:
    ( <Navigate to={'/login?message=Access_required'}/>
    )

  }
}

export default ProtectedRoute