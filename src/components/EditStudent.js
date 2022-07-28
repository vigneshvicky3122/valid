import React  from 'react';
import { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

function EditStudent(props) {
  let use = useParams(); 
  
  let [name,setName]=useState(props.editStudent.student[use.id].name);
  let [email,setEmail]=useState(props.editStudent.student[use.id].email);
  let [mobile,setMobile]=useState(props.editStudent.student[use.id].mobile);
  let [batch,setBatch]=useState(props.editStudent.student[use.id].batch);

  let navi = useNavigate();

  let handleSubmit = ()=>{
    let data = {
      name,
      email,
      mobile,
      batch,
    }
    let students = [...props.editStudent.student];
    students.splice(use.id,1,data)
    props.editStudent.setStudent(students)
    navi('/view-student');
  }

  return <>
 <form className='position-absolute top-10 start-50'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input type="text"  value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" value={email} className="form-control" id="exampleInputPassword1"onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
    <input type="text"  value={mobile} className="form-control" id="exampleInputPassword1"onChange={(e)=>setMobile(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Batch</label>
    <input type="text" value={batch} className="form-control" id="exampleInputPassword1"onChange={(e)=>setBatch(e.target.value)}/>
  </div>
  <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>Submit</button>
</form>
  </>
}
export default EditStudent