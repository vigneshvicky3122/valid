import React from 'react'
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom';
function ViewStudent(props) {
  
  let navi = useNavigate();

 let handleDelete = (i)=>{
        let cut = [...props.studentView.student];
              cut.splice(i,1);
              props.studentView.setStudent(cut);

 }

  return <div>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>mobile No</th>
          <th>Batch</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
       props.studentView.student.map((e,i)=>{
        return <tr key={i}>
          <td>{i+1}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.mobile}</td>
          <td>{e.batch}</td>
          <td>
          <button type="button" className="btn btn-info" onClick={()=>navi(`/edit-student/${i}`)}>Edit</button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-danger" onClick={()=>handleDelete()}>Delete</button>
          </td>

        </tr>
       })
      }
      </tbody>
    </Table>
  
  </div>
}

export default ViewStudent