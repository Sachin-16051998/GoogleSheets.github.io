import { useHistory , Link } from "react-router-dom";
const DataPageInt = ({data}) => 
{

        let history = useHistory();
    const handleDelete = (id)=>
    {
        fetch(`http://localhost:6005/StudentDetails/${id}` , {method:"DELETE"}).then(()=>
        {
            history.push("/response")
        })
    }

    return ( 
        <div className="dataPageInt">
            
            <div className="one">
            <label className="labelTag">Applicant's Name:</label>
            <input type="text" className="input" value={data.name} />
            </div>

            <div className="one">
            <label className="labelTag">Applicant's Email:</label>
            <input type="text" className="input" value={data.email} />
            </div>

            <div className="one">
            <label className="labelTag">Contact:</label>
            <input type="text" className="input" value={data.contact} />
            </div>

            <div className="one">
            <label className="labelTag">Gender:</label>
            <input type="text" className="input" value={data.gender} />
            </div>

            <div className="one">
            <label className="labelTag">Date Of Birth:</label>
            <input type="text" className="input" value={data.dob} />
            </div>

            <div className="one">
            <label className="labelTag">Marital Status:</label>
            <input type="text" className="input" value={data.status} />
            </div>

            <div className="one">
            <label className="labelTag">Stream:</label>
            <input type="text" className="input" value={data.branch} />
            </div>

            <div className="one">
            <label className="labelTag">Nationality:</label>
            <input type="text" className="input" value={data.nation} />
            </div>

            <div className="one">
            <label className="labelTag">State:</label>
            <input type="text" className="input" value={data.state} />
            </div>

            <div className="one">
            <label className="labelTag">Languges Canditate Known:</label>
            <input type="text" className="input" value={data.lang} />
            </div>

            <div className="one">
            <label className="labelTag">Tenth %:</label>
            <input type="text" className="input" value={data.tenth} />
            </div>

            <div className="one">
            <label className="labelTag">Twelveth %:</label>
            <input type="text" className="input" value={data.puc} />
            </div>

            <div className="one">
            <label className="labelTag">UG %:</label>
            <input type="text" className="input" value={data.ug} />
            </div>

            <div className="one">
            <label className="labelTag">PG %:</label>
            <input type="text" className="input" value={data.pg} />
            </div>
            

            <div className="forFlex">
            <Link to={`/editDetails${data.id}`}><button id="editStudent">Edit</button></Link>
            <button id="deleteStudent" onClick={()=>{handleDelete(data.id)}}>Delete</button>
            </div>
            
        </div>
     );
}
 
export default DataPageInt;