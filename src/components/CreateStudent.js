import React from 'react'
import {useNavigate} from 'react-router-dom';
import {url} from '../App'
import axios from 'axios'
import {useFormik} from 'formik';
import * as yup from 'yup'

function CreateStudent() {
  let navigate = useNavigate();

    let handleSubmit = async (data)=>{
     
      let res = await axios.post(url,data);
      if(res.status===201)
        navigate('/view-student')
  }
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      batch:"",
      mobile:""
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
      <h4 style={{'color': 'black'}}><strong>Add Student Details</strong></h4>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Enter your Name and Last Name</label>
          <input
            id='name'
            name='name'
            type='text'
            className='form-control'
            placeholder='Ex: Vigensh A'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.batch}
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

export default CreateStudent