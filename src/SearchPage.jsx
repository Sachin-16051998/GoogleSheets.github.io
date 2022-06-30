import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import DataInt from "./DataInt";
import ErrorOf from "./ErrorOf";
import Pending from "./Pending";

const SearchPage = () => 
{
    let {search} = useParams();
    let {data , pending , error} = useFetch(`http://localhost:6005/studentDetails`);
console.log(data);
    return (  
        <div className="searchPage" style={{marginTop:"10px"}}>
            {pending && <Pending/>}
            {error && <ErrorOf error={error}/> }
            {data && <DataInt data={data.filter((val)=>{return val.name.includes(search)})}/>}
        </div>
    );
}
 
export default SearchPage;