import React  from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateStudent(props) {
  console.log(props.create);
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [mobile,setMobile]=useState("");
  let [batch,setBatch]=useState("");

let navi = useNavigate();

  let handleSubmit = ()=>{
    let data = {
      name,
      email,
      mobile,
      batch,
    }
    let students = [...props.create.student];
    students.push(data)
    props.create.setStudent(students)
    navi('/view-student');
  }
  return <> 
  <form className='position-absolute top-10 start-50'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" className="form-control" id="exampleInputPassword1"onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1"onChange={(e)=>setMobile(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Batch</label>
    <input type="text" className="form-control" id="exampleInputPassword1"onChange={(e)=>setBatch(e.target.value)}/>
  </div>
  <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
</form>

  </>
}

export default CreateStudent