import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import './Root.css'

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)
     return(
         <div>
           <Header/>
            <div className="root-main">
                 <SideBar></SideBar>
                 {isNavigating && <span>Loading...</span>}
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