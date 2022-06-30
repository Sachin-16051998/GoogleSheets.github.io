import { Link } from "react-router-dom";
const FileNotFound = () => {
    return ( 
        <div className="fileNotFound" >
            <h1 > <strike>Unfortunately the page you are looking for has been moved or deleted.</strike></h1>
            <Link to={"/"}><button>Go to HoMe page</button></Link>
        </div>
     );
}
 
export default FileNotFound;