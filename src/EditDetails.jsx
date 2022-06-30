import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import InsideEditDetails from "./InsideEditDetails";



const EditDetails = () => 
{
    let {id} = useParams();

    let [exSttudent , setExstudent] = useState("");

    useEffect(()=>
    {
        fetch(`http://localhost:6005/StudentDetails/${id}`).then((Response)=>
    {
        return Response.json()
    }).then((content)=>
    {
        setExstudent(content)
    })
    } , [id])

    

    
    
    return ( 
        <div className="editDetails">
            {exSttudent && <InsideEditDetails exSttudent={exSttudent} id={id}/>}
       
        </div>
     );
}
 
export default EditDetails;