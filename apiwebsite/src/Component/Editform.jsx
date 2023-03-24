import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Editform = () => {
const {id} = useParams();
const[data,setData] = useState([])
const navigate = useNavigate();

useEffect(() => {
  
axios.get("http://localhost:3000/students/" + id)
.then((response) => (
setData(response.data)
)).catch(error => {
    console.log(error)
})


}, [])



const handlesubmit = (event) => {
    event.preventDefault();
axios.put("http://localhost:3000/students/" + id, data)
.then(((response )=> {
    setData(response.data)
    alert("Data is Updated Successfully...");
    navigate("/");
})).catch(error => {
    console.log(error)
})

}


  return (
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<form className='form-group' onSubmit={handlesubmit} >
<h1>Edit Application Form</h1>
    <input  className='form-control m-3 ' type="text" value={data.fname} onChange={(e) => setData({...data,fname:e.target.value})} placeholder='Firstname'   name="fname" />
    <input  className='form-control m-3 ' type="text" placeholder='Lastname' value={data.lname} onChange={(e) => setData({...data,lname:e.target.value})}  name="lname"  />
    <input  className='form-control m-3 ' type="date" placeholder='Date of birth' value={data.dob} onChange={(e) => setData({...data,dob:e.target.value})}  name="dob"  />
    <input  className='form-control m-3 ' type="text" placeholder='Education' value={data.education} onChange={(e) => setData({...data,education:e.target.value})}  name="education"  />
    <select className='form-select m-3 ' value={data.gender} onChange={(e) => setData({...data,gender:e.target.value})} name="gender"  >
    <option value="Gender">Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
    </select>
    <input  className='form-control m-3 ' type="number" placeholder='Mobile' value={data.number} onChange={(e) => setData({...data,number:e.target.value})} name="number"  />
    <input  className='form-control m-3 ' type="email" placeholder='Email Id' value={data.email} onChange={(e) => setData({...data,email:e.target.value})}  name="email" />
    <input  className='form-control m-3 ' type="text" placeholder='City' value={data.city} onChange={(e) => setData({...data,city:e.target.value})} name="city" />
    <input  className='form-control m-3 ' type="text" placeholder='Destrict' value={data.destrict}  onChange={(e) => setData({...data,destrict:e.target.value})} name="destrict" />
    <input  className='form-control m-3 ' type="text" placeholder='State' value={data.state}  onChange={(e) => setData({...data,state:e.target.value})}  name="state" />
    <input  className='form-control m-3 ' type="text" placeholder='Country' value={data.country}    onChange={(e) => setData({...data,country:e.target.value})} name="country" />
    <button className='btn btn-warning m-3' >Update</button>
    </form>
    </div>
    </>
  )
}

export default Editform
