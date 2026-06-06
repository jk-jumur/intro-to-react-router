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


/**
 * 1. use: usersPromise > Suspense > promise > use(usersPromise)
 * 
 * 2. [ less used so far ] > useSate + useEffect ( () => {}, [])
 * 
 * 3.set loader in the route definition; load data before component is rendered
 * 
 * 
 * 
 * 
 * 
 * 
 */