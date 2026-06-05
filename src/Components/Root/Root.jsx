import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import './Root.css'

const Root = () => {
     return(
         <div>
           <Header/>
            <div className="root-main">
                 <SideBar></SideBar>
                <Outlet/>
            </div>
             
             <Footer/>
         </div>
     )
}
export default Root;