import { Link } from "react-router";

const Header = () => {
      return(
         <div>
            <h2>This is header</h2>
            <nav>
                {/* /* <a href="/">Home</a> */}
                {/* <a href="/mobiles">Mobiles</a> first slash mobiles mane kon path ee jabe 2nd Mobiles mane ang core er moddhe ki dekhabe eta eki vabe baki gula*/ }
                {/* <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a>
                <a href=""></a>  */}

                {/* amra use korbo link Component ta  jeta react router ee deya ache*/}
                 
                 <Link to="/">Home</Link>
                 <Link to="/mobiles">Mobiles</Link>
                 <Link to="/laptops">Laptops</Link>
                
            </nav>
            </div>
      )
}
export default Header;