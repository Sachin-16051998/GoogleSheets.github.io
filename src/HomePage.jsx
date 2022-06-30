import { useHistory } from "react-router-dom";
import { useState } from "react";

const HomePage = () => 
{
    let [name , setName] = useState("");
    let [email , setEmail] = useState("");
    let [contact , setContact] = useState("");
    let [tenth , setTenth] = useState("");
    let [puc , setPuc] = useState("");
    let [ug , setUg] = useState("");
    let [pg , setPg] = useState("");
    let [gender , setGender] = useState("");
    let [dob , setDob] = useState("");
    let [branch , setBranch] = useState("")
    let [state , setState] = useState("")
    let [nation , setNation] = useState("")
    let [status , setStatus] = useState("")


    

    let history = useHistory();


    const handleSubmit = (e)=>
    {
        e.preventDefault();

        var lang = e.currentTarget.lang.value;

        let data = {name , email , contact  , gender , status,  dob ,branch , state ,lang ,  nation, tenth , puc , ug , pg}

        fetch("http://localhost:6005/StudentDetails" , {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then(()=>
        {
            history.push("/response")
        })
    }

    return ( 
        <div className="homePage" >
            <form className="formTag" onSubmit={handleSubmit}>
                <h5 align="center">(Please be prepared with all the data before filling the form ) <span>Fields with <span style={{color:"red",fontSize:"16px"}}><b>*</b></span> are must Required contents make sure to fill it before submit</span></h5>

                <div className="one">
                    <label htmlFor="Name">Applicants Name<span style={{color:"red" }}><b>*</b></span>:</label> <br />
                    <input type="text" id="Name" value={name} onChange={(event)=>{setName(event.target.value)}} title="hh" className="input" required/>
                </div>


                <div className="one">
                <label htmlFor="email">Email<span style={{color:"red" }}><b>*</b></span>:</label> <br />
                <input type="email" id="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} className="input" required/>
                </div>

                <div className="one">
                <label htmlFor="CN" aria-required>Contact Number:</label> <br />
                <input type="tel" id="CN" value={contact} onChange={(event)=>{setContact(event.target.value)}} className="input"/>
                </div>

                
                <div className="one">

                <label htmlFor="label">Select Your Gender:</label> <br />
                    
                    <div className="two" style={{padding:"10px"}}>

                    <input type="radio" name="gender"  id="Male" value='Male' onClick={(event)=>{setGender(event.target.value)}}/><label htmlFor="Male">Male</label> <br />

                    <input type="radio" name="gender"  id="Female" value="Female" onClick={(event)=>{setGender(event.target.value)}}/> <label htmlFor="Female">Female</label><br />

                    <input type="radio" name="gender"  id="TransGender" value="Transgender" onClick={(event)=>{setGender(event.target.value)}}/> <label htmlFor="TransGender">TransGender</label>
                    </div>
                
                </div>
                
                <div className="one">
                <label htmlFor="dob">Date of Birth</label> <br />
                <input type="date" className="input" max={"2000-01-01"} min={"1990-01-01"} value={dob} onChange={(event)=>{setDob(event.target.value)}} id="dob"/>
                </div>

                <div className="one" >
                    <label htmlFor="status">Marital Status:</label><br />

                    <div className="four" style={{padding:"10px"}}>
                        <input type="radio" name="status" id="single" value={"Single"} onClick={(event)=>{setStatus(event.target.value)}}/> <label htmlFor="single">Single</label>

                        <input type="radio" name="status" id="Taken" value={"Taken"} onClick={(event)=>{setStatus(event.target.value)}}/> <label htmlFor="Taken">Taken</label>

                        <input type="radio" name="status" id="married" value={"Married"} onClick={(event)=>{setStatus(event.target.value)}}/> <label htmlFor="married">Married</label>

                        <input type="radio" name="status" id="Divorced" value={"Divorced"} onClick={(event)=>{setStatus(event.target.value)}}/> <label htmlFor="Divorced">Divorced</label>

                        <input type="radio" name="status" id="Widow" value={"Widow"} onClick={(event)=>{setStatus(event.target.value)}}/> <label htmlFor="Widow">Widow</label>

                    </div>
                </div>

                <div className="one">

                <label htmlFor="branch">Stream<span style={{color:"red" }}><b>*</b></span>:</label><br />
                <select id="branch"  onClick={(event)=>{setBranch(event.target.value)}} required>
                    <optgroup label="IT Background">
                         <option value="">-select-</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Science">Information Science</option>
                        <option value="Civil Engineering" >Civil Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>

                    </optgroup>

                    <optgroup label="Non IT">
                        <option value="BSC">BSC</option>
                        <option value="MSC">MSC</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                    </optgroup>
                </select>
                </div>

                <div className="one">
                <label htmlFor="nationality" >Nationality<span style={{color:"red" }}><b>*</b></span>:</label>
                <input list="browse" className="input" onChange={(event)=>{setNation(event.target.value)}} required/>

                <datalist id="browse">
                    <option value="Indian">Indian</option>
                </datalist>
                </div>

                <div className="one">
                <label htmlFor="state">Select Your State:</label>
                <select id="state" onClick={(event)=>{setState(event.target.value)}}>
                    <option value="">-select-</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamilnadu">Tamilnadu</option>
                    <option value="Andra Pradesh">Andra Pradesh</option>
                    <option value="Goa">Goa</option>
                    <option value="Kerala">Kerala</option>
                </select>
                </div>

                <div className="one">
                    <label htmlFor="lang">Select the languauges You Know:</label><br />

                    <div className="three" style={{padding:"10px"}}>

                    <input type="checkbox" id="lang" value="Kannada" /><label htmlFor="">Kannada</label>
                    <br />
                    <input type="checkbox" id="lang" value="English" /><label htmlFor="">English</label> <br />

                    <input type="checkbox" id="lang" value="Tamil" /><label htmlFor="">Tamil</label> <br />

                    <input type="checkbox" id="lang" value="Telgu" /><label htmlFor="">Telgu</label> <br />

                    <input type="checkbox" id="lang" value="Hindi" /><label htmlFor="">Hindi</label> <br />

                    </div>

                </div>

                <div className="one">
                <label htmlFor="tenth" aria-required>10th %<span style={{color:"red" }}><b>*</b></span>:</label> <br />
                <input type="number" id="tenth" value={tenth} onChange={(event)=>{setTenth(event.target.value)}} className="input"/>
                </div>

                <div className="one">
                <label htmlFor="pu" aria-required>PUC %<span style={{color:"red" }}><b>*</b></span>:</label> <br />
                <input type="text" id="pu" value={puc} onChange={(event)=>{setPuc(event.target.value)}} className="input"/>
                </div>

                <div className="one">
                <label htmlFor="ug" aria-required>UG %<span style={{color:"red" }}><b>*</b></span>:</label> <br />
                <input type="text" id="ug" value={ug} onChange={(event)=>{setUg(event.target.value)}} className="input"/>
                </div>

                <div className="one">
                <label htmlFor="pg" aria-required>PG %:</label> <br /><small>Only if Done</small>
                <input type="text" id="pg" value={pg} onChange={(event)=>{setPg(event.target.value)}} className="input"/>
                </div>

                
                <fieldset style={{height:"70px"}}>
                    <legend align="center"><label htmlFor="resume">Upload Your Resume / CV<span style={{color:"red" }}><b>*</b></span>:</label><br /></legend>
                <input type="file" accept=".pdf" id="resume" style={{border:"transparent"}}/>
                </fieldset>

                <input type="submit" id="submit"/>

            </form>
        </div>
     );
}
 
export default HomePage;