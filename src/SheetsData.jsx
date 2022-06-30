import { useEffect , useState } from "react";
const SheetsData = () => 
{
    let [data , setData] = useState("");

    useEffect(()=>
    {
        fetch("http://localhost:6005/StudentDetails").then((Response)=>
    {
        return(Response.json())
    }).then((contant)=>
    {
        setData(contant)
    })
    },[])
    let count = 1;
    
    return ( 
        <div className="sheetsData" style={{marginTop:"10px"}}>
            
            <table align="center" border="5px" cellPadding={5} cellSpacing={5} borderColor="green">
                <tr>
                <th>Sl.no </th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Date of Birth</th>
                <th>Stream</th>
                <th>Nationality</th>
                <th>State</th>
                <th>Languages Known</th>
                <th>Tenth %</th>
                <th>Twelveth %</th>
                <th>UG %</th>
                <th>PG %</th>
                <th>Resume</th>
                <th>Status</th>
                </tr>

                {data &&
                
                data.map((Student)=>
                (
                    <tr>
                        <td>{count++}</td>
                        <td>{Student.name}</td>
                        <td>{Student.email}</td>
                        <td>{Student.contact}</td>
                        <td>{Student.gender}</td>
                        <td>{Student.status}</td>
                        <td>{Student.dob}</td>
                        <td>{Student.branch}</td>
                        <td>{Student.nation}</td>
                        <td>{Student.state}</td>
                        <td>{Student.lang}</td>
                        <td>{Student.tenth}</td>
                        <td>{Student.puc}</td>
                        <td>{Student.ug}</td>
                        <td>{Student.pg}</td>
                    </tr>
                )
                )}
                

            </table>
        </div>
     );
}
 
export default SheetsData;