import Pending from "./Pending"
import ErrorOf from "./ErrorOf"
import useFetch from "./useFetch";
const DetailsPage2 = () => 
{
     let {data , error , pending} =  useFetch("http://localhost:6005/StudentDetails")

     let count = 1;

    return ( 
        <div className="detailsPage" style={{marginTop:"10px"}}>
            {pending && <Pending/>}
            {error && <ErrorOf error = {error}/> }

        {data && <table align="center" border="5px" cellPadding={1} cellSpacing={2} borderColor="#0f79af" className="Table2">
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
                </tr>

                {
                
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
                )
                }
                

            </table> }
        </div>
     );
}
 
export default DetailsPage2;