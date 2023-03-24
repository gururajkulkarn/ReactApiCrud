import React from 'react'
import BasicModal from './Modal'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import Loading1 from './Loading';

const Formdata = () => {

const [isLoading,setIsLoading] = useState(true)

useEffect(() => {
 setTimeout(()=>{
setIsLoading(false)
 },3000)
}, [])

  const [inputdata,setInputdata] = useState({
    fname:"",
    lname:"",
    dob:"",
    education:"",
    gender:"",
    number:"",
    email:"",
    city:"",
    destrict:"",
    state:"",
    country:""
  })

const navigate = useNavigate();

const handlesubmit = (event) => {
  event.preventDefault();

axios.post("http://localhost:3000/students",inputdata)
.then(response => {
  toast.success("Your form is submitted successfully...");
    navigate('/')
})
.catch(error => {
  console.log(error)
})
setInputdata({
  fname:"",
  lname:"",
  dob:"",
  education:"",
  gender:"",
  number:"",
  email:"",
  city:"",
  destrict:"",
  state:"",
  country:""
 
})

}


  return (
    <>

{ isLoading ? <Loading1/> :

    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   
<form className='form-group' onSubmit={handlesubmit} >
<h1>General Application Form</h1>

    <input  className='form-control m-3 ' type="text" onChange={e => setInputdata({...inputdata,fname:e.target.value})} placeholder='Firstname'   name="fname" required/>
    <input  className='form-control m-3 ' type="text" placeholder='Lastname' onChange={e => setInputdata({...inputdata,lname:e.target.value})}  name="lname" required />
    <input  className='form-control m-3 ' type="date" placeholder='Date of birth' onChange={e => setInputdata({...inputdata,dob:e.target.value})}  name="dob" required />
    <input  className='form-control m-3 ' type="text" placeholder='Education' onChange={e => setInputdata({...inputdata,education:e.target.value})}  name="education" required />
    <select className='form-select m-3 ' onChange={e => setInputdata({...inputdata,gender:e.target.value})} name="gender"  required>
    <option value="">Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
    </select>
    <input  className='form-control m-3 ' type="number" placeholder='Mobile' onChange={e => setInputdata({...inputdata,number:e.target.value})} name="number"  required/>
    <input  className='form-control m-3 ' type="email" placeholder='Email Id' onChange={e => setInputdata({...inputdata,email:e.target.value})}  name="email" required/>
    <input  className='form-control m-3 ' type="text" placeholder='City' onChange={e => setInputdata({...inputdata,city:e.target.value})} name="city" required/>
    <input  className='form-control m-3 ' type="text" placeholder='Destrict' onChange={e => setInputdata({...inputdata,destrict:e.target.value})} name="destrict" required/>
    <input  className='form-control m-3 ' type="text" placeholder='State' onChange={e => setInputdata({...inputdata,state:e.target.value})}  name="state" required/>
    <input  className='form-control m-3 ' type="text" placeholder='Country' onChange={e => setInputdata({...inputdata,country:e.target.value})} name="country"required />
    <button className='btn btn-primary m-3' >Submit</button>
    </form>
    <div style={{marginTop:"710px",marginLeft:"-102px",width:"250px"}}>
    <BasicModal/>
    </div>
<ToastContainer />

    </div>
      }
    </>
  )
}

export default Formdata
