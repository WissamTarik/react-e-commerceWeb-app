import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const MainLayout = () => {
  return (
    <div>
     <Navbar/>
     <main className="mt-0 pt-3">
     <Outlet/>

     </main>
     <Footer/>
    </div>
  )
}

export default MainLayout