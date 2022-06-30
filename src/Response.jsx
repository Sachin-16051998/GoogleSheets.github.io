import { Link } from "react-router-dom";
const Response = () => {
    return ( 
        <div className="response" style={{marginTop:"80px"}}>
        <h1 align="center" id="responseH1">Your Request has been Recorded Succesfully</h1>

        <Link to={"/sheets"}><h2 align="center">Go to View</h2></Link>
        </div>  
     );
}
 
export default Response;