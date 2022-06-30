import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => 
{
    let [search , setSearch] = useState("")
    return ( 
            <div className="navBar">
            
            <nav>
                <div className="heading">
                    <Link to={"/"} id="heading">Google Sheets</Link>
                </div>

                <div className="links">
                <Link to="/">Home</Link>
                <Link to="/sheets">Sheets</Link>
                <Link to="/details">Details</Link>
                <Link to="/update">Update</Link>

                </div>
            </nav>

            <div className="searchbox">
                <input type="search" placeholder="Search for the Applicants" value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
                    <Link to={`/searchPage${search}`}><button>Search</button></Link>
            </div>

        </div>
     );
}
 
export default NavBar;