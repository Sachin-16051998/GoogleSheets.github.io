import { Link } from "react-router-dom";
const DataInt = ({data}) => 
{
    let count = 1;
    return ( 
        <div className="dataInt">
            <table align="center" border="5px" cellPadding={5} cellSpacing={5} borderColor="#0f79af" className="Table1">
                <tr>
                <th>Sl.no </th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Status</th>
                </tr>
                
                {
                data.map((Student)=>
                (
                    <tr>
                        <td>{count++}</td>
                        <td>{Student.name}</td>
                        <td>{Student.email}</td>
                       <td><Link to={`/details${Student.id}`}>View</Link></td> 
                    </tr>
                )
                )
                }

        <caption align="bottom">This table includes overView of Student List <br /><span style={{fontSize:"12px"}}>Please go to <u>view</u> to get the full details</span> </caption>
            </table>
        </div>
     );
}
 
export default DataInt;