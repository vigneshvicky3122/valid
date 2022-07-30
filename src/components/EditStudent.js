import React,{useState, useEffect}  from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {url} from '../App'
import axios from 'axios';
import {useFormik} from 'formik';
import * as yup from 'yup'

function EditStudent() {
  let params = useParams();

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [mobile,setMobile] = useState("");
  let [batch,setBatch] = useState("");

  useEffect(()=>{
    getData()
  },[])

  let getData = async ()=>{
    let res = await axios.get(`${url}/${params.id}`)
    setName(res.data.name)
    setEmail(res.data.email)
    setMobile(res.data.mobile)
    setBatch(res.data.batch)
  }
 

  let navigate = useNavigate();


  let handleSubmit = async (data)=>{

      let res = await axios.put(`${url}/${params.id}`,data)
      
      if(res.status===200)
        navigate('/view-student')
  }
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      mobile:"",
      batch:"",
    },
    validationSchema: yup.object({
      name:yup.string().required('* Required'),
      email:yup.string().email('Enter a valid email').required('* Required'),
      mobile:yup.string().matches(/^\d{10}$/, "Enter a valid Mobile number").required('* Required'),
      batch:yup.string().max(10,'Maximum character allowed is 10').min(2,'Minimum Character Should be 2').required('* Required')
    }),
    onSubmit:values=>{
      handleSubmit(values)
    }

  })
  return <>
  <div>
      <h4 style={{'color': 'black'}}><strong>Edit Student Details</strong></h4>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Enter your Name and Last Name</label>
          <input
            id='name'
            name='name'
            type='text'
            className='form-control'
            placeholder='Ex: Vigensh A'
            onChange={(e)=>setName(e.target.value)}
            onBlur={formik.handleChange}
            value={name}
          />
          {formik.touched.name && formik.errors.name?(<div style={{"color":"red"}}>{formik.errors.name}</div>):null}
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Enter your Email</label>
          <input
            id='email'
            name='email'
            type='email'
            className='form-control'
            placeholder='Ex: vigenshvicy@3122@gmail.com'
            onChange={(e)=>setEmail(e.target.value)}
            onBlur={formik.handleChange}
            value={email}
          />
          {formik.touched.email && formik.errors.email?(<div style={{"color":"red"}}>{formik.errors.email}</div>):null}
        </div>

        <div className='form-group'>
          <label htmlFor='name'>Enter your Mobile Number</label>
          <input
            id='mobile'
            name='mobile'
            type='text'
            className='form-control'
            placeholder='Ex: 8304873122'
            onChange={(e)=>setMobile(e.target.value)}
            onBlur={formik.handleChange}
            value={mobile}
          />
          {formik.touched.mobile && formik.errors.mobile?(<div style={{"color":"red"}}>{formik.errors.mobile}</div>):null}
        </div>

        <div className='form-group'>
          <label htmlFor='name'>Enter your Batch code</label>
          <input
            id='batch'
            name='batch'
            type='text'
            className='form-control'
            placeholder='Ex: B36TWD'
            onChange={(e)=>setBatch(e.target.value)}
            onBlur={formik.handleChange}
            value={batch}
          />
          {formik.touched.batch && formik.errors.batch?(<div style={{"color":"red"}}>{formik.errors.batch}</div>):null}
        </div>

        <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </>
}



export default EditStudent