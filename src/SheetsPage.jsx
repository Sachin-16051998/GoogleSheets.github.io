import useFetch from "./useFetch";
import DataInt from "./DataInt";
import ErrorOf from "./ErrorOf";
import Pending from "./Pending";

const SheetsPage = () => 
{
    let {data , pending , error} = useFetch(`http://localhost:6005/studentDetails`);
    
    return ( 
        <div className="sheetsPage" style={{marginTop:"10px"}}>

            {pending && <Pending/>}
            {error && <ErrorOf error={error}/> }
            {data && <DataInt data={data}/>}
            
            
        </div>
     );
}
 
export default SheetsPage;

