import { useParams } from "react-router-dom";
import DataPageInt from "./DataPageInt";
import Pending from "./Pending"
import ErrorOf from "./ErrorOf"
import useFetch from "./useFetch";
const DetailsPage = () => 
{
    let {id} = useParams();

    let {data , error , pending} = useFetch(`http://localhost:6005/studentDetails/${id}`)


    return (  
        <div className="detailsPage">
            {pending && <Pending/>}
            {error && <ErrorOf error={error}/>}
            {data && <DataPageInt data={data}/>}
        </div>
    );
}
 
export default DetailsPage;